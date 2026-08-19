import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'dizhi.you',
  categoryId: 'dizhi',
  slug: 'you',
  title: '酉',
  pinyin: 'yǒu',
  summary: '十二地支第十位，属阴，五行属金。',
  order: 10,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'you-basic-1', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》：“支则寅辰午申戌子为阳，卯巳未酉亥丑为阴。”' },
        { id: 'you-basic-2', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》：“庚辛申酉，金也，位在西方。”' },
      ]
    },
    {
      id: 'characteristics', title: '基本性质', source: './characteristics.md',
      citations: [
        { id: 'you-characteristics-1', sourceId: 'classic.shiming' },
        { id: 'you-characteristics-2', sourceId: 'classic.wuxing-dayi', note: '卷一' },
      ]
    },
    {
      id: 'time-space', title: '时空配属', source: './time-space.md',
      citations: [
        { id: 'you-time-space-1', sourceId: 'book.qianli-minggao', note: '酉为八月，白露为酉月节，秋分为酉月气' },
        { id: 'you-time-space-2', sourceId: 'other.hko-tiangan-dizhi', note: '表三“十二辰和现今时间的对应关系”' },
        { id: 'you-time-space-3', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《十二支分配地理》：“酉居正西。”' },
      ]
    },
    {
      id: 'canggan', title: '藏干', source: './canggan.md',
      citations: [
        { id: 'you-canggan-1', sourceId: 'classic.yuanhai-ziping', note: '“酉宫辛金独丰隆。”' },
      ]
    },
    {
      id: 'imagery', title: '传统取象', source: './imagery.md',
      citations: [
        { id: 'you-imagery-1', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《十二支分配地理》：“酉为寺钟。酉属金，位近戌亥……钟，金属也……又酉居正西……”' },
      ]
    },
    {
      id: 'relations', title: '关系与组合', source: './relations.md',
      citations: [
        { id: 'you-relations-1', sourceId: 'book.qianli-minggao' },
        { id: 'you-relations-2', sourceId: 'book.qianli-minggao', note: '“合：辰酉相合。”' },
        { id: 'you-relations-3', sourceId: 'book.qianli-minggao', note: '“冲：卯酉相冲。”' },
        { id: 'you-relations-4', sourceId: 'book.qianli-minggao', note: '“害：酉戌相害。”' },
        { id: 'you-relations-5', sourceId: 'book.qianli-minggao', note: '“刑：二酉自刑。”' },
        { id: 'you-relations-6', sourceId: 'classic.xiejibianfangshu', note: '卷一《考原》：“金生于巳，旺于酉，墓于丑，故巳酉丑合金局也。”' },
        { id: 'you-relations-7', sourceId: 'book.qianli-minggao', note: '“方合：申酉戌合为西方。”' },
      ]
    },
    {
      id: 'related', title: '相关概念', source: './related.md',
      citations: [
        { id: 'you-related-1', sourceId: 'book.qianli-minggao' },
        { id: 'you-related-2', sourceId: 'book.qianli-minggao' },
        { id: 'you-related-3', sourceId: 'book.qianli-minggao', note: '“十天干，十二地支以次联贯，即构成下列六十花甲子。”' },
      ]
    }
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
