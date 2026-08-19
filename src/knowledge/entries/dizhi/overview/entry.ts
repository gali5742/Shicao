import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'dizhi.overview',
  categoryId: 'dizhi',
  slug: 'overview',
  title: '地支',
  pinyin: 'dì zhī',
  summary: '十二地支的总论，包括阴阳五行、时空配属、藏干与固定关系。',
  order: 0,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'overview-basic-1', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论地支》' },
      ]
    },
    {
      id: 'yin-yang-wuxing', title: '阴阳与五行', source: './yin-yang-wuxing.md',
      citations: [
        { id: 'overview-yinyang-wuxing-1', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论支元六合》' },
        { id: 'overview-yinyang-wuxing-2', sourceId: 'book.qianli-minggao' },
      ]
    },
    {
      id: 'characteristics', title: '基本性质', source: './characteristics.md',
      citations: [
        { id: 'overview-characteristics-1', sourceId: 'classic.shiming', note: '卷一《释天》' },
        { id: 'overview-characteristics-2', sourceId: 'classic.wuxing-dayi', note: '卷一' },
      ]
    },
    {
      id: 'time-space', title: '时序与方位', source: './time-space.md',
      citations: [
        { id: 'overview-time-space-1', sourceId: 'book.qianli-minggao' },
        { id: 'overview-time-space-2a', sourceId: 'classic.huainanzi-tianwenxun' },
        { id: 'overview-time-space-2b', sourceId: 'classic.yimao', note: '卷一所列环周次序：“壬子癸、丑艮寅、甲卯乙、辰巽巳、丙午丁、未坤申、庚酉辛、戌乾亥。”本文的“东北偏北”“东南偏东”等为依此位置所作的现代方向表述' },
        { id: 'overview-time-space-3', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《十二支分配地理》' },
        { id: 'overview-time-space-4', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论时刻》' },
        { id: 'overview-time-space-5', sourceId: 'other.hko-tiangan-dizhi', note: '表三“十二辰和现今时间的对应关系”' },
      ]
    },
    {
      id: 'canggan', title: '藏干与人元', source: './canggan.md'
    },
    {
      id: 'generates-controls', title: '地支生克', source: './generates-controls.md',
      citations: [
        { id: 'overview-generates-controls-1', sourceId: 'book.qianli-minggao' },
      ]
    },
    {
      id: 'relations', title: '地支关系', source: './relations.md'
    },
    {
      id: 'related', title: '相关概念', source: './related.md'
    }
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
