import type { KnowledgeEntry } from '../../../schema'

export default {
  id: 'dizhi.xiangxing',
  categoryId: 'dizhi',
  slug: 'xiangxing',
  title: '相刑',
  pinyin: 'xiāng xíng',
  summary: '十二地支中的三刑与自刑结构。',
  order: 50,
  aliases: ['三刑'],
  sections: [
    {
      id: 'basic', title: '基本概念', source: './basic.md',
      citations: [
        { id: 'xiangxing-basic-1', sourceId: 'classic.wuxing-dayi', note: '卷二《第十一论刑》载十二支相刑：子、卯互刑；丑、戌、未循环相刑；寅、巳、申循环相刑；辰、午、酉、亥各自刑' },
        { id: 'xiangxing-basic-2', sourceId: 'classic.wuxing-dayi', note: '关于相刑配位的形成，文献中存在不同解释： - 《五行大义》卷二《第十一论刑》引翼奉之说，以“**木落归本**”“**水流向末**”“**金刚火强，各还其乡**”等说明四组三合之位分别刑于相应方位，并由此推出子卯、寅巳申、丑戌未及辰午酉亥自刑的完整关系。 - 《祛疑说·三刑是极数》以十为极数，按不同方向数至十，分别解释子卯、寅巳申、丑戌未三类相刑，并以“**天道恶盈，满则覆也**”说明十数成刑之义。 - 《三命通会》卷二《论三刑》以申子辰配寅卯辰、寅午戌配巳午未、巳酉丑配申酉戌、亥卯未配亥子丑，逐位推出各组相刑，并以“**合中生刑**”解释这一配位；同篇亦收录十数为刑之说' },
      ]
    },
    {
      id: 's2', title: '相刑结构', source: './s2.md',
      citations: [
        { id: 'xiangxing-s2-1', sourceId: 'classic.wuxing-dayi', note: '卷二《第十一论刑》：“子刑在卯，卯刑在子……”并列丑、戌、未，寅、巳、申的循环相刑及辰、午、酉、亥自刑' },
        { id: 'xiangxing-s2-2', sourceId: 'classic.wuxing-jingji', note: '卷二十五《论三刑》：“刑有四种：一曰无礼刑，子刑卯，卯复刑子……”；“二曰无恩刑，寅刑巳，巳刑申，申刑寅，是也……”；“三曰恃势刑，丑刑戌，戌刑未，未刑丑……”；“四曰自刑。自刑，辰、午、酉、亥，是也。”' },
      ]
    },
    {
      id: 's3', title: '自刑', source: './s3.md',
      citations: [
        { id: 'xiangxing-s3-1', sourceId: 'classic.wuxing-dayi', note: '卷二《第十一论刑》：“辰午酉亥各自刑。”' },
        { id: 'xiangxing-s3-2', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论三刑》' },
      ]
    },
    {
      id: 'nature', title: '关系性质', source: './nature.md',
      citations: [
        { id: 'xiangxing-nature-1', sourceId: 'classic.sanming-tonghui-volume2', note: '卷二《论三刑》：“凡见刑不可便以凶论。”' },
      ]
    }
  ],
  relations: [],
  status: 'review'
} satisfies KnowledgeEntry
