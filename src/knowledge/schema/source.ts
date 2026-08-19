export type KnowledgeSourceKind = 'classic' | 'book' | 'article' | 'other'

export interface KnowledgeSource {
  id: string
  kind: KnowledgeSourceKind
  /** Work or article title, stored without book-title marks. */
  title: string
  /** Part/chapter title for classics, e.g. 洪范 in 尚书. */
  partTitle?: string
  /** Volume designation shown outside book-title marks, e.g. 卷二. */
  volume?: string
  author?: string
  editor?: string
  publisher?: string
  year?: string
  journal?: string
  issue?: string
  pages?: string
  edition?: string
  note?: string
}
