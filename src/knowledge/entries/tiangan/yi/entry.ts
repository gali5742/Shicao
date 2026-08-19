import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'tiangan.yi',
  categoryId: 'tiangan',
  slug: 'yi',
  title: '乙',
  pinyin: 'yǐ',
  summary: '十天干第二位，属阴，五行属木。',
  order: 2,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'yi-basic-ziping', sourceId: 'classic.ziping-zhenquan', locator: '论十干十二支' },
      ]
    },
    {
      id: 'characteristics', title: '基本性质', source: './characteristics.md',
      citations: [
        { id: 'yi-character-chanwei1', sourceId: 'book.ditian-sui-chanwei' },
        { id: 'yi-character-sanming', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》' },
        { id: 'yi-character-ditian', sourceId: 'classic.ditian-sui' },
        { id: 'yi-character-chanwei2', sourceId: 'book.ditian-sui-chanwei' },
      ]
    },
    {
      id: 'imagery', title: '传统取象', source: './imagery.md',
      citations: [
        { id: 'yi-image-sanming', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》' },
        { id: 'yi-image-ditian', sourceId: 'classic.ditian-sui' },
        { id: 'yi-image-chanwei', sourceId: 'book.ditian-sui-chanwei' },
        { id: 'yi-image-boundary', sourceId: 'book.qianli-minggao', quote: '十干阴阳之异，不过阳刚阴柔，阳健阴顺。阳不甚，受阴克；阴不甚，畏阳克。阴易于他从，阳难于他从。阳乾气旺，阴乾质坚而已。而命家作为歌赋，比喻失伦。' },
      ]
    },
    {
      id: 'seasons', title: '四时状态', source: './seasons.md',
      citations: [
        { id: 'yi-season-general', sourceId: 'book.ditian-sui-chanwei' },
        { id: 'yi-season-01', sourceId: 'classic.qiongtong-baojian', locator: '三春乙木·正月' },
        { id: 'yi-season-02', sourceId: 'classic.qiongtong-baojian', locator: '三春乙木·二月' },
        { id: 'yi-season-03', sourceId: 'classic.qiongtong-baojian', locator: '三春乙木·三月' },
        { id: 'yi-season-summer', sourceId: 'classic.qiongtong-baojian', locator: '三夏乙木' },
        { id: 'yi-season-04', sourceId: 'classic.qiongtong-baojian', locator: '三夏乙木·四月' },
        { id: 'yi-season-05', sourceId: 'classic.qiongtong-baojian', locator: '三夏乙木·五月' },
        { id: 'yi-season-06', sourceId: 'classic.qiongtong-baojian', locator: '三夏乙木·六月' },
        { id: 'yi-season-07', sourceId: 'classic.qiongtong-baojian', locator: '三秋乙木·七月' },
        { id: 'yi-season-08', sourceId: 'classic.qiongtong-baojian', locator: '三秋乙木·八月' },
        { id: 'yi-season-09', sourceId: 'classic.qiongtong-baojian', locator: '三秋乙木·九月' },
        { id: 'yi-season-10', sourceId: 'classic.qiongtong-baojian', locator: '三冬乙木·十月' },
        { id: 'yi-season-11', sourceId: 'classic.qiongtong-baojian', locator: '三冬乙木·十一月' },
        { id: 'yi-season-12a', sourceId: 'book.bazi-tiyao', locator: '乙日主生丑月' },
        { id: 'yi-season-12b', sourceId: 'classic.zaohua-yuanyao', locator: '十二月乙木' },
      ]
    },
    {
      id: 'changsheng', title: '十二长生', source: './changsheng.md',
      citations: [
        { id: 'yi-changsheng-seq', sourceId: 'book.qianli-minggao', quote: '长生在午，沐浴在巳，冠带在辰，临官在卯，帝旺在寅，衰于丑，病于子，死于亥，墓在戌，绝于酉，胎于申，养于未。' },
        { id: 'yi-changsheng-life', sourceId: 'book.qianli-minggao', locator: '阴阳生死', quote: '乙木反是，午月枝叶繁盛即为之生。' },
        { id: 'yi-changsheng-death', sourceId: 'book.qianli-minggao', locator: '阴阳生死', quote: '亥月枝叶剥落即为之死。' },
      ]
    },
    {
      id: 'related', title: '关系与配属', source: './relations.md',
      citations: [
        { id: 'yi-rel-he', sourceId: 'classic.wuxing-jingji', locator: '论干神二' },
        { id: 'yi-rel-lu', sourceId: 'classic.wuxing-jingji' },
        { id: 'yi-rel-ren', sourceId: 'book.qianli-minggao' },
        { id: 'yi-rel-shishen-rule', sourceId: 'book.qianli-minggao', locator: '比劫禄刃篇', quote: '五行分克我、我克、生我、我生、比和五项，又有阴阳同性及互异之分……' },
      ]
    },
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
