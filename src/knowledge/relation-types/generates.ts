import type { KnowledgeRelationType } from '../schema'

export default {
  id: 'wuxing.generates',
  label: '生',
  inverseId: 'wuxing.generatedBy',
  inverseLabel: '受生于',
  directed: true
} satisfies KnowledgeRelationType
