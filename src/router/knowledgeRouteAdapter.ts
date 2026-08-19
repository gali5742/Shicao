import type { RouteLocationRaw } from 'vue-router'
import { getCategory, getEntry } from '@/knowledge/public-api'

export function routeForKnowledgeId(id: string): RouteLocationRaw | undefined {
  const entry = getEntry(id)
  if (!entry) return undefined
  const category = getCategory(entry.categoryId)
  if (!category) return undefined
  return {
    name: 'knowledge-detail',
    params: { categorySlug: category.slug, entrySlug: entry.slug }
  }
}
