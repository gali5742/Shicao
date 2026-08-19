import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'wuxing.metal',
  categoryId: 'wuxing',
  slug: 'metal',
  title: '金',
  pinyin: 'jīn',
  summary: '五行之一，以“从革”为传统性质表述。',
  order: 40,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [{ id: 'hongfan', sourceId: 'classic.shangshu-hongfan' }]
    },
    {
      id: 'characteristics', title: '基本性质', source: './characteristics.md',
      citations: [
        { id: 'qiongtong', sourceId: 'classic.qiongtong-baojian', quote: '金为少阴，性沉下而有所止。' },
        { id: 'season-direction', sourceId: 'classic.sanming-tonghui-wuxing-shengke', quote: '金主于西，应秋。' },
        { id: 'virtue', sourceId: 'classic.yuanhai-ziping' }
      ]
    },
    { id: 'concepts', title: '相关概念', source: './concepts.md' }
  ],
  relations: [
    { type: 'wuxing.generates', target: 'wuxing.water' },
    { type: 'wuxing.controls', target: 'wuxing.wood' }
  ],
  status: 'published'
} satisfies KnowledgeEntry
