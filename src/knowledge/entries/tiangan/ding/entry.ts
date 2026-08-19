import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'tiangan.ding',
  categoryId: 'tiangan',
  slug: 'ding',
  title: '丁',
  pinyin: 'dīng',
  summary: '十天干第四位，属阴，五行属火。',
  order: 4,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'ding-basic-qianli', sourceId: 'book.qianli-minggao' },
      ]
    },
    {
      id: 'characteristics', title: '基本性质', source: './characteristics.md',
      citations: [
        { id: 'ding-character-ditian', sourceId: 'classic.ditian-sui' },
        { id: 'ding-character-wangshuai', sourceId: 'classic.ditian-sui' },
      ]
    },
    {
      id: 'imagery', title: '传统取象', source: './imagery.md',
      citations: [
        { id: 'ding-image-sanming', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》' },
        { id: 'ding-image-boundary', sourceId: 'book.qianli-minggao', quote: '十干阴阳之异，不过阳刚阴柔，阳健阴顺。阳不甚，受阴克；阴不甚，畏阳克。阴易于他从，阳难于他从。阳乾气旺，阴乾质坚而已。而命家作为歌赋，比喻失伦。' },
      ]
    },
    {
      id: 'seasons', title: '四时状态', source: './seasons.md',
      citations: [
        { id: 'ding-season-01', sourceId: 'classic.qiongtong-baojian', locator: '三春丁火·正月' },
        { id: 'ding-season-02', sourceId: 'classic.qiongtong-baojian', locator: '三春丁火·二月' },
        { id: 'ding-season-03', sourceId: 'classic.qiongtong-baojian', locator: '三春丁火·三月' },
        { id: 'ding-season-04', sourceId: 'classic.qiongtong-baojian', locator: '三夏丁火·四月' },
        { id: 'ding-season-05', sourceId: 'classic.qiongtong-baojian', locator: '三夏丁火·五月' },
        { id: 'ding-season-06', sourceId: 'classic.qiongtong-baojian', locator: '三夏丁火·六月' },
        { id: 'ding-season-07', sourceId: 'classic.qiongtong-baojian', locator: '三秋丁火·七月' },
        { id: 'ding-season-08', sourceId: 'book.bazi-tiyao', locator: '丁日主生酉月' },
        { id: 'ding-season-09', sourceId: 'book.bazi-tiyao', locator: '丁日主生戌月' },
        { id: 'ding-season-10', sourceId: 'classic.qiongtong-baojian', locator: '三冬丁火·十月' },
        { id: 'ding-season-11', sourceId: 'book.bazi-tiyao', locator: '丁日主生子月' },
        { id: 'ding-season-12', sourceId: 'book.bazi-tiyao', locator: '丁日主生丑月' },
      ]
    },
    {
      id: 'changsheng', title: '十二长生', source: './changsheng.md',
      citations: [
        { id: 'ding-changsheng-seq', sourceId: 'book.qianli-minggao', quote: '长生在酉，沐浴在申，冠带在未，临官在午，帝旺在巳，衰于辰，病于卯，死于寅，墓于丑，绝于子，胎于亥，养于戌。' },
        { id: 'ding-changsheng-life', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》' },
        { id: 'ding-changsheng-death', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》' },
      ]
    },
    {
      id: 'related', title: '关系与配属', source: './relations.md',
      citations: [
        { id: 'ding-rel-he', sourceId: 'classic.wuxing-jingji', locator: '论干神二' },
        { id: 'ding-rel-lu', sourceId: 'classic.wuxing-jingji' },
        { id: 'ding-rel-ren', sourceId: 'book.qianli-minggao', quote: '丁己禄在午，而刃在巳。' },
        { id: 'ding-rel-shishen-rule', sourceId: 'book.qianli-minggao', locator: '比劫禄刃篇', quote: '五行分克我、我克、生我、我生、比和五项，又有阴阳同性及互异之分……' },
      ]
    },
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
