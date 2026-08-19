import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'wuxing.wangxiang',
  categoryId: 'wuxing',
  slug: 'wangxiang',
  title: '旺相休囚死',
  pinyin: 'wàng xiàng xiū qiú sǐ',
  summary: '五行随四时时令变化而形成的旺、相、休、囚、死五种状态。',
  order: 60,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'wang-basic-1', sourceId: 'classic.wuxing-jingji', note: '卷七《五行旺相囚休死例》' },
      ]
    },
    {
      id: 'states', title: '五种状态', source: './states.md',
      citations: [
        { id: 'wang-states-1', sourceId: 'classic.wuxing-dayi', note: '卷二《第三论四时休王》：“子方壮，能助治事。”' },
        { id: 'wang-states-2', sourceId: 'classic.wuxing-dayi', note: '卷二《第三论四时休王》：“能囚仇敌。”' },
      ]
    },
    {
      id: 'seasons', title: '四时状态', source: './seasons.md'
    },
    {
      id: 'earth', title: '土的时令', source: './earth.md',
      citations: [
        { id: 'wang-earth-1', sourceId: 'classic.wuxing-dayi', note: '卷二《第三论四时休王》' },
        { id: 'wang-earth-2', sourceId: 'classic.baihu-tong', note: '卷三《五行》：“土王四季，各十八日。”' },
        { id: 'wang-earth-3', sourceId: 'classic.wuxing-jingji', note: '卷七《五行旺相囚休死例》' },
      ]
    },
    {
      id: 'ganzhi', title: '与天干地支', source: './ganzhi.md',
      citations: [
        { id: 'wang-ganzhi-1', sourceId: 'classic.wuxing-dayi', note: '卷二《第三论四时休王》另列“支干休王”。' },
      ]
    },
    {
      id: 'related', title: '相关概念', source: './related.md'
    }
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
