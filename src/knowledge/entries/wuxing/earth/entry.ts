import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'wuxing.earth',
  categoryId: 'wuxing',
  slug: 'earth',
  title: '土',
  pinyin: 'tǔ',
  summary: '五行之一，以“稼穑”为传统性质表述。',
  order: 30,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [{ id: 'hongfan', sourceId: 'classic.shangshu-hongfan' }]
    },
    {
      id: 'characteristics', title: '基本性质', source: './characteristics.md',
      citations: [
        { id: 'contain', sourceId: 'classic.sanming-tonghui-wuxing-shengke' },
        { id: 'center-season', sourceId: 'classic.sanming-tonghui-wuxing-shengke', quote: '土主于中央，兼位西南，应于长夏。' },
        { id: 'seasonal-nature', sourceId: 'classic.qiongtong-baojian' },
        { id: 'virtue', sourceId: 'classic.qiongtong-baojian' }
      ]
    },
    { id: 'concepts', title: '相关概念', source: './concepts.md' }
  ],
  relations: [
    { type: 'wuxing.generates', target: 'wuxing.metal' },
    { type: 'wuxing.controls', target: 'wuxing.water' }
  ],
  status: 'published'
} satisfies KnowledgeEntry
