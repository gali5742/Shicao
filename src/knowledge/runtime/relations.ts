import type { ResolvedKnowledgeRelation } from '../schema'
import type { KnowledgeRegistry } from './registry'

export function resolveRelations(registry: KnowledgeRegistry, id: string): ResolvedKnowledgeRelation[] {
  const entry = registry.getEntry(id)
  if (!entry) return []

  return (entry.relations ?? []).flatMap((relation) => {
    const target = registry.getEntry(relation.target)
    const type = registry.getRelationType(relation.type)
    if (!target || !type) return []
    return [{
      type,
      targetId: target.id,
      targetTitle: target.title,
      note: relation.note,
      citations: relation.citations
    }]
  })
}
