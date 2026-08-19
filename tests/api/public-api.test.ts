import { describe, expect, it } from 'vitest'
import {
  findCitationMarkersAfterPunctuation,
  formatKnowledgeCitation,
  getEntry,
  getSource,
  listCitationsInMarkerOrder,
  searchKnowledge,
  transformCitationMarkers,
  transformKnowledgeReferences
} from '@/knowledge/public-api'

describe('public api', () => {
  it('外部可以只凭 Knowledge ID 获取条目', () => {
    expect(getEntry('wuxing.water')?.title).toBe('水')
    expect(getEntry('wuxing.wangxiang')?.title).toBe('旺相休囚死')
    expect(getEntry('dizhi.zi')?.title).toBe('子')
    expect(getEntry('ganzhi.sequence')?.title).toBe('干支纪序')
    expect(getEntry('changsheng.overview')?.title).toBe('十二长生')
  })

  it('最小搜索覆盖标题与摘要', () => {
    expect(searchKnowledge('木').some((item) => item.id === 'wuxing.wood')).toBe(true)
    expect(searchKnowledge('性质').some((item) => item.id === 'wuxing.overview')).toBe(true)
  })

  it('知识引用转换不绑定具体 URL', () => {
    const result = transformKnowledgeReferences('见[[wuxing.wood|木]]', (id) => `knowledge:${id}`)
    expect(result).toBe('见[木](knowledge:wuxing.wood)')
  })

  it('脚注根据正文出现顺序自动编号，而不是在 Markdown 中维护数字', () => {
    const citations = [
      { id: 'second', sourceId: 'source.b' },
      { id: 'first', sourceId: 'source.a' }
    ]
    const content = '甲[[cite:first]]乙[[cite:second]]丙[[cite:first]]'
    expect(listCitationsInMarkerOrder(content, citations).map((item) => item.id)).toEqual(['first', 'second'])
    expect(transformCitationMarkers(content, citations, ({ number }) => `[${number}]`)).toBe('甲[1]乙[2]丙[1]')
  })

  it('可以识别位于标点之后的脚注标记', () => {
    expect(findCitationMarkersAfterPunctuation('正文。[[cite:bad]]')).toEqual([{ id: 'bad', punctuation: '。' }])
    expect(findCitationMarkersAfterPunctuation('正文[[cite:good]]。')).toEqual([])
  })

  it('正文已引用原文时，参考资料只列出处', () => {
    const source = getSource('classic.shangshu-hongfan')!
    expect(formatKnowledgeCitation(source, { sourceId: source.id })).toBe('《尚书·洪范》。')
    expect(formatKnowledgeCitation(source, { sourceId: source.id, locator: '五行' })).toBe('《尚书·洪范》，五行。')
  })

  it('参考资料默认采用“出处：原文”', () => {
    const source = getSource('classic.qiongtong-baojian')!
    expect(formatKnowledgeCitation(source, {
      sourceId: source.id,
      quote: '木为少阳，性腾上而无所止。'
    })).toBe('《穷通宝鉴》：“木为少阳，性腾上而无所止。”')
  })

  it('必要的短注不用括号替代原文', () => {
    const source = getSource('classic.huainanzi-dixingxun')!
    expect(formatKnowledgeCitation(source, {
      sourceId: source.id,
      quote: '木胜土。',
      note: '此处以“胜”表述制约关系。'
    })).toBe('《淮南子·墬形训》：“木胜土。”；此处以“胜”表述制约关系。')
  })

  it('古籍卷次显示在书名号之外', () => {
    const source = getSource('classic.sanming-tonghui-volume2')!
    expect(formatKnowledgeCitation(source, { sourceId: source.id })).toBe('《三命通会》卷二。')
  })
})
