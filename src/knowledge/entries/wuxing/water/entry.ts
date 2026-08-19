import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'wuxing.water',
  categoryId: 'wuxing',
  slug: 'water',
  title: '水',
  pinyin: 'shuǐ',
  summary: '五行之一，以“润下”为传统性质表述。',
  order: 50,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [{ id: 'hongfan', sourceId: 'classic.shangshu-hongfan' }]
    },
    {
      id: 'characteristics', title: '基本性质', source: './characteristics.md',
      citations: [
        { id: 'qiongtong', sourceId: 'classic.qiongtong-baojian', quote: '水为太阴，性润下。' },
        { id: 'season-direction', sourceId: 'classic.sanming-tonghui-wuxing-shengke', quote: '水主于北，应冬。' },
        { id: 'virtue', sourceId: 'classic.yuanhai-ziping' }
      ]
    },
    { id: 'concepts', title: '相关概念', source: './concepts.md' }
  ],
  relations: [
    { type: 'wuxing.generates', target: 'wuxing.wood' },
    { type: 'wuxing.controls', target: 'wuxing.fire' }
  ],
  status: 'published'
} satisfies KnowledgeEntry
