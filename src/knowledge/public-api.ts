import { resolveBacklinks } from './runtime/backlinks'
import { loadKnowledgeAssets } from './runtime/loader'
import { KnowledgeRegistry } from './runtime/registry'
import { resolveRelations } from './runtime/relations'
import { extractKnowledgeReferences, transformKnowledgeReferences } from './runtime/resolver'
import { searchRegistry } from './runtime/search'
import { formatKnowledgeCitation, formatKnowledgeSource } from './runtime/citations'
import { extractCitationMarkerIds, findCitationMarkersAfterPunctuation, listCitationsInMarkerOrder, resolveCitationMarkers, transformCitationMarkers } from './runtime/citation-markers'
import { assertValidKnowledgeAssets } from './runtime/validator'

const assets = loadKnowledgeAssets()
assertValidKnowledgeAssets(assets)
const registry = new KnowledgeRegistry(assets)

export function getEntry(id: string) {
  return registry.getEntry(id)
}

export function getEntriesByCategory(categoryId: string) {
  return registry.listEntriesByCategory(categoryId)
}

export function getGroup(id: string) {
  return registry.getGroup(id)
}

export function getKnowledgeGroups() {
  return registry.listGroups()
}

export function getCategory(id: string) {
  return registry.getCategory(id)
}

export function getCategories() {
  return registry.listCategories()
}

export function getLinkableKnowledgeEntries() {
  return registry.listEntries().map(({ id, title, aliases }) => ({ id, title, aliases }))
}

export function getRelations(id: string) {
  return resolveRelations(registry, id)
}

export function getBacklinks(id: string) {
  return resolveBacklinks(registry, id)
}

export function getSource(id: string) {
  return registry.getSource(id)
}

export function resolveKnowledgeReference(id: string) {
  return registry.getEntry(id)
}

export function searchKnowledge(query: string) {
  return searchRegistry(registry, query)
}

export {
  extractKnowledgeReferences,
  transformKnowledgeReferences,
  extractCitationMarkerIds,
  findCitationMarkersAfterPunctuation,
  resolveCitationMarkers,
  listCitationsInMarkerOrder,
  transformCitationMarkers,
  formatKnowledgeCitation,
  formatKnowledgeSource
}
export type * from './schema'

// 基础事实层：供知识库内部与未来外部消费者共享的稳定结构化事实。
export * from './data/foundation'
