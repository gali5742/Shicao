import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'dizhi.chen',
  categoryId: 'dizhi',
  slug: 'chen',
  title: '辰',
  pinyin: 'chén',
  summary: '十二地支第五位，属阳，五行属土。',
  order: 5,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'chen-basic-1', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》：“支则寅辰午申戌子为阳，卯巳未酉亥丑为阴。”' },
        { id: 'chen-basic-2', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》：“戊己辰戌丑未，土也，位在中央，分王四季，寄治丙丁。”' },
      ]
    },
    {
      id: 'characteristics', title: '基本性质', source: './characteristics.md',
      citations: [
        { id: 'chen-characteristics-1', sourceId: 'classic.shiming' },
        { id: 'chen-characteristics-2', sourceId: 'classic.wuxing-dayi', note: '卷一：“辰者，震也。震动奋迅，去其故体也。”又引《三礼义宗》：“此月之时，物尽震动而长。”' },
      ]
    },
    {
      id: 'time-space', title: '时空配属', source: './time-space.md',
      citations: [
        { id: 'chen-time-space-1', sourceId: 'book.qianli-minggao', note: '辰为三月，清明为辰月节，谷雨为辰月气' },
        { id: 'chen-time-space-2', sourceId: 'other.hko-tiangan-dizhi', note: '表三“十二辰和现今时间的对应关系”' },
        { id: 'chen-time-space-3', sourceId: 'classic.yimao', note: '卷一所列环周次序有“甲卯乙、辰巽巳、丙午丁”；十二支精细方位依此位置作现代方向表述' },
      ]
    },
    {
      id: 'canggan', title: '藏干', source: './canggan.md',
      citations: [
        { id: 'chen-canggan-1', sourceId: 'classic.yuanhai-ziping', note: '“辰藏乙戊三分癸。”' },
      ]
    },
    {
      id: 'imagery', title: '传统取象', source: './imagery.md',
      citations: [
        { id: 'chen-imagery-1', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《十二支分配地理》：“辰为草泽。夫泽，水所钟也，辰在东方之次，为水库，故为草为泽。”' },
      ]
    },
    {
      id: 'relations', title: '关系与组合', source: './relations.md',
      citations: [
        { id: 'chen-relations-1', sourceId: 'book.qianli-minggao', note: '列辰与各地支之间的生、克关系' },
        { id: 'chen-relations-2', sourceId: 'book.qianli-minggao', note: '“合：辰酉相合。”' },
        { id: 'chen-relations-3', sourceId: 'book.qianli-minggao', note: '“冲：辰戌相冲。”' },
        { id: 'chen-relations-4', sourceId: 'book.qianli-minggao', note: '“害：卯辰相害。”' },
        { id: 'chen-relations-5', sourceId: 'book.qianli-minggao', note: '“刑：二辰自刑。”' },
        { id: 'chen-relations-6', sourceId: 'classic.xiejibianfangshu', note: '卷一《考原》：“水生于申，旺于子，墓于辰，故申子辰合水局。”正文统一以“生、旺、库”表述' },
        { id: 'chen-relations-7', sourceId: 'book.qianli-minggao', note: '“方合：寅卯辰合为东方。”' },
      ]
    },
    {
      id: 'related', title: '相关概念', source: './related.md',
      citations: [
        { id: 'chen-related-1', sourceId: 'book.qianli-minggao' },
        { id: 'chen-related-2', sourceId: 'book.qianli-minggao', note: '“十天干，十二地支以次联贯，即构成下列六十花甲子。”' },
      ]
    }
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
