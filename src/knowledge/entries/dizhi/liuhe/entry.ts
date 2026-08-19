import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'dizhi.liuhe',
  categoryId: 'dizhi',
  slug: 'liuhe',
  title: '六合',
  pinyin: 'liù hé',
  summary: '十二地支之间六组固定的二支相合关系。',
  order: 30,
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'liuhe-basic-1', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论支元六合》：“夫合者，和也……乃阴阳相和，其气自合……是以一阴一阳和而谓之合。”' },
        { id: 'liuhe-basic-2', sourceId: 'classic.wuxing-dayi', note: '卷二《第八论合》以“**支合者，日月行次之所合也**”解释地支六合，并依十二月日月所会与斗建的位置逐月说明寅亥、卯戌、辰酉、巳申、午未、子丑之合。《三命通会》卷二《论支元六合》又保存两层解释：一从阴阳气数说明六组配对，以子丑、午未成三数，其余成九数；一从日月十二辰交会说明具体配对，并以“得日月会同之数”概括' },
      ]
    },
    {
      id: 'pairs', title: '六组六合', source: './pairs.md',
      citations: [
        { id: 'liuhe-pairs-1', sourceId: 'classic.wuxing-jingji', note: '卷六《论支神》：“十二支合：子丑、寅亥、卯戌、辰酉、午未、巳申。”' },
      ]
    },
    {
      id: 'nature', title: '关系性质', source: './nature.md',
      citations: [
        { id: 'liuhe-nature-1', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论支元三合》：“大率合吉神则吉，合凶神则凶。”' },
      ]
    }
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
