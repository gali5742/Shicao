export interface KnowledgeCategory {
  id: string
  groupId: string
  slug: string
  title: string
  description?: string
  overviewEntryId?: string
  featured?: boolean
  featuredSummary?: string
  order: number
}
