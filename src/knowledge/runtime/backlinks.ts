import type { ResolvedKnowledgeRelation } from '../schema'
import type { KnowledgeRegistry } from './registry'

export function resolveBacklinks(registry: KnowledgeRegistry, id: string): ResolvedKnowledgeRelation[] {
  const backlinks: ResolvedKnowledgeRelation[] = []

  for (const source of registry.listEntries()) {
    const sourceEntry = registry.getEntry(source.id)
    if (!sourceEntry) continue

    for (const relation of sourceEntry.relations ?? []) {
      if (relation.target !== id) continue
      const declaredType = registry.getDeclaredRelationType(relation.type)
      if (!declaredType) continue
      const inverseType = registry.getRelationType(declaredType.inverseId)
      if (!inverseType) continue
      backlinks.push({
        type: inverseType,
        targetId: sourceEntry.id,
        targetTitle: sourceEntry.title,
        note: relation.note,
        citations: relation.citations
      })
    }
  }

  return backlinks
}
