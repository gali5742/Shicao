import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'tiangan.jia',
  categoryId: 'tiangan',
  slug: 'jia',
  title: '甲',
  pinyin: 'jiǎ',
  summary: '十天干之首，属阳，五行属木。',
  order: 1,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'jia-basic-ziping', sourceId: 'classic.ziping-zhenquan', locator: '论十干十二支' },
      ]
    },
    {
      id: 'characteristics', title: '基本性质', source: './characteristics.md',
      citations: [
        { id: 'jia-character-qianli', sourceId: 'book.qianli-minggao' },
        { id: 'jia-character-ditian', sourceId: 'classic.ditian-sui' },
        { id: 'jia-character-chanwei', sourceId: 'book.ditian-sui-chanwei' },
      ]
    },
    {
      id: 'imagery', title: '传统取象', source: './imagery.md',
      citations: [
        { id: 'jia-image-ditian', sourceId: 'classic.ditian-sui' },
        { id: 'jia-image-sanming', sourceId: 'classic.sanming-tonghui', locator: '卷二《论天干阴阳生死》' },
        { id: 'jia-image-boundary', sourceId: 'book.qianli-minggao', quote: '十干阴阳之异，不过阳刚阴柔，阳健阴顺。阳不甚，受阴克；阴不甚，畏阳克。阴易于他从，阳难于他从。阳乾气旺，阴乾质坚而已。而命家作为歌赋，比喻失伦。' },
      ]
    },
    {
      id: 'seasons', title: '四时状态', source: './seasons.md',
      citations: [
        { id: 'jia-season-01a', sourceId: 'classic.qiongtong-baojian', locator: '三春甲木·正月' },
        { id: 'jia-season-01b', sourceId: 'book.ditian-sui-chanwei' },
        { id: 'jia-season-02', sourceId: 'book.ditian-sui-chanwei' },
        { id: 'jia-season-03', sourceId: 'classic.sanming-tonghui', locator: '卷十《玉井奥诀》' },
        { id: 'jia-season-04', sourceId: 'classic.qiongtong-baojian', locator: '三夏甲木·四月' },
        { id: 'jia-season-05', sourceId: 'classic.qiongtong-baojian', locator: '三夏甲木·五六月' },
        { id: 'jia-season-06', sourceId: 'classic.qiongtong-baojian', locator: '三夏甲木·五六月' },
        { id: 'jia-season-07', sourceId: 'classic.qiongtong-baojian', locator: '三秋甲木' },
        { id: 'jia-season-08', sourceId: 'classic.qiongtong-baojian', locator: '三秋甲木·八月' },
        { id: 'jia-season-09', sourceId: 'classic.qiongtong-baojian', locator: '三秋甲木·九月' },
        { id: 'jia-season-10', sourceId: 'book.qianli-minggao', locator: '阴阳生死' },
        { id: 'jia-season-11', sourceId: 'classic.qiongtong-baojian', locator: '三冬甲木·十一月' },
        { id: 'jia-season-12a', sourceId: 'classic.qiongtong-baojian', locator: '三冬甲木·十二月' },
        { id: 'jia-season-12b', sourceId: 'classic.sanming-tonghui', locator: '卷十《玉井奥诀》' },
      ]
    },
    {
      id: 'changsheng', title: '十二长生', source: './changsheng.md',
      citations: [
        { id: 'jia-changsheng-seq', sourceId: 'book.qianli-minggao', quote: '长生在亥，沐浴在子，冠带在丑，临官在寅，帝旺在卯；衰于辰，病于巳，死于午，墓于未，绝于申，胎于酉，养于戌。' },
        { id: 'jia-changsheng-life', sourceId: 'book.qianli-minggao', locator: '阴阳生死', quote: '木当亥月，正枝叶剥落，而内之生气，已收藏饱足，可以为来春发泄之机，此其所以生于亥也。' },
        { id: 'jia-changsheng-death', sourceId: 'book.qianli-minggao', locator: '阴阳生死', quote: '木当午月，正枝叶繁盛之候，而甲何以死，却不知外虽繁盛，而内之生气发泄已尽。此其所以死于午也。' },
      ]
    },
    {
      id: 'related', title: '关系与配属', source: './relations.md',
      citations: [
        { id: 'jia-rel-he', sourceId: 'classic.wuxing-jingji', locator: '论干神二' },
        { id: 'jia-rel-lu', sourceId: 'classic.wuxing-jingji' },
        { id: 'jia-rel-ren', sourceId: 'book.qianli-minggao' },
        { id: 'jia-rel-shishen-rule', sourceId: 'book.qianli-minggao', locator: '比劫禄刃篇', quote: '五行分克我、我克、生我、我生、比和五项，又有阴阳同性及互异之分……' },
      ]
    },
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
