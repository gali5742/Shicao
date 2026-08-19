import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'dizhi.canggan',
  categoryId: 'dizhi',
  slug: 'canggan',
  title: '藏干',
  pinyin: 'cáng gān',
  summary: '十二地支内部所藏天干的固定结构。',
  order: 20,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'canggan-basic-1', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论人元司事》：“故支中所藏者主命，谓之人元，名为司事之神。”' },
      ]
    },
    {
      id: 'table', title: '十二支藏干', source: './table.md',
      citations: [
        { id: 'canggan-table-1', sourceId: 'classic.yuanhai-ziping', note: '“子宫癸水在其中，丑癸辛金己土同；寅宫甲木兼丙戊，卯宫乙木独相逢。辰藏乙戊三分癸，巳中庚金丙戊丛；午宫丁火并己土，未宫乙己丁共宗。申位庚金壬水戊，酉宫辛金独丰隆；戌宫辛金及丁戊，亥藏壬甲是真踪。”' },
      ]
    },
    {
      id: 'wuxing', title: '藏干与地支五行', source: './wuxing.md'
    },
    {
      id: 'renyuan', title: '藏干与人元司事', source: './renyuan.md',
      citations: [
        { id: 'canggan-renyuan-1', sourceId: 'book.ditian-sui-chanwei', note: '“子时前三刻三分壬水用事者，乃亥中馀气……如大雪十日前壬水用事之谓也。”' },
        { id: 'canggan-renyuan-2', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论人元司事》' },
      ]
    }
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
