export interface KnowledgeCitation {
  /** Stable marker key within a section; used by [[cite:key]] and never shown to readers. */
  id?: string
  sourceId: string
  locator?: string
  /** Relevant original wording shown after the source as “出处：原文”. Omit when the body already quotes it in full. */
  quote?: string
  /** Optional short clarification, used only when the original wording is difficult or terminology needs minimal context. */
  note?: string
}

export interface KnowledgeSectionReference {
  id: string
  title: string
  source: string
  citations?: KnowledgeCitation[]
}

export interface ResolvedKnowledgeSection extends KnowledgeSectionReference {
  content: string
}
