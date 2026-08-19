import type { KnowledgeCitation } from './section'

export interface KnowledgeRelation {
  type: string
  target: string
  note?: string
  citations?: KnowledgeCitation[]
}

export interface KnowledgeRelationType {
  id: string
  label: string
  inverseId: string
  inverseLabel: string
  directed: boolean
}

export interface ResolvedRelationType {
  id: string
  label: string
  inverseId: string
  inverseLabel: string
  directed: boolean
  derivedInverse: boolean
}

export interface ResolvedKnowledgeRelation {
  type: ResolvedRelationType
  targetId: string
  targetTitle: string
  note?: string
  citations?: KnowledgeCitation[]
}
