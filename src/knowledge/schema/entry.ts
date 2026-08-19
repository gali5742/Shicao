import type { KnowledgeRelation } from './relation'
import type { KnowledgeCitation, KnowledgeSectionReference, ResolvedKnowledgeSection } from './section'

export type KnowledgeEntryStatus = 'draft' | 'review' | 'published'

export interface KnowledgeEntry {
  id: string
  categoryId: string
  slug: string
  title: string
  pinyin?: string
  /** Established reader-facing alternate names only; omit mechanical variants such as “木行”. */
  aliases?: string[]
  summary?: string
  order?: number
  sections: KnowledgeSectionReference[]
  relations?: KnowledgeRelation[]
  /** Reserved for entry-wide bibliography; reader-facing references should normally live on sections or relations. */
  citations?: KnowledgeCitation[]
  status?: KnowledgeEntryStatus
}

export interface ResolvedKnowledgeEntry extends Omit<KnowledgeEntry, 'sections'> {
  sections: ResolvedKnowledgeSection[]
}

export interface KnowledgeEntrySummary {
  id: string
  categoryId: string
  slug: string
  title: string
  pinyin?: string
  aliases: string[]
  summary?: string
  order: number
  status: KnowledgeEntryStatus
}
