import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'wuxing.overview',
  categoryId: 'wuxing',
  slug: 'overview',
  title: '五行',
  pinyin: 'wǔ xíng',
  summary: '五行以木、火、土、金、水概括事物的性质、变化倾向及其相互关系。',
  order: 0,
  sections: [
    {
      id: 'basic',
      title: '基本概念',
      source: './basic.md',
      citations: [
        {
          id: 'xing-meaning',
          sourceId: 'classic.chunqiu-fanlu-wuxing-xiangsheng'
        }
      ]
    },
    {
      id: 'characteristics',
      title: '基本性质',
      source: './characteristics.md',
      citations: [
        {
          id: 'hongfan-properties',
          sourceId: 'classic.shangshu-hongfan'
        }
      ]
    },
    {
      id: 'generating',
      title: '相生',
      source: './generating.md',
      citations: [
        {
          id: 'generating-order',
          sourceId: 'classic.chunqiu-fanlu-wuxing-zhiyi'
        }
      ]
    },
    {
      id: 'controlling',
      title: '相克',
      source: './controlling.md',
      citations: [
        {
          id: 'controlling-order',
          sourceId: 'classic.huainanzi-dixingxun',
          quote: '木胜土，土胜水，水胜火，火胜金，金胜木。',
          note: '此处以“胜”表述五行之间的制约关系。'
        }
      ]
    },
    {
      id: 'yinyang',
      title: '五行与阴阳',
      source: './yinyang.md',
      citations: [
        {
          id: 'yinyang-integration',
          sourceId: 'classic.chunqiu-fanlu-wuxing-xiangsheng'
        },
        {
          id: 'stems-yinyang',
          sourceId: 'classic.sanming-tonghui-volume2',
          quote: '甲属阳为兄，乙属阴为妹……丙属阳为兄，丁属阴为妹。'
        }
      ]
    },
    {
      id: 'related',
      title: '相关概念',
      source: './related.md'
    }
  ],
  status: 'published'
} satisfies KnowledgeEntry
