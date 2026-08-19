import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'wuxing.wood',
  categoryId: 'wuxing',
  slug: 'wood',
  title: '木',
  pinyin: 'mù',
  summary: '五行之一，以“曲直”为传统性质表述。',
  order: 10,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [{ id: 'hongfan', sourceId: 'classic.shangshu-hongfan' }]
    },
    {
      id: 'characteristics', title: '基本性质', source: './characteristics.md',
      citations: [
        { id: 'qiongtong', sourceId: 'classic.qiongtong-baojian', quote: '木为少阳，性腾上而无所止。' },
        { id: 'season-direction', sourceId: 'classic.sanming-tonghui-wuxing-shengke', quote: '木主于东，应春。' },
        { id: 'virtue', sourceId: 'classic.yuanhai-ziping' }
      ]
    },
    { id: 'concepts', title: '相关概念', source: './concepts.md' }
  ],
  relations: [
    { type: 'wuxing.generates', target: 'wuxing.fire' },
    { type: 'wuxing.controls', target: 'wuxing.earth' }
  ],
  status: 'published'
} satisfies KnowledgeEntry
