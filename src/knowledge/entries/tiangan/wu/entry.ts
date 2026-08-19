import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'tiangan.wu',
  categoryId: 'tiangan',
  slug: 'wu',
  title: '戊',
  pinyin: 'wù',
  summary: '十天干第五位，属阳，五行属土。',
  order: 5,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'wu-basic-ditian', sourceId: 'classic.ditian-sui' },
      ]
    },
    {
      id: 'characteristics', title: '基本性质', source: './characteristics.md',
      citations: [
        { id: 'wu-character-ditian1', sourceId: 'classic.ditian-sui' },
        { id: 'wu-character-ditian2', sourceId: 'classic.ditian-sui' },
        { id: 'wu-character-ditian3', sourceId: 'classic.ditian-sui' },
      ]
    },
    {
      id: 'imagery', title: '传统取象', source: './imagery.md',
      citations: [
        { id: 'wu-image-sanming1', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》' },
        { id: 'wu-image-sanming2', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》' },
        { id: 'wu-image-sanming3', sourceId: 'classic.sanming-tonghui', locator: '卷四《论十干坐支兼得月时及行运吉凶》' },
        { id: 'wu-image-boundary', sourceId: 'classic.ditian-sui', locator: '原注', quote: '戊土非城墙堤岸之谓也，较己特高厚刚燥，乃己土发源之地，得乎中气而且正大矣。' },
      ]
    },
    {
      id: 'seasons', title: '四时状态', source: './seasons.md',
      citations: [
        { id: 'wu-season-01', sourceId: 'book.bazi-tiyao', locator: '戊日主生寅月' },
        { id: 'wu-season-02', sourceId: 'book.bazi-tiyao', locator: '戊日主生卯月' },
        { id: 'wu-season-03', sourceId: 'classic.qiongtong-baojian', locator: '三春戊土·三月' },
        { id: 'wu-season-04', sourceId: 'classic.qiongtong-baojian', locator: '三夏戊土·四月' },
        { id: 'wu-season-05', sourceId: 'classic.qiongtong-baojian', locator: '三夏戊土·五月' },
        { id: 'wu-season-06', sourceId: 'classic.qiongtong-baojian', locator: '三夏戊土·六月' },
        { id: 'wu-season-07', sourceId: 'classic.qiongtong-baojian', locator: '三秋戊土·七月' },
        { id: 'wu-season-08', sourceId: 'classic.qiongtong-baojian', locator: '三秋戊土·八月' },
        { id: 'wu-season-09', sourceId: 'classic.qiongtong-baojian', locator: '三秋戊土·九月' },
        { id: 'wu-season-10', sourceId: 'classic.qiongtong-baojian', locator: '三冬戊土·十月' },
        { id: 'wu-season-11', sourceId: 'book.bazi-tiyao', locator: '戊日主生子月' },
        { id: 'wu-season-12', sourceId: 'book.bazi-tiyao', locator: '戊日主生丑月' },
      ]
    },
    {
      id: 'changsheng', title: '十二长生', source: './changsheng.md',
      citations: [
        { id: 'wu-changsheng-seq', sourceId: 'book.qianli-minggao', quote: '长生在寅，沐浴在卯，冠带在辰，临官在巳，帝旺在午，衰于未，病于申，死于酉，墓于戌，绝于亥，胎于子，养于丑。' },
        { id: 'wu-changsheng-life', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》' },
        { id: 'wu-changsheng-death', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》' },
      ]
    },
    {
      id: 'related', title: '关系与配属', source: './relations.md',
      citations: [
        { id: 'wu-rel-he', sourceId: 'classic.wuxing-jingji', locator: '论干神二' },
        { id: 'wu-rel-lu', sourceId: 'classic.wuxing-jingji' },
        { id: 'wu-rel-ren', sourceId: 'book.qianli-minggao', quote: '丙戊刃在午，午中丁己，为丙戊之劫财。' },
        { id: 'wu-rel-shishen-rule', sourceId: 'book.qianli-minggao', locator: '比劫禄刃篇', quote: '五行分克我、我克、生我、我生、比和五项，又有阴阳同性及互异之分……' },
      ]
    },
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
