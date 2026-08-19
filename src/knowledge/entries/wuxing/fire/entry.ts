import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'wuxing.fire',
  categoryId: 'wuxing',
  slug: 'fire',
  title: '火',
  pinyin: 'huǒ',
  summary: '五行之一，以“炎上”为传统性质表述。',
  order: 20,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [{ id: 'hongfan', sourceId: 'classic.shangshu-hongfan' }]
    },
    {
      id: 'characteristics', title: '基本性质', source: './characteristics.md',
      citations: [
        { id: 'qiongtong', sourceId: 'classic.qiongtong-baojian', quote: '火为太阳，性炎上。' },
        { id: 'season-direction', sourceId: 'classic.sanming-tonghui-wuxing-shengke', quote: '火主于南，应夏。' },
        { id: 'virtue', sourceId: 'classic.yuanhai-ziping' }
      ]
    },
    { id: 'concepts', title: '相关概念', source: './concepts.md' }
  ],
  relations: [
    { type: 'wuxing.generates', target: 'wuxing.earth' },
    { type: 'wuxing.controls', target: 'wuxing.metal' }
  ],
  status: 'published'
} satisfies KnowledgeEntry
