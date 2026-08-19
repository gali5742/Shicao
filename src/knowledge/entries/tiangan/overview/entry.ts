import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'tiangan.overview',
  categoryId: 'tiangan',
  slug: 'tiangan',
  title: '天干',
  pinyin: 'tiān gān',
  summary: '甲、乙、丙、丁、戊、己、庚、辛、壬、癸十个符号的总称。',
  order: 0,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'overview-basic-qianli', sourceId: 'book.qianli-minggao', quote: '甲、乙、丙、丁、戊、己、庚、辛、壬、癸，此为十天干。' },
      ]
    },
    {
      id: 'yin-yang-wuxing', title: '阴阳与五行', source: './yin-yang-wuxing.md',
      citations: [
        { id: 'overview-yinyang-wuxingjingji', sourceId: 'classic.wuxing-jingji', quote: '甲丙戊庚壬为纯阳，乙丁己辛癸为纯阴。' },
        { id: 'overview-wuxing-wuxingjingji', sourceId: 'classic.wuxing-jingji', locator: '论干神二', quote: '甲阳木，乙阴木也……丙阳火，丁阴火也……戊阳土，己阴土也……庚阳金，辛阴金也……壬阳水，癸阴水也。' },
        { id: 'overview-wuxing-pairs', sourceId: 'classic.wuxing-jingji', locator: '论干神二' },
      ]
    },
    { id: 'sequence', title: '次序与循环', source: './sequence.md' },
    {
      id: 'relations', title: '天干之间的关系', source: './relations.md',
      citations: [
        { id: 'overview-shishen-rule', sourceId: 'book.qianli-minggao', locator: '比劫禄刃篇', quote: '五行分克我、我克、生我、我生、比和五项，又有阴阳同性及互异之分……' },
        { id: 'overview-wuhe', sourceId: 'classic.wuxing-jingji', locator: '论干神二' },
        { id: 'overview-wuhe-huahua', sourceId: 'classic.wuxing-jingji', locator: '论干神二' },
      ]
    },
    {
      id: 'related', title: '相关概念', source: './related.md',
      citations: [
        { id: 'overview-dizhi', sourceId: 'book.qianli-minggao' },
        { id: 'overview-sizhu', sourceId: 'book.qianli-minggao', quote: '每柱一干一支，四柱共四干四支，即俗所谓八字是也。' },
        { id: 'overview-changsheng', sourceId: 'book.qianli-minggao', locator: '阴阳生死', quote: '干动而不息，支静而有常。以每干流地于十二支之月，而生旺墓绝系焉。阳主聚，以进为进，故主顺。阴主散，以退为进，故主逆。此长生沐浴等项，所以有阳顺阴逆之殊也。' },
        { id: 'overview-shishen-related', sourceId: 'book.qianli-minggao', locator: '比劫禄刃篇', quote: '五行分克我、我克、生我、我生、比和五项，又有阴阳同性及互异之分……' },
      ]
    },
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
