import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'dizhi.shen',
  categoryId: 'dizhi',
  slug: 'shen',
  title: '申',
  pinyin: 'shēn',
  summary: '十二地支第九位，属阳，五行属金。',
  order: 9,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'shen-basic-1', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》：“支则寅辰午申戌子为阳，卯巳未酉亥丑为阴。”' },
        { id: 'shen-basic-2', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》：“庚辛申酉，金也，位在西方。”' },
      ]
    },
    {
      id: 'characteristics', title: '基本性质', source: './characteristics.md',
      citations: [
        { id: 'shen-characteristics-1', sourceId: 'classic.shiming' },
        { id: 'shen-characteristics-2', sourceId: 'classic.wuxing-dayi', note: '卷一：“申者，伸。伸，犹引也，长也，衰老引长。”又引《三礼义宗》：“申者，身也。物皆身体成就也。”' },
      ]
    },
    {
      id: 'time-space', title: '时空配属', source: './time-space.md',
      citations: [
        { id: 'shen-time-space-1', sourceId: 'book.qianli-minggao', note: '申为七月，立秋为申月节，处暑为申月气' },
        { id: 'shen-time-space-2', sourceId: 'other.hko-tiangan-dizhi', note: '表三“十二辰和现今时间的对应关系”' },
        { id: 'shen-time-space-3', sourceId: 'classic.yimao', note: '卷一所列环周次序有“丙午丁、未坤申、庚酉辛”；十二支精细方位依此位置作现代方向表述' },
      ]
    },
    {
      id: 'canggan', title: '藏干', source: './canggan.md',
      citations: [
        { id: 'shen-canggan-1', sourceId: 'classic.yuanhai-ziping', note: '“申位庚金壬水戊。”' },
      ]
    },
    {
      id: 'imagery', title: '传统取象', source: './imagery.md',
      citations: [
        { id: 'shen-imagery-1', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《十二支分配地理》：“申为名都。坤为地，其体无疆，非名都不足以喻之。申，坤也，都者，帝王所居……”' },
      ]
    },
    {
      id: 'relations', title: '关系与组合', source: './relations.md',
      citations: [
        { id: 'shen-relations-1', sourceId: 'book.qianli-minggao' },
        { id: 'shen-relations-2', sourceId: 'book.qianli-minggao', note: '“合：巳申相合。”' },
        { id: 'shen-relations-3', sourceId: 'book.qianli-minggao', note: '“冲：寅申相冲。”' },
        { id: 'shen-relations-4', sourceId: 'book.qianli-minggao', note: '“害：申亥相害。”' },
        { id: 'shen-relations-5', sourceId: 'book.qianli-minggao', note: '寅、巳、申为三支相刑结构' },
        { id: 'shen-relations-6', sourceId: 'classic.xiejibianfangshu', note: '卷一《考原》：“水生于申，旺于子，墓于辰，故申子辰合水局也。”' },
        { id: 'shen-relations-7', sourceId: 'book.qianli-minggao', note: '“方合：申酉戌合为西方。”' },
      ]
    },
    {
      id: 'related', title: '相关概念', source: './related.md',
      citations: [
        { id: 'shen-related-1', sourceId: 'book.qianli-minggao' },
        { id: 'shen-related-2', sourceId: 'book.qianli-minggao' },
        { id: 'shen-related-3', sourceId: 'book.qianli-minggao', note: '“十天干，十二地支以次联贯，即构成下列六十花甲子。”' },
      ]
    }
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
