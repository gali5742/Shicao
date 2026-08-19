import { DIZHI_ORDER } from './dizhi'
import { TIANGAN_FACTS, TIANGAN_ORDER } from './tiangan'
import type { ChangshengState, Dizhi, Tiangan } from './types'

export const CHANGSHENG_STATES = [
  '长生', '沐浴', '冠带', '临官', '帝旺', '衰', '病', '死', '墓', '绝', '胎', '养'
] as const satisfies readonly ChangshengState[]

export const CHANGSHENG_START: Readonly<Record<Tiangan, Dizhi>> = {
  甲: '亥',
  乙: '午',
  丙: '寅',
  丁: '酉',
  戊: '寅',
  己: '酉',
  庚: '巳',
  辛: '子',
  壬: '申',
  癸: '卯'
}

export function getChangshengDirection(tiangan: Tiangan): '顺' | '逆' {
  return TIANGAN_FACTS[tiangan].yinYang === '阳' ? '顺' : '逆'
}

export function getChangshengState(tiangan: Tiangan, dizhi: Dizhi): ChangshengState {
  const startIndex = DIZHI_ORDER.indexOf(CHANGSHENG_START[tiangan])
  const branchIndex = DIZHI_ORDER.indexOf(dizhi)
  const direction = getChangshengDirection(tiangan)
  const offset = direction === '顺'
    ? (branchIndex - startIndex + 12) % 12
    : (startIndex - branchIndex + 12) % 12
  return CHANGSHENG_STATES[offset]
}

export function getChangshengByStem(tiangan: Tiangan) {
  return DIZHI_ORDER.map((dizhi) => ({
    dizhi,
    state: getChangshengState(tiangan, dizhi)
  }))
}

export function getChangshengByBranch(dizhi: Dizhi) {
  return TIANGAN_ORDER.map((tiangan) => ({
    tiangan,
    state: getChangshengState(tiangan, dizhi)
  }))
}

export function getChangshengTable() {
  return TIANGAN_ORDER.map((tiangan) => ({
    tiangan,
    states: getChangshengByStem(tiangan)
  }))
}
