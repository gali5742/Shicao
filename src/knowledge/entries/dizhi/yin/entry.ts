import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'dizhi.yin',
  categoryId: 'dizhi',
  slug: 'yin',
  title: '寅',
  pinyin: 'yín',
  summary: '十二地支第三位，属阳，五行属木。',
  order: 3,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'yin-basic-1', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》：“支则寅辰午申戌子为阳，卯巳未酉亥丑为阴。”' },
        { id: 'yin-basic-2', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》：“甲乙寅卯，木也，位在东方。”' },
      ]
    },
    {
      id: 'characteristics', title: '基本性质', source: './characteristics.md',
      citations: [
        { id: 'yin-characteristics-1', sourceId: 'classic.shiming' },
        { id: 'yin-characteristics-2', sourceId: 'classic.wuxing-dayi', note: '卷一：“寅者，移也，亦云引也。”并以物芽引伸、移出于地说明其义' },
        { id: 'yin-characteristics-3', sourceId: 'classic.shiji-lvshu' },
      ]
    },
    {
      id: 'time-space', title: '时空配属', source: './time-space.md',
      citations: [
        { id: 'yin-time-space-1', sourceId: 'book.qianli-minggao', note: '寅为正月，立春为寅月节，雨水为寅月气' },
        { id: 'yin-time-space-2', sourceId: 'other.hko-tiangan-dizhi', note: '表三“十二辰和现今时间的对应关系”' },
        { id: 'yin-time-space-3', sourceId: 'classic.yimao', note: '卷一所列环周次序有“壬子癸、丑艮寅、甲卯乙”；寅位于艮与卯之间，本文依其位置作现代方向表述为“东北偏东”' },
      ]
    },
    {
      id: 'canggan', title: '藏干', source: './canggan.md',
      citations: [
        { id: 'yin-canggan-1', sourceId: 'classic.yuanhai-ziping', note: '“寅宫甲木兼丙戊。”' },
      ]
    },
    {
      id: 'imagery', title: '传统取象', source: './imagery.md',
      citations: [
        { id: 'yin-imagery-1', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《十二支分配地理》：以寅居艮方、艮为山及戊土长生于寅解释“广谷”之象' },
      ]
    },
    {
      id: 'relations', title: '关系与组合', source: './relations.md',
      citations: [
        { id: 'yin-relations-1', sourceId: 'book.qianli-minggao' },
        { id: 'yin-relations-2', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论支元六合》' },
        { id: 'yin-relations-3', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论冲击》' },
        { id: 'yin-relations-4', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论六害》' },
        { id: 'yin-relations-5', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论三刑》' },
        { id: 'yin-relations-6', sourceId: 'classic.xiejibianfangshu', note: '卷一《考原》：“火生于寅，旺于午，墓于戌，故寅午戌合火局也。”' },
        { id: 'yin-relations-7', sourceId: 'book.qianli-minggao' },
      ]
    },
    {
      id: 'related', title: '相关概念', source: './related.md',
      citations: [
        { id: 'yin-related-1', sourceId: 'book.qianli-minggao' },
        { id: 'yin-related-2', sourceId: 'book.qianli-minggao' },
        { id: 'yin-related-3', sourceId: 'book.qianli-minggao', note: '“十天干，十二地支以次联贯，即构成下列六十花甲子。”' },
      ]
    }
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
