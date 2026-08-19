import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'tiangan.geng',
  categoryId: 'tiangan',
  slug: 'geng',
  title: '庚',
  pinyin: 'gēng',
  summary: '十天干第七位，属阳，五行属金。',
  order: 7,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'geng-basic-ziping', sourceId: 'classic.ziping-zhenquan', locator: '论阴阳生克' },
      ]
    },
    {
      id: 'characteristics', title: '基本性质', source: './characteristics.md',
      citations: [
        { id: 'geng-character-ditian', sourceId: 'classic.ditian-sui' },
      ]
    },
    {
      id: 'imagery', title: '传统取象', source: './imagery.md',
      citations: [
        { id: 'geng-image-sanming', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》' },
        { id: 'geng-image-boundary', sourceId: 'book.qianli-minggao', quote: '十干阴阳之异，不过阳刚阴柔，阳健阴顺。阳不甚，受阴克；阴不甚，畏阳克。阴易于他从，阳难于他从。阳乾气旺，阴乾质坚而已。而命家作为歌赋，比喻失伦。' },
      ]
    },
    {
      id: 'seasons', title: '四时状态', source: './seasons.md',
      citations: [
        { id: 'geng-season-01', sourceId: 'classic.qiongtong-baojian', locator: '三春庚金·正月' },
        { id: 'geng-season-02', sourceId: 'classic.qiongtong-baojian', locator: '三春庚金·二月' },
        { id: 'geng-season-03', sourceId: 'classic.qiongtong-baojian', locator: '三春庚金·三月' },
        { id: 'geng-season-04', sourceId: 'classic.qiongtong-baojian', locator: '三夏庚金·四月' },
        { id: 'geng-season-05', sourceId: 'classic.qiongtong-baojian', locator: '三夏庚金·五月' },
        { id: 'geng-season-06', sourceId: 'classic.qiongtong-baojian', locator: '三夏庚金·六月' },
        { id: 'geng-season-07', sourceId: 'classic.qiongtong-baojian', locator: '三秋庚金·七月' },
        { id: 'geng-season-08', sourceId: 'classic.qiongtong-baojian', locator: '三秋庚金·八月' },
        { id: 'geng-season-09', sourceId: 'classic.qiongtong-baojian', locator: '三秋庚金·九月' },
        { id: 'geng-season-10', sourceId: 'classic.qiongtong-baojian', locator: '三冬庚金·十月' },
        { id: 'geng-season-11', sourceId: 'classic.qiongtong-baojian', locator: '三冬庚金·十一月' },
        { id: 'geng-season-12', sourceId: 'classic.qiongtong-baojian', locator: '三冬庚金·十二月' },
      ]
    },
    {
      id: 'changsheng', title: '十二长生', source: './changsheng.md',
      citations: [
        { id: 'geng-changsheng-seq', sourceId: 'book.qianli-minggao', locator: '天干篇·庚' },
        { id: 'geng-changsheng-life', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》', quote: '长生于巳，巳中戊土能生庚金……巳为炉冶之火，锻炼庚金，遂成钟鼎之器。' },
        { id: 'geng-changsheng-death', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》', quote: '至于子地，水旺之乡，金寒水冷，子旺母衰。' },
      ]
    },
    {
      id: 'related', title: '关系与配属', source: './relations.md',
      citations: [
        { id: 'geng-rel-he', sourceId: 'classic.wuxing-jingji', locator: '论干神二' },
        { id: 'geng-rel-lu', sourceId: 'classic.wuxing-jingji', locator: '论禄' },
        { id: 'geng-rel-ren', sourceId: 'book.qianli-minggao', locator: '比劫禄刃篇' },
        { id: 'geng-rel-shishen-rule', sourceId: 'book.qianli-minggao', locator: '比劫禄刃篇', quote: '五行分克我、我克、生我、我生、比和五项，又有阴阳同性及互异之分……' },
      ]
    },
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
