import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'dizhi.chou',
  categoryId: 'dizhi',
  slug: 'chou',
  title: '丑',
  pinyin: 'chǒu',
  summary: '十二地支第二位，属阴，五行属土。',
  order: 2,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'chou-basic-1', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》：“支则寅辰午申戌子为阳，卯巳未酉亥丑为阴。”' },
        { id: 'chou-basic-2', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》：“戊己辰戌丑未，土也，位在中央，分王四季，寄治丙丁。”' },
      ]
    },
    {
      id: 'characteristics', title: '基本性质', source: './characteristics.md',
      citations: [
        { id: 'chou-characteristics-1', sourceId: 'classic.shiming' },
        { id: 'chou-characteristics-2', sourceId: 'classic.shuowen', note: '卷十五《丑部》' },
        { id: 'chou-characteristics-3', sourceId: 'classic.shiji-lvshu', note: '正义' },
      ]
    },
    {
      id: 'time-space', title: '时空配属', source: './time-space.md',
      citations: [
        { id: 'chou-time-space-1', sourceId: 'book.qianli-minggao', note: '丑为十二月，小寒为丑月节，大寒为丑月气' },
        { id: 'chou-time-space-2', sourceId: 'other.hko-tiangan-dizhi', note: '表三“十二辰和现今时间的对应关系”' },
        { id: 'chou-time-space-3', sourceId: 'classic.yimao', note: '卷一所列环周次序有“壬子癸、丑艮寅、甲卯乙”；丑位于子与艮之间，本文依其位置作现代方向表述为“东北偏北”' },
      ]
    },
    {
      id: 'canggan', title: '藏干', source: './canggan.md',
      citations: [
        { id: 'chou-canggan-1', sourceId: 'classic.yuanhai-ziping', note: '“丑癸辛金己土同。”' },
      ]
    },
    {
      id: 'imagery', title: '传统取象', source: './imagery.md',
      citations: [
        { id: 'chou-imagery-1', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《十二支分配地理》：“丑为柳岸。丑中有水有土有金。岸者土也，所以止水也，故谓柳岸。诗曰柳色黄金嫩是也。”' },
      ]
    },
    {
      id: 'relations', title: '关系与组合', source: './relations.md',
      citations: [
        { id: 'chou-relations-1', sourceId: 'book.qianli-minggao' },
        { id: 'chou-relations-2', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论支元六合》' },
        { id: 'chou-relations-3', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论冲击》' },
        { id: 'chou-relations-4', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论六害》' },
        { id: 'chou-relations-5', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论三刑》：“丑未戌三刑也。”' },
        { id: 'chou-relations-6', sourceId: 'classic.xiejibianfangshu', note: '卷一《考原》：“金生于巳，旺于酉，墓于丑，故巳酉丑合金局也。”' },
        { id: 'chou-relations-7', sourceId: 'book.qianli-minggao' },
      ]
    },
    {
      id: 'related', title: '相关概念', source: './related.md',
      citations: [
        { id: 'chou-related-1', sourceId: 'book.qianli-minggao' },
        { id: 'chou-related-2', sourceId: 'book.qianli-minggao', note: '“十天干，十二地支以次联贯，即构成下列六十花甲子。”' },
      ]
    }
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
