import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'tiangan.bing',
  categoryId: 'tiangan',
  slug: 'bing',
  title: '丙',
  pinyin: 'bǐng',
  summary: '十天干第三位，属阳，五行属火。',
  order: 3,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'bing-basic-qianli', sourceId: 'book.qianli-minggao' },
      ]
    },
    {
      id: 'characteristics', title: '基本性质', source: './characteristics.md',
      citations: [
        { id: 'bing-character-qianli', sourceId: 'book.qianli-minggao' },
        { id: 'bing-character-ditian', sourceId: 'classic.ditian-sui' },
        { id: 'bing-character-sanming', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》' },
      ]
    },
    {
      id: 'imagery', title: '传统取象', source: './imagery.md',
      citations: [
        { id: 'bing-image-sanming', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》' },
        { id: 'bing-image-ditian', sourceId: 'classic.ditian-sui' },
        { id: 'bing-image-boundary', sourceId: 'book.qianli-minggao', quote: '十干阴阳之异，不过阳刚阴柔，阳健阴顺。阳不甚，受阴克；阴不甚，畏阳克。阴易于他从，阳难于他从。阳乾气旺，阴乾质坚而已。而命家作为歌赋，比喻失伦。' },
      ]
    },
    {
      id: 'seasons', title: '四时状态', source: './seasons.md',
      citations: [
        { id: 'bing-season-01', sourceId: 'classic.qiongtong-baojian', locator: '三春丙火·正月' },
        { id: 'bing-season-02', sourceId: 'classic.qiongtong-baojian', locator: '三春丙火·二月' },
        { id: 'bing-season-03', sourceId: 'classic.qiongtong-baojian', locator: '三春丙火·三月' },
        { id: 'bing-season-summer', sourceId: 'classic.qiongtong-baojian', locator: '三夏丙火' },
        { id: 'bing-season-04', sourceId: 'classic.qiongtong-baojian', locator: '三夏丙火·四月' },
        { id: 'bing-season-05', sourceId: 'classic.qiongtong-baojian', locator: '三夏丙火·五月' },
        { id: 'bing-season-06', sourceId: 'classic.qiongtong-baojian', locator: '三夏丙火·六月' },
        { id: 'bing-season-07', sourceId: 'classic.qiongtong-baojian', locator: '三秋丙火·七月' },
        { id: 'bing-season-08', sourceId: 'classic.qiongtong-baojian', locator: '三秋丙火·八月' },
        { id: 'bing-season-09', sourceId: 'classic.qiongtong-baojian', locator: '三秋丙火·九月' },
        { id: 'bing-season-10', sourceId: 'classic.qiongtong-baojian', locator: '三冬丙火·十月' },
        { id: 'bing-season-11', sourceId: 'classic.qiongtong-baojian', locator: '三冬丙火·十一月' },
        { id: 'bing-season-12', sourceId: 'classic.qiongtong-baojian', locator: '三冬丙火·十二月' },
      ]
    },
    {
      id: 'changsheng', title: '十二长生', source: './changsheng.md',
      citations: [
        { id: 'bing-changsheng-seq', sourceId: 'book.qianli-minggao', quote: '长生在寅，沐浴在卯，冠带在辰，临官在巳，帝旺在午，衰于未，病于申，死于酉，墓于戌，绝于亥，胎于子，养于丑。' },
        { id: 'bing-changsheng-life', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》' },
        { id: 'bing-changsheng-death', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》' },
      ]
    },
    {
      id: 'related', title: '关系与配属', source: './relations.md',
      citations: [
        { id: 'bing-rel-he', sourceId: 'classic.wuxing-jingji', locator: '论干神二' },
        { id: 'bing-rel-lu', sourceId: 'classic.wuxing-jingji' },
        { id: 'bing-rel-ren', sourceId: 'book.qianli-minggao', quote: '丙戊刃在午，午中丁己，为丙戊之劫财。' },
        { id: 'bing-rel-shishen-rule', sourceId: 'book.qianli-minggao', locator: '比劫禄刃篇', quote: '五行分克我、我克、生我、我生、比和五项，又有阴阳同性及互异之分……' },
      ]
    },
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
