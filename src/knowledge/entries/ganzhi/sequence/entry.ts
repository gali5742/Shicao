import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'ganzhi.sequence',
  categoryId: 'ganzhi',
  slug: 'sequence',
  title: '干支纪序',
  pinyin: 'gān zhī jì xù',
  summary: '十干十二支依固定次序相配形成六十甲子与六旬。',
  order: 0,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'ganzhi-basic-1', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》' },
      ]
    },
    {
      id: 'jiazi', title: '六十甲子', source: './jiazi.md',
      citations: [
        { id: 'ganzhi-jiazi-1', sourceId: 'book.qianli-minggao', note: '《起例问答》：“十天干，十二地支以次联贯，即构成下列六十花甲子。”' },
      ]
    },
    {
      id: 'xun', title: '六旬', source: './xun.md',
      citations: [
        { id: 'ganzhi-xun-1', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》' },
      ]
    },
    {
      id: 'usage', title: '岁月日时中的使用', source: './usage.md',
      citations: [
        { id: 'ganzhi-use-1', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》' },
        { id: 'ganzhi-use-2', sourceId: 'classic.shangshu-mushi' },
      ]
    },
    {
      id: 'related', title: '相关概念', source: './related.md'
    }
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
