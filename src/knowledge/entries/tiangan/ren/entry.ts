import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'tiangan.ren',
  categoryId: 'tiangan',
  slug: 'ren',
  title: '壬',
  pinyin: 'rén',
  summary: '十天干第九位，属阳，五行属水。',
  order: 9,
  sections: [
    { id: 'basic', title: '基本概念', source: './basic.md', citations: [
      { id: 'ren-basic-ditian', sourceId: 'classic.ditian-sui' },
    ] },
    { id: 'characteristics', title: '基本性质', source: './characteristics.md', citations: [
      { id: 'ren-character-ditian', sourceId: 'classic.ditian-sui' },
    ] },
    { id: 'imagery', title: '传统取象', source: './imagery.md', citations: [
      { id: 'ren-image-sanming', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》' },
      { id: 'ren-image-ditian', sourceId: 'classic.ditian-sui', locator: '原注' },
      { id: 'ren-image-boundary', sourceId: 'book.qianli-minggao', quote: '十干阴阳之异，不过阳刚阴柔，阳健阴顺。阳不甚，受阴克；阴不甚，畏阳克。阴易于他从，阳难于他从。阳乾气旺，阴乾质坚而已。而命家作为歌赋，比喻失伦。' },
    ] },
    { id: 'seasons', title: '四时状态', source: './seasons.md', citations: [
      { id: 'ren-season-01', sourceId: 'classic.qiongtong-baojian', locator: '三春壬水·正月' },
      { id: 'ren-season-02', sourceId: 'classic.qiongtong-baojian', locator: '三春壬水·二月' },
      { id: 'ren-season-03', sourceId: 'classic.qiongtong-baojian', locator: '三春壬水·三月' },
      { id: 'ren-season-04', sourceId: 'classic.qiongtong-baojian', locator: '三夏壬水·四月' },
      { id: 'ren-season-05', sourceId: 'classic.qiongtong-baojian', locator: '三夏壬水·五月' },
      { id: 'ren-season-06', sourceId: 'classic.qiongtong-baojian', locator: '三夏壬水·六月' },
      { id: 'ren-season-07', sourceId: 'classic.qiongtong-baojian', locator: '三秋壬水·七月' },
      { id: 'ren-season-08', sourceId: 'classic.qiongtong-baojian', locator: '三秋壬水·八月' },
      { id: 'ren-season-09', sourceId: 'classic.qiongtong-baojian', locator: '三秋壬水·九月' },
      { id: 'ren-season-10', sourceId: 'classic.qiongtong-baojian', locator: '三冬壬水·十月' },
      { id: 'ren-season-11', sourceId: 'classic.qiongtong-baojian', locator: '三冬壬水·十一月' },
      { id: 'ren-season-12', sourceId: 'classic.qiongtong-baojian', locator: '三冬壬水·十二月' },
    ] },
    { id: 'changsheng', title: '十二长生', source: './changsheng.md', citations: [
      { id: 'ren-changsheng-seq', sourceId: 'book.qianli-minggao', locator: '天干篇·壬' },
      { id: 'ren-changsheng-life', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》', quote: '赖庚金而生，庚禄到申，能生壬水，乃五行转养之气。' },
      { id: 'ren-changsheng-death', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》', quote: '至于卯地……土虚则崩，故堤岸崩颓而壬水走泄散漫。' },
    ] },
    { id: 'related', title: '关系与配属', source: './relations.md', citations: [
      { id: 'ren-rel-he', sourceId: 'classic.wuxing-jingji', locator: '论干神二' },
      { id: 'ren-rel-lu', sourceId: 'classic.wuxing-jingji', locator: '论禄' },
      { id: 'ren-rel-ren', sourceId: 'book.qianli-minggao', locator: '比劫禄刃篇' },
      { id: 'ren-rel-shishen-rule', sourceId: 'book.qianli-minggao', locator: '比劫禄刃篇', quote: '五行分克我、我克、生我、我生、比和五项，又有阴阳同性及互异之分……' },
    ] },
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
