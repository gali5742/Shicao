import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'dizhi.xianghai',
  categoryId: 'dizhi',
  slug: 'xianghai',
  title: '相害',
  pinyin: 'xiāng hài',
  summary: '十二地支之间六组固定的相害关系。',
  order: 60,
  aliases: ['六害'],
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'xianghai-basic-1', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论六害》：“因六合而生六害。”' },
        { id: 'xianghai-basic-2a', sourceId: 'classic.lihaiji', note: '“六害者，盖冲损合神，故为害也。”例如子与丑合，而未冲丑，因此子与未害；其余各组依此逐一推出' },
        { id: 'xianghai-basic-2b', sourceId: 'classic.wuxing-dayi', note: '卷二《第十二论害》亦以六合受到冲破说明六害，并逐组加以解释' },
      ]
    },
    {
      id: 'pairs', title: '六组相害', source: './pairs.md',
      citations: [
        { id: 'xianghai-pairs-1', sourceId: 'classic.wuxing-dayi', note: '卷二《第十二论害》：“戌与酉，亥与申，子与未，丑与午，寅与巳，卯与辰，是六害也。”' },
      ]
    },
    {
      id: 'nature', title: '关系性质', source: './nature.md',
      citations: [
        { id: 'xianghai-nature-1', sourceId: 'classic.wuxing-dayi', note: '卷二《第十二论害》：“夫相生不必相生，相害不必相害。”' },
      ]
    }
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
