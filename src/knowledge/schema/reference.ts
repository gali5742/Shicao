export interface KnowledgeReference {
  raw: string
  targetId: string
  label: string
  index: number
}

export interface KnowledgeSearchResult {
  id: string
  categoryId: string
  slug: string
  title: string
  summary?: string
  matchedOn: 'title' | 'alias' | 'summary'
}
