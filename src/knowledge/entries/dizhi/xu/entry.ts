import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'dizhi.xu',
  categoryId: 'dizhi',
  slug: 'xu',
  title: '戌',
  pinyin: 'xū',
  summary: '十二地支第十一位，属阳，五行属土。',
  order: 11,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'xu-basic-1', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》：“支则寅辰午申戌子为阳，卯巳未酉亥丑为阴。”' },
        { id: 'xu-basic-2', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》：“戊己辰戌丑未，土也，位在中央，分王四季，寄治丙丁。”' },
      ]
    },
    {
      id: 'characteristics', title: '基本性质', source: './characteristics.md',
      citations: [
        { id: 'xu-characteristics-1', sourceId: 'classic.shiming' },
        { id: 'xu-characteristics-2', sourceId: 'classic.wuxing-dayi', note: '卷一' },
      ]
    },
    {
      id: 'time-space', title: '时空配属', source: './time-space.md',
      citations: [
        { id: 'xu-time-space-1', sourceId: 'book.qianli-minggao', note: '戌为九月，寒露为戌月节，霜降为戌月气' },
        { id: 'xu-time-space-2', sourceId: 'other.hko-tiangan-dizhi', note: '表三“十二辰和现今时间的对应关系”' },
        { id: 'xu-time-space-3', sourceId: 'classic.yimao', note: '卷一所列环周次序有“庚酉辛、戌乾亥、壬子癸”；十二支精细方位依此位置作现代方向表述' },
      ]
    },
    {
      id: 'canggan', title: '藏干', source: './canggan.md',
      citations: [
        { id: 'xu-canggan-1', sourceId: 'classic.yuanhai-ziping', note: '“戌宫辛金及丁戊。”' },
      ]
    },
    {
      id: 'imagery', title: '传统取象', source: './imagery.md',
      citations: [
        { id: 'xu-imagery-1', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《十二支分配地理》：“戌为烧原。戌月在九秋，草木尽萎，田家焚烧而耕，又戌属土，是以称名烧原……”' },
      ]
    },
    {
      id: 'relations', title: '关系与组合', source: './relations.md',
      citations: [
        { id: 'xu-relations-1', sourceId: 'book.qianli-minggao' },
        { id: 'xu-relations-2', sourceId: 'book.qianli-minggao', note: '“合：卯戌相合。”' },
        { id: 'xu-relations-3', sourceId: 'book.qianli-minggao', note: '“冲：辰戌相冲。”' },
        { id: 'xu-relations-4', sourceId: 'book.qianli-minggao', note: '“害：酉戌相害。”' },
        { id: 'xu-relations-5', sourceId: 'book.qianli-minggao', note: '“丑刑戌、戌刑未为三刑。”正文按专项规范显示完整的丑、戌、未三支结构' },
        { id: 'xu-relations-6', sourceId: 'classic.xiejibianfangshu', note: '卷一《考原》：“火生于寅，旺于午，墓于戌，故寅午戌合火局也。”' },
        { id: 'xu-relations-7', sourceId: 'book.qianli-minggao', note: '“方合：申酉戌合为西方。”' },
      ]
    },
    {
      id: 'related', title: '相关概念', source: './related.md',
      citations: [
        { id: 'xu-related-1', sourceId: 'book.qianli-minggao' },
        { id: 'xu-related-2', sourceId: 'book.qianli-minggao', note: '“十天干，十二地支以次联贯，即构成下列六十花甲子。”' },
      ]
    }
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
