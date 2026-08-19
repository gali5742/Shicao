import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'dizhi.wu',
  categoryId: 'dizhi',
  slug: 'wu',
  title: '午',
  pinyin: 'wǔ',
  summary: '十二地支第七位，属阳，五行属火。',
  order: 7,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'wu-basic-1', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》：“支则寅辰午申戌子为阳，卯巳未酉亥丑为阴。”' },
        { id: 'wu-basic-2', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》：“丙丁巳午，火也，位在南方。”' },
      ]
    },
    {
      id: 'characteristics', title: '基本性质', source: './characteristics.md',
      citations: [
        { id: 'wu-characteristics-1', sourceId: 'classic.shiming' },
        { id: 'wu-characteristics-2', sourceId: 'classic.shiji-lvshu' },
        { id: 'wu-characteristics-3', sourceId: 'classic.wuxing-dayi', note: '卷一：“午者，仵也，亦云萼也。仲夏之月，万物盛大……”' },
      ]
    },
    {
      id: 'time-space', title: '时空配属', source: './time-space.md',
      citations: [
        { id: 'wu-time-space-1', sourceId: 'book.qianli-minggao', note: '午为五月，芒种为午月节，夏至为午月气' },
        { id: 'wu-time-space-2', sourceId: 'other.hko-tiangan-dizhi', note: '表三“十二辰和现今时间的对应关系”' },
        { id: 'wu-time-space-3', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《十二支分配地理》：“午正位于南。”' },
      ]
    },
    {
      id: 'canggan', title: '藏干', source: './canggan.md',
      citations: [
        { id: 'wu-canggan-1', sourceId: 'classic.yuanhai-ziping', note: '“午宫丁火并己土。”' },
      ]
    },
    {
      id: 'imagery', title: '传统取象', source: './imagery.md',
      citations: [
        { id: 'wu-imagery-1', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《十二支分配地理》：“午为烽堠。午正位于南，属火、土，其色赤黄，名其曰烽堠者，此也……”' },
      ]
    },
    {
      id: 'relations', title: '关系与组合', source: './relations.md',
      citations: [
        { id: 'wu-relations-1', sourceId: 'book.qianli-minggao', note: '列午与各地支之间的生、克关系' },
        { id: 'wu-relations-2', sourceId: 'book.qianli-minggao', note: '“合：午未相合。”' },
        { id: 'wu-relations-3', sourceId: 'book.qianli-minggao', note: '“冲：子午相冲。”' },
        { id: 'wu-relations-4', sourceId: 'book.qianli-minggao', note: '“害：丑午相害。”' },
        { id: 'wu-relations-5', sourceId: 'book.qianli-minggao', note: '“刑：二午自刑。”' },
        { id: 'wu-relations-6', sourceId: 'classic.xiejibianfangshu', note: '卷一《考原》：“火生于寅，旺于午，墓于戌，故寅午戌合火局也。”' },
        { id: 'wu-relations-7', sourceId: 'book.qianli-minggao', note: '“方合：巳午未合为南方。”' },
      ]
    },
    {
      id: 'related', title: '相关概念', source: './related.md',
      citations: [
        { id: 'wu-related-1', sourceId: 'book.qianli-minggao' },
        { id: 'wu-related-2', sourceId: 'book.qianli-minggao' },
        { id: 'wu-related-3', sourceId: 'book.qianli-minggao', note: '“十天干，十二地支以次联贯，即构成下列六十花甲子。”' },
      ]
    }
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
