import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'yinyang.overview',
  categoryId: 'yinyang',
  slug: 'overview',
  title: '阴阳',
  pinyin: 'yīn yáng',
  summary: '阴阳用来描述事物相对的性质、状态与变化，并在相对、相合与往来中成立。',
  order: 0,
  sections: [
    {
      id: 'basic',
      title: '基本概念',
      source: './basic.md',
      citations: [
        { id: 'qi-yinyang', sourceId: 'classic.ziping-zhenquan', locator: '论十干十二支' },
        { id: 'yinyang-dao', sourceId: 'classic.zhouyi-xici-shang' }
      ]
    },
    {
      id: 'characteristics',
      title: '基本性质',
      source: './characteristics.md',
      citations: [
        { id: 'comings-goings', sourceId: 'classic.zhouyi-xici-xia' },
        { id: 'harmony', sourceId: 'classic.laozi-42' }
      ]
    },
    {
      id: 'wuxing',
      title: '与五行',
      source: './wuxing.md',
      citations: [
        { id: 'yinyang-wuxing', sourceId: 'classic.chunqiu-fanlu-wuxing-xiangsheng' },
        { id: 'wuxing-has-yinyang', sourceId: 'classic.ziping-zhenquan', locator: '论十干十二支' }
      ]
    },
    { id: 'related', title: '相关概念', source: './related.md' }
  ],
  status: 'published'
} satisfies KnowledgeEntry
