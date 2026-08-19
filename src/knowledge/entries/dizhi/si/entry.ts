import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'dizhi.si',
  categoryId: 'dizhi',
  slug: 'si',
  title: '巳',
  pinyin: 'sì',
  summary: '十二地支第六位，属阴，五行属火。',
  order: 6,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'si-basic-1', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》：“支则寅辰午申戌子为阳，卯巳未酉亥丑为阴。”' },
        { id: 'si-basic-2', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》：“丙丁巳午，火也，位在南方。”' },
      ]
    },
    {
      id: 'characteristics', title: '基本性质', source: './characteristics.md',
      citations: [
        { id: 'si-characteristics-1', sourceId: 'classic.shiming' },
        { id: 'si-characteristics-2', sourceId: 'classic.wuxing-dayi', note: '卷一：“巳者，已也。故体洗去，于是已竟也。”又引《三礼义宗》：“巳，起也。物至此时，皆毕尽而起。”' },
      ]
    },
    {
      id: 'time-space', title: '时空配属', source: './time-space.md',
      citations: [
        { id: 'si-time-space-1', sourceId: 'book.qianli-minggao', note: '巳为四月，立夏为巳月节，小满为巳月气' },
        { id: 'si-time-space-2', sourceId: 'other.hko-tiangan-dizhi', note: '表三“十二辰和现今时间的对应关系”' },
        { id: 'si-time-space-3', sourceId: 'classic.yimao', note: '卷一所列环周次序有“甲卯乙、辰巽巳、丙午丁”；十二支精细方位依此位置作现代方向表述' },
      ]
    },
    {
      id: 'canggan', title: '藏干', source: './canggan.md',
      citations: [
        { id: 'si-canggan-1', sourceId: 'classic.yuanhai-ziping', note: '“巳中庚金丙戊丛。”' },
      ]
    },
    {
      id: 'imagery', title: '传统取象', source: './imagery.md',
      citations: [
        { id: 'si-imagery-1', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《十二支分配地理》：“巳为大驿。大驿者，人烟凑集，道路通达之地。巳中有丙火戊土，是其象也……”' },
      ]
    },
    {
      id: 'relations', title: '关系与组合', source: './relations.md',
      citations: [
        { id: 'si-relations-1', sourceId: 'book.qianli-minggao', note: '列巳与各地支之间的生、克关系' },
        { id: 'si-relations-2', sourceId: 'book.qianli-minggao', note: '“合：巳申相合。”' },
        { id: 'si-relations-3', sourceId: 'book.qianli-minggao', note: '“冲：巳亥相冲。”' },
        { id: 'si-relations-4', sourceId: 'book.qianli-minggao', note: '“害：寅巳相害。”' },
        { id: 'si-relations-5', sourceId: 'book.qianli-minggao', note: '“刑：寅巳申三刑。”' },
        { id: 'si-relations-6', sourceId: 'classic.xiejibianfangshu', note: '卷一《考原》：“金生于巳，旺于酉，墓于丑，故巳酉丑合金局也。”' },
        { id: 'si-relations-7', sourceId: 'book.qianli-minggao', note: '“方合：巳午未合为南方。”' },
      ]
    },
    {
      id: 'related', title: '相关概念', source: './related.md',
      citations: [
        { id: 'si-related-1', sourceId: 'book.qianli-minggao' },
        { id: 'si-related-2', sourceId: 'book.qianli-minggao' },
        { id: 'si-related-3', sourceId: 'book.qianli-minggao', note: '“十天干，十二地支以次联贯，即构成下列六十花甲子。”' },
      ]
    }
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
