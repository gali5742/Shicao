import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'dizhi.wei',
  categoryId: 'dizhi',
  slug: 'wei',
  title: '未',
  pinyin: 'wèi',
  summary: '十二地支第八位，属阴，五行属土。',
  order: 8,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'wei-basic-1', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》：“支则寅辰午申戌子为阳，卯巳未酉亥丑为阴。”' },
        { id: 'wei-basic-2', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》：“戊己辰戌丑未，土也，位在中央，分王四季，寄治丙丁。”' },
      ]
    },
    {
      id: 'characteristics', title: '基本性质', source: './characteristics.md',
      citations: [
        { id: 'wei-characteristics-1', sourceId: 'classic.shiming' },
        { id: 'wei-characteristics-2', sourceId: 'classic.wuxing-dayi', note: '卷一：“未者，昧也。阴气已长，万物稍衰，体薆昧也。”又引《三礼义宗》：“时物向成，皆有气味。”' },
      ]
    },
    {
      id: 'time-space', title: '时空配属', source: './time-space.md',
      citations: [
        { id: 'wei-time-space-1', sourceId: 'book.qianli-minggao', note: '未为六月，小暑为未月节，大暑为未月气' },
        { id: 'wei-time-space-2', sourceId: 'other.hko-tiangan-dizhi', note: '表三“十二辰和现今时间的对应关系”' },
        { id: 'wei-time-space-3', sourceId: 'classic.yimao', note: '卷一所列环周次序有“丙午丁、未坤申、庚酉辛”；十二支精细方位依此位置作现代方向表述' },
      ]
    },
    {
      id: 'canggan', title: '藏干', source: './canggan.md',
      citations: [
        { id: 'wei-canggan-1', sourceId: 'classic.yuanhai-ziping', note: '“未宫乙己丁共宗。”' },
      ]
    },
    {
      id: 'imagery', title: '传统取象', source: './imagery.md',
      citations: [
        { id: 'wei-imagery-1', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《十二支分配地理》：“未为花园。花园属之未，不属之卯，何也？卯乃木旺，自成林麓；未乃木库，如人筑墙垣以护百花也，以百花言未中有杂气耳……”' },
      ]
    },
    {
      id: 'relations', title: '关系与组合', source: './relations.md',
      citations: [
        { id: 'wei-relations-1', sourceId: 'book.qianli-minggao', note: '列未与各地支之间的生、克关系' },
        { id: 'wei-relations-2', sourceId: 'book.qianli-minggao', note: '“合：午未相合。”' },
        { id: 'wei-relations-3', sourceId: 'book.qianli-minggao', note: '“冲：丑未相冲。”' },
        { id: 'wei-relations-4', sourceId: 'book.qianli-minggao', note: '“害：子未相害。”' },
        { id: 'wei-relations-5', sourceId: 'book.qianli-minggao', note: '“刑：丑戌未三刑。”' },
        { id: 'wei-relations-6', sourceId: 'classic.xiejibianfangshu', note: '卷一《考原》：“木生于亥，旺于卯，墓于未，故亥卯未合木局也。”' },
        { id: 'wei-relations-7', sourceId: 'book.qianli-minggao', note: '“方合：巳午未合为南方。”' },
      ]
    },
    {
      id: 'related', title: '相关概念', source: './related.md',
      citations: [
        { id: 'wei-related-1', sourceId: 'book.qianli-minggao' },
        { id: 'wei-related-2', sourceId: 'book.qianli-minggao', note: '“十天干，十二地支以次联贯，即构成下列六十花甲子。”' },
      ]
    }
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
