import { describe, expect, it } from 'vitest'
import {
  CANGGAN,
  CHANGSHENG_STATES,
  DIZHI_ORDER,
  getBinaryRelationPartner,
  getCanggan,
  getDizhiByElement,
  getDizhiWuxingRelations,
  getFourSeasonalStates,
  getTianganByElement,
  getChangshengByBranch,
  getChangshengByStem,
  getChangshengState,
  getSanhuiByBranch,
  getSanheByBranch,
  getSeasonalStates,
  getSexagenaryByBranch,
  getSexagenaryByStem,
  getSexagenaryCycle,
  getXiangxingFrom,
  getXuns,
  SANHE,
  SANHUI,
  TIANGAN_ORDER,
  XIANGXING
} from '@/knowledge/public-api'

const unique = <T>(values: readonly T[]) => new Set(values).size === values.length

describe('基础事实核心', () => {
  it('六十甲子由十干十二支同步循环生成，数量与首尾正确且无重复', () => {
    const cycle = getSexagenaryCycle()
    expect(cycle).toHaveLength(60)
    expect(cycle[0].name).toBe('甲子')
    expect(cycle[59].name).toBe('癸亥')
    expect(unique(cycle.map((item) => item.name))).toBe(true)
    expect(getSexagenaryByBranch('子').map((item) => item.name)).toEqual(['甲子', '丙子', '戊子', '庚子', '壬子'])
    expect(getSexagenaryByStem('甲')).toHaveLength(6)
  })

  it('六十甲子自动分为六旬，每旬十组', () => {
    const xuns = getXuns()
    expect(xuns.map((item) => item.name)).toEqual(['甲子旬', '甲戌旬', '甲申旬', '甲午旬', '甲辰旬', '甲寅旬'])
    expect(xuns.every((item) => item.entries.length === 10)).toBe(true)
  })

  it('十二支藏干只有一个事实来源，并可按支读取', () => {
    expect(Object.keys(CANGGAN)).toHaveLength(12)
    expect(getCanggan('子')).toEqual(['癸'])
    expect(getCanggan('辰')).toEqual(['乙', '戊', '癸'])
    expect(getCanggan('亥')).toEqual(['壬', '甲'])
  })

  it('十干十二长生由起点与阴阳顺逆统一推导', () => {
    expect(getChangshengState('甲', '亥')).toBe('长生')
    expect(getChangshengState('甲', '午')).toBe('死')
    expect(getChangshengState('乙', '午')).toBe('长生')
    expect(getChangshengState('乙', '卯')).toBe('临官')
    expect(getChangshengState('丁', '酉')).toBe('长生')
    expect(getChangshengState('癸', '卯')).toBe('长生')
  })

  it('每个天干的一行都覆盖十二状态且各出现一次', () => {
    for (const tiangan of TIANGAN_ORDER) {
      const row = getChangshengByStem(tiangan)
      expect(row).toHaveLength(12)
      expect(new Set(row.map((item) => item.state))).toEqual(new Set(CHANGSHENG_STATES))
    }
  })

  it('每个地支的一列都包含十天干', () => {
    for (const dizhi of DIZHI_ORDER) {
      const column = getChangshengByBranch(dizhi)
      expect(column).toHaveLength(10)
      expect(column.map((item) => item.tiangan)).toEqual([...TIANGAN_ORDER])
    }
  })

  it('六合、六冲、相害可从任一成员反向取得唯一对象', () => {
    expect(getBinaryRelationPartner('六合', '子')).toBe('丑')
    expect(getBinaryRelationPartner('六合', '丑')).toBe('子')
    expect(getBinaryRelationPartner('六冲', '寅')).toBe('申')
    expect(getBinaryRelationPartner('相害', '亥')).toBe('申')
  })

  it('三合与三会保留完整三支组合，而不是拆成二元关系', () => {
    expect(SANHE).toHaveLength(4)
    expect(SANHUI).toHaveLength(4)
    expect(getSanheByBranch('子')).toEqual({ members: ['申', '子', '辰'], element: '水', roles: ['生', '旺', '库'] })
    expect(getSanhuiByBranch('子')).toEqual({ members: ['亥', '子', '丑'], direction: '北方', element: '水' })
    expect(DIZHI_ORDER.every((dizhi) => Boolean(getSanheByBranch(dizhi)))).toBe(true)
    expect(DIZHI_ORDER.every((dizhi) => Boolean(getSanhuiByBranch(dizhi)))).toBe(true)
  })

  it('相刑保留方向与自刑', () => {
    expect(XIANGXING).toHaveLength(12)
    expect(getXiangxingFrom('寅')).toEqual([{ from: '寅', to: '巳', kind: '无恩之刑' }])
    expect(getXiangxingFrom('巳')).toEqual([{ from: '巳', to: '申', kind: '无恩之刑' }])
    expect(getXiangxingFrom('申')).toEqual([{ from: '申', to: '寅', kind: '无恩之刑' }])
    expect(getXiangxingFrom('辰')).toEqual([{ from: '辰', to: '辰', kind: '自刑' }])
  })

  it('旺相休囚死由当令五行与生克关系计算', () => {
    expect(getSeasonalStates('木')).toEqual({ 木: '旺', 火: '相', 土: '死', 金: '囚', 水: '休' })
    expect(getSeasonalStates('土')).toEqual({ 木: '囚', 火: '休', 土: '旺', 金: '相', 水: '死' })
  })

  it('天干地支的五行分组与生克对象由基础属性和五行规则派生', () => {
    expect(getDizhiByElement('土')).toEqual(['丑', '辰', '未', '戌'])
    expect(getTianganByElement('火')).toEqual(['丙', '丁'])
    expect(getDizhiWuxingRelations('子')).toEqual({
      sourceElement: '水',
      generates: { element: '木', symbols: ['寅', '卯'] },
      controls: { element: '火', symbols: ['巳', '午'] },
      generatedBy: { element: '金', symbols: ['申', '酉'] },
      controlledBy: { element: '土', symbols: ['丑', '辰', '未', '戌'] }
    })
  })

  it('春夏秋冬的旺相休囚死表只保存时令当令五行，其余状态统一计算', () => {
    const rows = getFourSeasonalStates()
    expect(rows.map(({ season, dominant }) => [season, dominant])).toEqual([
      ['春', '木'], ['夏', '火'], ['秋', '金'], ['冬', '水']
    ])
    expect(rows[0].states).toEqual({ 木: '旺', 火: '相', 土: '死', 金: '囚', 水: '休' })
  })

})
