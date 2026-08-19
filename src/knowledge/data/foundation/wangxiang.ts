import type { SeasonalState, Wuxing } from './types'
import {
  getControlledElement,
  getControllingElement,
  getGeneratedElement,
  getGeneratingElement,
  WUXING_ORDER
} from './wuxing'

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
