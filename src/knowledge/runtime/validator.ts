import type { RawKnowledgeAssets } from './loader'
import { extractKnowledgeReferences } from './resolver'
import { extractCitationMarkerIds, findCitationMarkersAfterPunctuation } from './citation-markers'

export interface ValidationIssue {
  code: string
  message: string
}

function duplicateValues(values: string[]): string[] {
  const seen = new Set<string>()
  const duplicates = new Set<string>()
  for (const value of values) {
    if (seen.has(value)) duplicates.add(value)
    seen.add(value)
  }
  return [...duplicates]
}

export function validateKnowledgeAssets(assets: RawKnowledgeAssets): ValidationIssue[] {
  const issues: ValidationIssue[] = []
  const entries = assets.entries.map((item) => item.definition)
  const entryIds = new Set(entries.map((entry) => entry.id))
  const groupIds = new Set(assets.groups.map((group) => group.id))
  const categoryIds = new Set(assets.categories.map((category) => category.id))
  const sourceIds = new Set(assets.sources.map((source) => source.id))
  const relationTypeIds = new Set(assets.relationTypes.map((type) => type.id))

  for (const id of duplicateValues(entries.map((entry) => entry.id))) {
    issues.push({ code: 'duplicate-entry-id', message: `重复 Knowledge ID: ${id}` })
  }
  for (const key of duplicateValues(entries.map((entry) => `${entry.categoryId}/${entry.slug}`))) {
    issues.push({ code: 'duplicate-entry-slug', message: `同分类下 slug 重复: ${key}` })
  }
  for (const id of duplicateValues(assets.groups.map((group) => group.id))) {
    issues.push({ code: 'duplicate-group-id', message: `重复 Group ID: ${id}` })
  }
  for (const id of duplicateValues(assets.categories.map((category) => category.id))) {
    issues.push({ code: 'duplicate-category-id', message: `重复 Category ID: ${id}` })
  }
  for (const id of duplicateValues(assets.relationTypes.map((type) => type.id))) {
    issues.push({ code: 'duplicate-relation-type-id', message: `重复 Relation Type ID: ${id}` })
  }
  for (const id of duplicateValues(assets.sources.map((source) => source.id))) {
    issues.push({ code: 'duplicate-source-id', message: `重复 Source ID: ${id}` })
  }

  for (const category of assets.categories) {
    if (!groupIds.has(category.groupId)) {
      issues.push({ code: 'missing-group', message: `${category.id} 引用了不存在的知识分组 ${category.groupId}` })
    }

    if (!category.overviewEntryId) continue
    const overview = entries.find((entry) => entry.id === category.overviewEntryId)
    if (!overview) {
      issues.push({ code: 'missing-category-overview', message: `${category.id} 引用了不存在的概说条目 ${category.overviewEntryId}` })
    } else if (overview.categoryId !== category.id) {
      issues.push({ code: 'category-overview-mismatch', message: `${category.id} 的概说条目 ${category.overviewEntryId} 属于分类 ${overview.categoryId}` })
    }
  }

  for (const loaded of assets.entries) {
    const entry = loaded.definition
    if (!categoryIds.has(entry.categoryId)) {
      issues.push({ code: 'missing-category', message: `${entry.id} 引用了不存在的分类 ${entry.categoryId}` })
    }

    for (let index = 0; index < entry.sections.length; index += 1) {
      const section = entry.sections[index]
      if (!loaded.resolvedSections[index]) {
        issues.push({ code: 'missing-section-source', message: `${entry.id}/${section.id} 找不到正文文件 ${section.source}` })
        continue
      }
      const resolved = loaded.resolvedSections[index]!
      for (const reference of extractKnowledgeReferences(resolved.content)) {
        if (!entryIds.has(reference.targetId)) {
          issues.push({ code: 'missing-reference-target', message: `${entry.id}/${section.id} 引用了不存在的知识 ${reference.targetId}` })
        }
      }
      const sectionCitations = section.citations ?? []
      const citationIds = sectionCitations.flatMap((citation) => citation.id ? [citation.id] : [])
      for (const duplicate of duplicateValues(citationIds)) {
        issues.push({ code: 'duplicate-section-citation-id', message: `${entry.id}/${section.id} 的脚注标识重复: ${duplicate}` })
      }

      const markerIds = extractCitationMarkerIds(resolved.content)
      for (const placement of findCitationMarkersAfterPunctuation(resolved.content)) {
        issues.push({
          code: 'citation-marker-after-punctuation',
          message: `${entry.id}/${section.id} 的脚注 ${placement.id} 位于标点“${placement.punctuation}”之后，应置于标点之前`
        })
      }
      const markerIdSet = new Set(markerIds)
      const citationIdSet = new Set(citationIds)
      for (const markerId of markerIdSet) {
        if (!citationIdSet.has(markerId)) {
          issues.push({ code: 'missing-citation-definition', message: `${entry.id}/${section.id} 的脚注 ${markerId} 没有对应参考资料` })
        }
      }
      for (const citationId of citationIdSet) {
        if (!markerIdSet.has(citationId)) {
          issues.push({ code: 'unused-citation-definition', message: `${entry.id}/${section.id} 的参考资料 ${citationId} 没有正文脚注位置` })
        }
      }

      for (const citation of sectionCitations) {
        if (!sourceIds.has(citation.sourceId)) {
          issues.push({ code: 'missing-section-source-id', message: `${entry.id}/${section.id} 引用了不存在的来源 ${citation.sourceId}` })
        }
      }
    }

    for (const relation of entry.relations ?? []) {
      if (!relationTypeIds.has(relation.type)) {
        issues.push({ code: 'missing-relation-type', message: `${entry.id} 使用了不存在的关系类型 ${relation.type}` })
      }
      if (!entryIds.has(relation.target)) {
        issues.push({ code: 'missing-relation-target', message: `${entry.id} 的关系指向不存在的知识 ${relation.target}` })
      }
      for (const citation of relation.citations ?? []) {
        if (!sourceIds.has(citation.sourceId)) {
          issues.push({ code: 'missing-relation-source-id', message: `${entry.id} 的关系引用了不存在的来源 ${citation.sourceId}` })
        }
      }
    }

    for (const citation of entry.citations ?? []) {
      if (!sourceIds.has(citation.sourceId)) {
        issues.push({ code: 'missing-source-id', message: `${entry.id} 引用了不存在的来源 ${citation.sourceId}` })
      }
    }

    for (const duplicate of duplicateValues(entry.sections.map((section) => section.id))) {
      issues.push({ code: 'duplicate-section-id', message: `${entry.id} 的 section ID 重复: ${duplicate}` })
    }
  }

  return issues
}

export function assertValidKnowledgeAssets(assets: RawKnowledgeAssets): void {
  const issues = validateKnowledgeAssets(assets)
  if (issues.length === 0) return
  const detail = issues.map((issue) => `- [${issue.code}] ${issue.message}`).join('\n')
  throw new Error(`知识库数据校验失败：\n${detail}`)
}
