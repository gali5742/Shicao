import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'dizhi.sanhui',
  categoryId: 'dizhi',
  slug: 'sanhui',
  title: '三会（方合）',
  pinyin: 'sān huì fāng hé',
  summary: '十二地支四组依方位形成的三支组合关系。',
  order: 80,
  aliases: ['三会', '方合'],
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'sanhui-basic-1', sourceId: 'classic.sanming-tonghui-volume2', note: '《论支元三合》相关方合材料' },
      ]
    },
    {
      id: 'pairs', title: '四组三会（方合）', source: './pairs.md'
    },
    {
      id: 'nature', title: '关系性质', source: './nature.md'
    }
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
