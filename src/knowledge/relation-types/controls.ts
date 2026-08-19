import type { KnowledgeRelationType } from '../schema'

export default {
  id: 'wuxing.controls',
  label: '克',
  inverseId: 'wuxing.controlledBy',
  inverseLabel: '受克于',
  directed: true
} satisfies KnowledgeRelationType
