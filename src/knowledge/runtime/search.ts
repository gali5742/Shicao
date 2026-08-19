import type { KnowledgeSearchResult } from '../schema'
import type { KnowledgeRegistry } from './registry'

export function searchRegistry(registry: KnowledgeRegistry, query: string): KnowledgeSearchResult[] {
  const normalized = query.trim().toLocaleLowerCase('zh-CN')
  if (!normalized) return []

  const results = registry.listEntries().flatMap((entry) => {
    const title = entry.title.toLocaleLowerCase('zh-CN')
    const aliases = entry.aliases.map((alias) => alias.toLocaleLowerCase('zh-CN'))
    const summary = entry.summary?.toLocaleLowerCase('zh-CN') ?? ''

    let matchedOn: KnowledgeSearchResult['matchedOn'] | undefined
    if (title.includes(normalized)) matchedOn = 'title'
    else if (aliases.some((alias) => alias.includes(normalized))) matchedOn = 'alias'
    else if (summary.includes(normalized)) matchedOn = 'summary'
    if (!matchedOn) return []

    return [{
      id: entry.id,
      categoryId: entry.categoryId,
      slug: entry.slug,
      title: entry.title,
      summary: entry.summary,
      matchedOn
    }]
  })

  const rank = { title: 0, alias: 1, summary: 2 }
  return results.sort((a, b) => rank[a.matchedOn] - rank[b.matchedOn] || a.title.localeCompare(b.title, 'zh-CN'))
}
