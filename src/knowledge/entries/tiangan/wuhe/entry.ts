import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'tiangan.wuhe',
  categoryId: 'tiangan',
  slug: 'wuhe',
  title: '天干五合',
  pinyin: 'tiān gān wǔ hé',
  summary: '甲己、乙庚、丙辛、丁壬、戊癸五组固定相合关系。',
  order: 20,
  aliases: ['五合'],
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'wuhe-basic-1', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论十干合》：“唯阴见阳，阳见阴为合。”' },
      ]
    },
    {
      id: 's2', title: '五组相合', source: './s2.md',
      citations: [
        { id: 'wuhe-s2-1', sourceId: 'classic.wuxing-jingji', note: '卷四《论干神二》' },
      ]
    },
    {
      id: 'he-hua', title: '合与化', source: './he-hua.md',
      citations: [
        { id: 'wuhe-he-hua-1', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论十干化气》：“非辰戌丑未月不化。”' },
        { id: 'wuhe-he-hua-2', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论十干化气》' },
      ]
    }
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
