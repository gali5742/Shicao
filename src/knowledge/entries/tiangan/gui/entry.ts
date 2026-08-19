import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'tiangan.gui',
  categoryId: 'tiangan',
  slug: 'gui',
  title: '癸',
  pinyin: 'guǐ',
  summary: '十天干第十位，属阴，五行属水。',
  order: 10,
  sections: [
    { id: 'basic', title: '基本概念', source: './basic.md', citations: [
      { id: 'gui-basic-ditian', sourceId: 'classic.ditian-sui' },
    ] },
    { id: 'characteristics', title: '基本性质', source: './characteristics.md', citations: [
      { id: 'gui-character-ditian', sourceId: 'classic.ditian-sui' },
      { id: 'gui-character-sanming', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》' },
    ] },
    { id: 'imagery', title: '传统取象', source: './imagery.md', citations: [
      { id: 'gui-image-sanming', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》' },
      { id: 'gui-image-boundary', sourceId: 'book.qianli-minggao', quote: '十干阴阳之异，不过阳刚阴柔，阳健阴顺。阳不甚，受阴克；阴不甚，畏阳克。阴易于他从，阳难于他从。阳乾气旺，阴乾质坚而已。而命家作为歌赋，比喻失伦。' },
    ] },
    { id: 'seasons', title: '四时状态', source: './seasons.md', citations: [
      { id: 'gui-season-01', sourceId: 'classic.qiongtong-baojian', locator: '三春癸水·正月' },
      { id: 'gui-season-02', sourceId: 'classic.qiongtong-baojian', locator: '三春癸水·二月' },
      { id: 'gui-season-03', sourceId: 'classic.qiongtong-baojian', locator: '三春癸水·三月' },
      { id: 'gui-season-summer', sourceId: 'classic.qiongtong-baojian', locator: '论水' },
      { id: 'gui-season-04', sourceId: 'classic.qiongtong-baojian', locator: '三夏癸水·四月' },
      { id: 'gui-season-05', sourceId: 'classic.qiongtong-baojian', locator: '三夏癸水·五月' },
      { id: 'gui-season-06', sourceId: 'classic.qiongtong-baojian', locator: '三夏癸水·六月' },
      { id: 'gui-season-07', sourceId: 'classic.qiongtong-baojian', locator: '三秋癸水·七月' },
      { id: 'gui-season-08', sourceId: 'classic.qiongtong-baojian', locator: '三秋癸水·八月' },
      { id: 'gui-season-09', sourceId: 'classic.qiongtong-baojian', locator: '三秋癸水·九月' },
      { id: 'gui-season-10', sourceId: 'classic.qiongtong-baojian', locator: '三冬癸水·十月' },
      { id: 'gui-season-11', sourceId: 'classic.qiongtong-baojian', locator: '三冬癸水·十一月' },
      { id: 'gui-season-winter', sourceId: 'classic.qiongtong-baojian', locator: '论水' },
      { id: 'gui-season-12', sourceId: 'classic.qiongtong-baojian', locator: '三冬癸水·十二月' },
    ] },
    { id: 'changsheng', title: '十二长生', source: './changsheng.md', citations: [
      { id: 'gui-changsheng-seq', sourceId: 'book.qianli-minggao', locator: '天干篇·癸' },
      { id: 'gui-changsheng-life', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》', quote: '欲阴木行其根，则能疏通阴土……癸水方得通达。' },
      { id: 'gui-changsheng-death', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》', quote: '申中坤土庚金遂成围堰，使癸水不能流畅。' },
    ] },
    { id: 'related', title: '关系与配属', source: './relations.md', citations: [
      { id: 'gui-rel-he', sourceId: 'classic.wuxing-jingji', locator: '论干神二' },
      { id: 'gui-rel-lu', sourceId: 'classic.wuxing-jingji', locator: '论禄' },
      { id: 'gui-rel-ren', sourceId: 'book.qianli-minggao', locator: '比劫禄刃篇' },
      { id: 'gui-rel-shishen-rule', sourceId: 'book.qianli-minggao', locator: '比劫禄刃篇', quote: '五行分克我、我克、生我、我生、比和五项，又有阴阳同性及互异之分……' },
    ] },
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
