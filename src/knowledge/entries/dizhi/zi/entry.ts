import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'dizhi.zi',
  categoryId: 'dizhi',
  slug: 'zi',
  title: '子',
  pinyin: 'zǐ',
  summary: '十二地支第一位，属阳，五行属水。',
  order: 1,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'zi-basic-1', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》：“支则寅辰午申戌子为阳，卯巳未酉亥丑为阴。”又：“甲为干首，子为支初。”' },
        { id: 'zi-basic-2', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》：“壬癸亥子，水也，位在北方。”' },
      ]
    },
    {
      id: 'characteristics', title: '基本性质', source: './characteristics.md',
      citations: [
        { id: 'zi-characteristics-1', sourceId: 'classic.shiming' },
        { id: 'zi-characteristics-2', sourceId: 'classic.shiji-lvshu' },
        { id: 'zi-characteristics-3', sourceId: 'classic.wuxing-dayi', note: '卷一' },
      ]
    },
    {
      id: 'time-space', title: '时空配属', source: './time-space.md',
      citations: [
        { id: 'zi-time-space-1', sourceId: 'book.qianli-minggao', note: '子为十一月，大雪为子月节，冬至为子月气' },
        { id: 'zi-time-space-2', sourceId: 'other.hko-tiangan-dizhi', note: '表三“十二辰和现今时间的对应关系”' },
        { id: 'zi-time-space-3', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《十二支分配地理》' },
      ]
    },
    {
      id: 'canggan', title: '藏干', source: './canggan.md',
      citations: [
        { id: 'zi-canggan-1', sourceId: 'classic.yuanhai-ziping', note: '“子宫癸水在其中。”' },
      ]
    },
    {
      id: 'imagery', title: '传统取象', source: './imagery.md',
      citations: [
        { id: 'zi-imagery-1', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《十二支分配地理》' },
      ]
    },
    {
      id: 'relations', title: '关系与组合', source: './relations.md',
      citations: [
        { id: 'zi-relations-1', sourceId: 'book.qianli-minggao' },
        { id: 'zi-relations-2', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论支元六合》' },
        { id: 'zi-relations-3', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论冲击》' },
        { id: 'zi-relations-4', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论六害》' },
        { id: 'zi-relations-5', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论三刑》' },
        { id: 'zi-relations-6', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论支元三合》' },
        { id: 'zi-relations-7', sourceId: 'book.qianli-minggao' },
      ]
    },
    {
      id: 'related', title: '相关概念', source: './related.md',
      citations: [
        { id: 'zi-related-1', sourceId: 'book.qianli-minggao' },
        { id: 'zi-related-2', sourceId: 'book.qianli-minggao' },
        { id: 'zi-related-3', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》' },
      ]
    }
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
