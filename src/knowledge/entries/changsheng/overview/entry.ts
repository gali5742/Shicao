import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'changsheng.overview',
  categoryId: 'changsheng',
  slug: 'overview',
  title: '十二长生',
  pinyin: 'shí èr cháng shēng',
  summary: '十二种状态构成的天干地支配位循环。',
  order: 0,
  aliases: ['五行寄生十二宫'],
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'cs-basic-1', sourceId: 'classic.sanming-tonghui-volume2', note: '《论五行旺相休囚死并寄生十二宫》' },
      ]
    },
    {
      id: 'states', title: '十二种状态', source: './states.md',
      citations: [
        { id: 'cs-states-1', sourceId: 'classic.sanming-tonghui-volume2', note: '《论五行旺相休囚死并寄生十二宫》引《三命提要》。' },
      ]
    },
    {
      id: 'wuxing', title: '五行与十二长生', source: './wuxing.md',
      citations: [
        { id: 'cs-wuxing-1', sourceId: 'classic.xiejibianfangshu', note: '卷一《考原》' },
      ]
    },
    {
      id: 'direction', title: '阳顺阴逆', source: './direction.md',
      citations: [
        { id: 'cs-dir-1', sourceId: 'classic.xiejibianfangshu', note: '卷一《考原》；《三命通会》卷二《论天干阴阳生死》亦可互证。' },
      ]
    },
    {
      id: 'table', title: '十干十二长生', source: './table.md',
      citations: [
        { id: 'cs-table-1', sourceId: 'book.qianli-minggao', note: '《阴阳生死》' },
        { id: 'cs-table-2', sourceId: 'classic.sanming-tonghui-volume2', note: '《论天干阴阳生死》' },
      ]
    },
    {
      id: 'earth', title: '土的配位', source: './earth.md',
      citations: [
        { id: 'cs-earth-1', sourceId: 'classic.sanming-tonghui-volume2', note: '《论天干阴阳生死》：戊土生于寅而死于酉；己土生于酉而死于寅。' },
        { id: 'cs-earth-2', sourceId: 'classic.wuxing-jingji', note: '卷七“土长生”条：“既曰水土俱生申，又曰土生巳，何也？”' },
        { id: 'cs-earth-3', sourceId: 'classic.xiejibianfangshu', note: '卷一《考原》' },
      ]
    },
    {
      id: 'related', title: '相关概念', source: './related.md'
    }
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
