import { DIZHI_ORDER } from './dizhi'
import { TIANGAN_ORDER } from './tiangan'
import type { Dizhi, Tiangan } from './types'

export interface GanzhiPair {
  index: number
  name: string
  tiangan: Tiangan
  dizhi: Dizhi
}

export interface Xun {
  index: number
  name: string
  start: GanzhiPair
  entries: readonly GanzhiPair[]
}

const SEXAGENARY_CYCLE: readonly GanzhiPair[] = Array.from({ length: 60 }, (_, index) => {
  const tiangan = TIANGAN_ORDER[index % TIANGAN_ORDER.length]
  const dizhi = DIZHI_ORDER[index % DIZHI_ORDER.length]
  return { index: index + 1, name: `${tiangan}${dizhi}`, tiangan, dizhi }
})

const XUNS: readonly Xun[] = Array.from({ length: 6 }, (_, index) => {
  const entries = SEXAGENARY_CYCLE.slice(index * 10, index * 10 + 10)
  const start = entries[0]
  return {
    index: index + 1,
    name: `${start.name}旬`,
    start,
    entries
  }
})

export function getSexagenaryCycle(): readonly GanzhiPair[] {
  return SEXAGENARY_CYCLE
}

export function getSexagenaryByBranch(dizhi: Dizhi): readonly GanzhiPair[] {
  return SEXAGENARY_CYCLE.filter((item) => item.dizhi === dizhi)
}

export function getSexagenaryByStem(tiangan: Tiangan): readonly GanzhiPair[] {
  return SEXAGENARY_CYCLE.filter((item) => item.tiangan === tiangan)
}

export function getXuns(): readonly Xun[] {
  return XUNS
}

export function getXun(ganzhi: string): Xun | undefined {
  return XUNS.find((xun) => xun.entries.some((item) => item.name === ganzhi))
}
