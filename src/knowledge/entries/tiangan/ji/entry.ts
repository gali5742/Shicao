import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'tiangan.ji',
  categoryId: 'tiangan',
  slug: 'ji',
  title: '己',
  pinyin: 'jǐ',
  summary: '十天干第六位，属阴，五行属土。',
  order: 6,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'ji-basic-ditian', sourceId: 'classic.ditian-sui' },
      ]
    },
    {
      id: 'characteristics', title: '基本性质', source: './characteristics.md',
      citations: [
        { id: 'ji-character-ditian', sourceId: 'classic.ditian-sui' },
        { id: 'ji-character-chanwei', sourceId: 'book.ditian-sui-chanwei' },
      ]
    },
    {
      id: 'imagery', title: '传统取象', source: './imagery.md',
      citations: [
        { id: 'ji-image-sanming1', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》' },
        { id: 'ji-image-sanming2', sourceId: 'classic.sanming-tonghui', locator: '卷四《论十干坐支兼得月时及行运吉凶》' },
        { id: 'ji-image-boundary', sourceId: 'book.qianli-minggao', quote: '十干阴阳之异，不过阳刚阴柔，阳健阴顺。阳不甚，受阴克；阴不甚，畏阳克。阴易于他从，阳难于他从。阳乾气旺，阴乾质坚而已。而命家作为歌赋，比喻失伦。' },
      ]
    },
    {
      id: 'seasons', title: '四时状态', source: './seasons.md',
      citations: [
        { id: 'ji-season-01', sourceId: 'classic.qiongtong-baojian', locator: '三春己土·正月' },
        { id: 'ji-season-02', sourceId: 'classic.qiongtong-baojian', locator: '三春己土·二月' },
        { id: 'ji-season-03', sourceId: 'classic.qiongtong-baojian', locator: '三春己土·三月' },
        { id: 'ji-season-summer', sourceId: 'classic.zaohua-yuanyao', locator: '三夏己土总论' },
        { id: 'ji-season-04', sourceId: 'book.bazi-tiyao', locator: '己日主生巳月' },
        { id: 'ji-season-05', sourceId: 'book.zaohua-yuanyao-pingzhu', locator: '五六月甲木一例' },
        { id: 'ji-season-06', sourceId: 'book.zaohua-yuanyao-pingzhu', locator: '五六月甲木一例' },
        { id: 'ji-season-autumn', sourceId: 'classic.qiongtong-baojian', locator: '三秋己土' },
        { id: 'ji-season-07', sourceId: 'book.bazi-tiyao', locator: '己日主生申月' },
        { id: 'ji-season-08', sourceId: 'book.bazi-tiyao', locator: '己日主生酉月' },
        { id: 'ji-season-09', sourceId: 'book.bazi-tiyao', locator: '己日主生戌月' },
        { id: 'ji-season-winter', sourceId: 'classic.qiongtong-baojian', locator: '三冬己土' },
        { id: 'ji-season-10', sourceId: 'book.bazi-tiyao', locator: '己日主生亥月' },
        { id: 'ji-season-11', sourceId: 'book.bazi-tiyao', locator: '己日主生子月' },
        { id: 'ji-season-12', sourceId: 'book.bazi-tiyao', locator: '己日主生丑月' },
      ]
    },
    {
      id: 'changsheng', title: '十二长生', source: './changsheng.md',
      citations: [
        { id: 'ji-changsheng-seq', sourceId: 'book.qianli-minggao', quote: '长生在酉，沐浴在申，冠带在未，临官在午，帝旺在巳，衰于辰，病于卯，死于寅，墓于丑，绝于子，胎于亥，养于戌。' },
        { id: 'ji-changsheng-life', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》' },
        { id: 'ji-changsheng-death', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》' },
      ]
    },
    {
      id: 'related', title: '关系与配属', source: './relations.md',
      citations: [
        { id: 'ji-rel-he', sourceId: 'classic.wuxing-jingji', locator: '论干神二' },
        { id: 'ji-rel-lu', sourceId: 'classic.wuxing-jingji' },
        { id: 'ji-rel-ren', sourceId: 'book.qianli-minggao', quote: '丁己禄在午，而刃在巳。' },
        { id: 'ji-rel-shishen-rule', sourceId: 'book.qianli-minggao', locator: '比劫禄刃篇', quote: '五行分克我、我克、生我、我生、比和五项，又有阴阳同性及互异之分……' },
      ]
    },
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
