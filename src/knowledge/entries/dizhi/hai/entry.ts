import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'dizhi.hai',
  categoryId: 'dizhi',
  slug: 'hai',
  title: '亥',
  pinyin: 'hài',
  summary: '十二地支第十二位，属阴，五行属水。',
  order: 12,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'hai-basic-1', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》：“支则寅辰午申戌子为阳，卯巳未酉亥丑为阴。”' },
        { id: 'hai-basic-2', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》：“壬癸亥子，水也，位在北方。”' },
      ]
    },
    {
      id: 'characteristics', title: '基本性质', source: './characteristics.md',
      citations: [
        { id: 'hai-characteristics-1', sourceId: 'classic.shiming' },
        { id: 'hai-characteristics-2', sourceId: 'classic.wuxing-dayi', note: '卷一' },
      ]
    },
    {
      id: 'time-space', title: '时空配属', source: './time-space.md',
      citations: [
        { id: 'hai-time-space-1', sourceId: 'book.qianli-minggao', note: '亥为十月，立冬为亥月节，小雪为亥月气' },
        { id: 'hai-time-space-2', sourceId: 'other.hko-tiangan-dizhi', note: '表三“十二辰和现今时间的对应关系”' },
        { id: 'hai-time-space-3', sourceId: 'classic.yimao', note: '卷一所列环周次序有“庚酉辛、戌乾亥、壬子癸”；十二支精细方位依此位置作现代方向表述' },
      ]
    },
    {
      id: 'canggan', title: '藏干', source: './canggan.md',
      citations: [
        { id: 'hai-canggan-1', sourceId: 'classic.yuanhai-ziping', note: '“亥藏壬甲是真踪。”' },
      ]
    },
    {
      id: 'imagery', title: '传统取象', source: './imagery.md',
      citations: [
        { id: 'hai-imagery-1', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《十二支分配地理》：“亥为悬河。天河之水，奔流不回，故曰悬河，亥即天门，又属水……”' },
      ]
    },
    {
      id: 'relations', title: '关系与组合', source: './relations.md',
      citations: [
        { id: 'hai-relations-1', sourceId: 'book.qianli-minggao' },
        { id: 'hai-relations-2', sourceId: 'book.qianli-minggao', note: '“合：寅亥相合。”' },
        { id: 'hai-relations-3', sourceId: 'book.qianli-minggao', note: '“冲：巳亥相冲。”' },
        { id: 'hai-relations-4', sourceId: 'book.qianli-minggao', note: '“害：申亥相害。”' },
        { id: 'hai-relations-5', sourceId: 'book.qianli-minggao', note: '“刑：二亥自刑。”' },
        { id: 'hai-relations-6', sourceId: 'classic.xiejibianfangshu', note: '卷一《考原》：“木生于亥，旺于卯，墓于未，故亥卯未合木局也。”' },
        { id: 'hai-relations-7', sourceId: 'book.qianli-minggao', note: '“方合：亥子丑合为北方。”' },
      ]
    },
    {
      id: 'related', title: '相关概念', source: './related.md',
      citations: [
        { id: 'hai-related-1', sourceId: 'book.qianli-minggao' },
        { id: 'hai-related-2', sourceId: 'book.qianli-minggao' },
        { id: 'hai-related-3', sourceId: 'book.qianli-minggao', note: '“十天干，十二地支以次联贯，即构成下列六十花甲子。”' },
      ]
    }
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
