import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'dizhi.sanhe',
  categoryId: 'dizhi',
  slug: 'sanhe',
  title: '三合',
  pinyin: 'sān hé',
  summary: '十二地支四组以生、旺、墓（库）三位组成的固定组合。',
  order: 70,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'sanhe-basic-1', sourceId: 'classic.sanming-tonghui-volume2', note: '《论支元三合》' },
      ]
    },
    {
      id: 'pairs', title: '四组三合', source: './pairs.md'
    },
    {
      id: 'sheng-wang-ku', title: '生、旺、库', source: './sheng-wang-ku.md',
      citations: [
        { id: 'sanhe-swk-1', sourceId: 'classic.sanming-tonghui-volume2', note: '《论支元三合》' },
        { id: 'sanhe-swk-2', sourceId: 'classic.xiejibianfangshu', note: '“论十干则分阴阳，论五行则阳统阴。”' },
      ]
    },
    {
      id: 'nature', title: '关系性质', source: './nature.md'
    }
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
