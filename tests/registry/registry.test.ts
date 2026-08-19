import { describe, expect, it } from 'vitest'
import { getCategories, getEntriesByCategory, getEntry, getKnowledgeGroups } from '@/knowledge/public-api'

describe('knowledge registry', () => {
  it('自动发现知识分组、五行分类、概说、五个分项及旺相休囚死条目', () => {
    expect(getKnowledgeGroups().find((item) => item.id === 'foundation')?.title).toBe('基础概念')
    const category = getCategories().find((item) => item.id === 'wuxing')
    expect(category?.groupId).toBe('foundation')
    expect(category?.overviewEntryId).toBe('wuxing.overview')
    expect(getEntriesByCategory('wuxing').map((item) => item.id)).toEqual([
      'wuxing.overview',
      'wuxing.wood',
      'wuxing.fire',
      'wuxing.earth',
      'wuxing.metal',
      'wuxing.water',
      'wuxing.wangxiang'
    ])
  })

  it('可以通过永久 ID 取得条目', () => {
    expect(getEntry('wuxing.wood')?.title).toBe('木')
    expect(getEntry('wuxing.overview')?.title).toBe('五行')
    expect(getEntry('wuxing.wangxiang')?.title).toBe('旺相休囚死')
  })

  it('五行分项不把“木行”等机械变体当作别名', () => {
    expect(getEntry('wuxing.wood')?.aliases ?? []).toHaveLength(0)
  })

  it('五行分项正文只维护概念内容，生克由结构化关系提供', () => {
    expect(getEntry('wuxing.wood')?.sections.map((section) => section.id)).toEqual([
      'basic', 'characteristics', 'concepts'
    ])
    expect(getEntry('wuxing.wood')?.relations?.map((relation) => relation.type)).toEqual([
      'wuxing.generates', 'wuxing.controls'
    ])
  })

  it('自动发现阴阳分类及其正式概说条目', () => {
    const category = getCategories().find((item) => item.id === 'yinyang')
    expect(category?.overviewEntryId).toBe('yinyang.overview')
    expect(getEntry('yinyang.overview')?.title).toBe('阴阳')
    expect(getEntry('yinyang.overview')?.status).toBe('published')
  })

  it('自动发现完整天干分类、十干及天干五合条目', () => {
    const category = getCategories().find((item) => item.id === 'tiangan')
    expect(category?.overviewEntryId).toBe('tiangan.overview')
    expect(getEntriesByCategory('tiangan').map((item) => item.id)).toEqual([
      'tiangan.overview',
      'tiangan.jia',
      'tiangan.yi',
      'tiangan.bing',
      'tiangan.ding',
      'tiangan.wu',
      'tiangan.ji',
      'tiangan.geng',
      'tiangan.xin',
      'tiangan.ren',
      'tiangan.gui',
      'tiangan.wuhe'
    ])
    expect(getEntry('tiangan.ji')?.sections.map((section) => section.id)).toEqual([
      'basic', 'characteristics', 'imagery', 'seasons', 'changsheng', 'related'
    ])
    expect(getEntry('tiangan.wuhe')?.title).toBe('天干五合')
  })

  it('自动发现地支、干支纪序与十二长生分类', () => {
    expect(getCategories().find((item) => item.id === 'dizhi')?.overviewEntryId).toBe('dizhi.overview')
    expect(getCategories().find((item) => item.id === 'ganzhi')?.overviewEntryId).toBe('ganzhi.sequence')
    expect(getCategories().find((item) => item.id === 'changsheng')?.overviewEntryId).toBe('changsheng.overview')
    expect(getEntry('dizhi.zi')?.title).toBe('子')
    expect(getEntry('ganzhi.sequence')?.title).toBe('干支纪序')
    expect(getEntry('changsheng.overview')?.title).toBe('十二长生')
  })
})
