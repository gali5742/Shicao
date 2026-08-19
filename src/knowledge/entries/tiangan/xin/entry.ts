import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'tiangan.xin',
  categoryId: 'tiangan',
  slug: 'xin',
  title: '辛',
  pinyin: 'xīn',
  summary: '十天干第八位，属阴，五行属金。',
  order: 8,
  sections: [
    { id: 'basic', title: '基本概念', source: './basic.md', citations: [
      { id: 'xin-basic-ziping', sourceId: 'classic.ziping-zhenquan', locator: '论阴阳生克' },
    ] },
    { id: 'characteristics', title: '基本性质', source: './characteristics.md', citations: [
      { id: 'xin-character-ditian', sourceId: 'classic.ditian-sui' },
    ] },
    { id: 'imagery', title: '传统取象', source: './imagery.md', citations: [
      { id: 'xin-image-sanming', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》' },
      { id: 'xin-image-boundary', sourceId: 'book.qianli-minggao', quote: '十干阴阳之异，不过阳刚阴柔，阳健阴顺。阳不甚，受阴克；阴不甚，畏阳克。阴易于他从，阳难于他从。阳乾气旺，阴乾质坚而已。而命家作为歌赋，比喻失伦。' },
    ] },
    { id: 'seasons', title: '四时状态', source: './seasons.md', citations: [
      { id: 'xin-season-01', sourceId: 'classic.qiongtong-baojian', locator: '三春辛金·正月' },
      { id: 'xin-season-02', sourceId: 'classic.qiongtong-baojian', locator: '三春辛金·二月' },
      { id: 'xin-season-spring', sourceId: 'classic.qiongtong-baojian', locator: '论金' },
      { id: 'xin-season-03', sourceId: 'classic.qiongtong-baojian', locator: '三春辛金·三月' },
      { id: 'xin-season-04', sourceId: 'classic.qiongtong-baojian', locator: '三夏辛金·四月' },
      { id: 'xin-season-summer', sourceId: 'classic.qiongtong-baojian', locator: '论金' },
      { id: 'xin-season-05', sourceId: 'classic.qiongtong-baojian', locator: '三夏辛金·五月' },
      { id: 'xin-season-06', sourceId: 'classic.qiongtong-baojian', locator: '三夏辛金·六月' },
      { id: 'xin-season-07', sourceId: 'classic.qiongtong-baojian', locator: '三秋辛金·七月' },
      { id: 'xin-season-08', sourceId: 'classic.qiongtong-baojian', locator: '三秋辛金·八月' },
      { id: 'xin-season-09', sourceId: 'classic.qiongtong-baojian', locator: '三秋辛金·九月' },
      { id: 'xin-season-10', sourceId: 'classic.qiongtong-baojian', locator: '三冬辛金·十月' },
      { id: 'xin-season-winter', sourceId: 'classic.qiongtong-baojian', locator: '论金' },
      { id: 'xin-season-12', sourceId: 'classic.qiongtong-baojian', locator: '三冬辛金·十二月' },
    ] },
    { id: 'changsheng', title: '十二长生', source: './changsheng.md', citations: [
      { id: 'xin-changsheng-seq', sourceId: 'book.qianli-minggao', locator: '天干篇·辛' },
      { id: 'xin-changsheng-life', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》', quote: '长生于子……得子水荡漾，淘去浮砂，方能出色。' },
      { id: 'xin-changsheng-death', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》', quote: '至于巳地，巳为炉冶之火……亦被巳中戊土埋没其形。' },
    ] },
    { id: 'related', title: '关系与配属', source: './relations.md', citations: [
      { id: 'xin-rel-he', sourceId: 'classic.wuxing-jingji', locator: '论干神二' },
      { id: 'xin-rel-lu', sourceId: 'classic.wuxing-jingji', locator: '论禄' },
      { id: 'xin-rel-ren', sourceId: 'book.qianli-minggao', locator: '比劫禄刃篇' },
      { id: 'xin-rel-shishen-rule', sourceId: 'book.qianli-minggao', locator: '比劫禄刃篇', quote: '五行分克我、我克、生我、我生、比和五项，又有阴阳同性及互异之分……' },
    ] },
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
