import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'dizhi.liuchong',
  categoryId: 'dizhi',
  slug: 'liuchong',
  title: '六冲',
  pinyin: 'liù chōng',
  summary: '十二地支之间六组固定的相冲关系。',
  order: 40,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'liuchong-basic-1', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论冲击》：“地支取七位为冲……如子午对冲，子至午七数。”' },
        { id: 'liuchong-basic-2', sourceId: 'classic.wuxing-dayi', note: '卷二《第十三论冲破》：“冲破者，以其气相格对也……支干各自相对。”其后列子午、丑未、寅申、卯酉、辰戌、巳亥六组，并说“此亦取相对”' },
      ]
    },
    {
      id: 'pairs', title: '六组六冲', source: './pairs.md',
      citations: [
        { id: 'liuchong-pairs-1', sourceId: 'classic.wuxing-dayi', note: '卷二《第十三论冲破》：“子午冲破，丑未冲破，寅申冲破，卯酉冲破，辰戌冲破，巳亥冲破。”' },
      ]
    },
    {
      id: 'nature', title: '关系性质', source: './nature.md',
      citations: [
        { id: 'liuchong-nature-1', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论冲击》：“冲破有吉有凶，不可概论。”' },
      ]
    }
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
