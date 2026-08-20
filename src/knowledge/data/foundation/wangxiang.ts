import type { SeasonalState, Wuxing } from './types'
import {
  getControlledElement,
  getControllingElement,
  getGeneratedElement,
  getGeneratingElement,
  WUXING_ORDER
} from './wuxing'

export type FourSeason = '春' | '夏' | '秋' | '冬'

export const FOUR_SEASON_DOMINANT: Readonly<Record<FourSeason, Wuxing>> = {
  春: '木',
  夏: '火',
  秋: '金',
  冬: '水'
}

export const FOUR_SEASON_ORDER = ['春', '夏', '秋', '冬'] as const satisfies readonly FourSeason[]

export function getSeasonalStates(dominant: Wuxing): Readonly<Record<Wuxing, SeasonalState>> {
  const result = {} as Record<Wuxing, SeasonalState>

  for (const element of WUXING_ORDER) {
    if (element === dominant) result[element] = '旺'
    else if (element === getGeneratedElement(dominant)) result[element] = '相'
    else if (element === getGeneratingElement(dominant)) result[element] = '休'
    else if (element === getControllingElement(dominant)) result[element] = '囚'
    else if (element === getControlledElement(dominant)) result[element] = '死'
    else throw new Error(`无法解析 ${dominant} 当令时 ${element} 的旺相休囚死状态`)
  }

  return result
}

export function getFourSeasonalStates() {
  return FOUR_SEASON_ORDER.map((season) => ({
    season,
    dominant: FOUR_SEASON_DOMINANT[season],
    states: getSeasonalStates(FOUR_SEASON_DOMINANT[season])
  }))
}
