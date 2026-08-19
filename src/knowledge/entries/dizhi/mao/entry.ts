import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'dizhi.mao',
  categoryId: 'dizhi',
  slug: 'mao',
  title: '卯',
  pinyin: 'mǎo',
  summary: '十二地支第四位，属阴，五行属木。',
  order: 4,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'mao-basic-1', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》：“支则寅辰午申戌子为阳，卯巳未酉亥丑为阴。”' },
        { id: 'mao-basic-2', sourceId: 'classic.wuxing-dayi', note: '卷二《第五论配支干》：“甲乙寅卯，木也，位在东方。”' },
      ]
    },
    {
      id: 'characteristics', title: '基本性质', source: './characteristics.md',
      citations: [
        { id: 'mao-characteristics-1', sourceId: 'classic.shiming' },
        { id: 'mao-characteristics-2', sourceId: 'classic.wuxing-dayi', note: '卷一：“卯者，冒也。”并以万物生长、覆冒于地说明其义' },
        { id: 'mao-characteristics-3', sourceId: 'classic.shiji-lvshu' },
      ]
    },
    {
      id: 'time-space', title: '时空配属', source: './time-space.md',
      citations: [
        { id: 'mao-time-space-1', sourceId: 'book.qianli-minggao', note: '卯为二月，惊蛰为卯月节，春分为卯月气' },
        { id: 'mao-time-space-2', sourceId: 'other.hko-tiangan-dizhi', note: '表三“十二辰和现今时间的对应关系”' },
        { id: 'mao-time-space-3', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《十二支分配地理》：“卯……居位正东。”' },
      ]
    },
    {
      id: 'canggan', title: '藏干', source: './canggan.md',
      citations: [
        { id: 'mao-canggan-1', sourceId: 'classic.yuanhai-ziping', note: '“卯宫乙木独相逢。”' },
      ]
    },
    {
      id: 'imagery', title: '传统取象', source: './imagery.md',
      citations: [
        { id: 'mao-imagery-1', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《十二支分配地理》：以卯属乙木、居正东、时值仲春及青色之象解释“琼林”' },
      ]
    },
    {
      id: 'relations', title: '关系与组合', source: './relations.md',
      citations: [
        { id: 'mao-relations-1', sourceId: 'book.qianli-minggao' },
        { id: 'mao-relations-2', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论支元六合》' },
        { id: 'mao-relations-3', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论冲击》' },
        { id: 'mao-relations-4', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论六害》' },
        { id: 'mao-relations-5', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论三刑》：“子卯一刑也。”' },
        { id: 'mao-relations-6', sourceId: 'classic.xiejibianfangshu', note: '卷一《考原》：“木生于亥，旺于卯，墓于未，故亥卯未合木局也。”' },
        { id: 'mao-relations-7', sourceId: 'book.qianli-minggao' },
      ]
    },
    {
      id: 'related', title: '相关概念', source: './related.md',
      citations: [
        { id: 'mao-related-1', sourceId: 'book.qianli-minggao' },
        { id: 'mao-related-2', sourceId: 'book.qianli-minggao' },
        { id: 'mao-related-3', sourceId: 'book.qianli-minggao', note: '“十天干，十二地支以次联贯，即构成下列六十花甲子。”' },
      ]
    }
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
