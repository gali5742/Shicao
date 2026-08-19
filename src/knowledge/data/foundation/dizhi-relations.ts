import type { Dizhi, Wuxing } from './types'

export type BinaryDizhiRelationType = '六合' | '六冲' | '相害'

export interface DizhiPair {
  members: readonly [Dizhi, Dizhi]
}

export interface SanheGroup {
  members: readonly [Dizhi, Dizhi, Dizhi]
  element: Wuxing
  roles: readonly ['生', '旺', '库']
}

export interface SanhuiGroup {
  members: readonly [Dizhi, Dizhi, Dizhi]
  direction: '东方' | '南方' | '西方' | '北方'
  element: Wuxing
}

export interface XiangxingEdge {
  from: Dizhi
  to: Dizhi
  kind: '无礼之刑' | '无恩之刑' | '恃势之刑' | '自刑'
}

export const LIUHE: readonly DizhiPair[] = [
  { members: ['子', '丑'] },
  { members: ['寅', '亥'] },
  { members: ['卯', '戌'] },
  { members: ['辰', '酉'] },
  { members: ['巳', '申'] },
  { members: ['午', '未'] }
]

export const LIUCHONG: readonly DizhiPair[] = [
  { members: ['子', '午'] },
  { members: ['丑', '未'] },
  { members: ['寅', '申'] },
  { members: ['卯', '酉'] },
  { members: ['辰', '戌'] },
  { members: ['巳', '亥'] }
]

export const XIANGHAI: readonly DizhiPair[] = [
  { members: ['子', '未'] },
  { members: ['丑', '午'] },
  { members: ['寅', '巳'] },
  { members: ['卯', '辰'] },
  { members: ['申', '亥'] },
  { members: ['酉', '戌'] }
]

export const SANHE: readonly SanheGroup[] = [
  { members: ['申', '子', '辰'], element: '水', roles: ['生', '旺', '库'] },
  { members: ['亥', '卯', '未'], element: '木', roles: ['生', '旺', '库'] },
  { members: ['寅', '午', '戌'], element: '火', roles: ['生', '旺', '库'] },
  { members: ['巳', '酉', '丑'], element: '金', roles: ['生', '旺', '库'] }
]

export const SANHUI: readonly SanhuiGroup[] = [
  { members: ['寅', '卯', '辰'], direction: '东方', element: '木' },
  { members: ['巳', '午', '未'], direction: '南方', element: '火' },
  { members: ['申', '酉', '戌'], direction: '西方', element: '金' },
  { members: ['亥', '子', '丑'], direction: '北方', element: '水' }
]

export const XIANGXING: readonly XiangxingEdge[] = [
  { from: '子', to: '卯', kind: '无礼之刑' },
  { from: '卯', to: '子', kind: '无礼之刑' },
  { from: '寅', to: '巳', kind: '无恩之刑' },
  { from: '巳', to: '申', kind: '无恩之刑' },
  { from: '申', to: '寅', kind: '无恩之刑' },
  { from: '丑', to: '戌', kind: '恃势之刑' },
  { from: '戌', to: '未', kind: '恃势之刑' },
  { from: '未', to: '丑', kind: '恃势之刑' },
  { from: '辰', to: '辰', kind: '自刑' },
  { from: '午', to: '午', kind: '自刑' },
  { from: '酉', to: '酉', kind: '自刑' },
  { from: '亥', to: '亥', kind: '自刑' }
]

const BINARY_RELATIONS: Readonly<Record<BinaryDizhiRelationType, readonly DizhiPair[]>> = {
  六合: LIUHE,
  六冲: LIUCHONG,
  相害: XIANGHAI
}

export function getBinaryRelationPartner(type: BinaryDizhiRelationType, dizhi: Dizhi): Dizhi | undefined {
  const pair = BINARY_RELATIONS[type].find(({ members }) => members.includes(dizhi))
  if (!pair) return undefined
  return pair.members[0] === dizhi ? pair.members[1] : pair.members[0]
}

export function getSanheByBranch(dizhi: Dizhi): SanheGroup | undefined {
  return SANHE.find(({ members }) => members.includes(dizhi))
}

export function getSanhuiByBranch(dizhi: Dizhi): SanhuiGroup | undefined {
  return SANHUI.find(({ members }) => members.includes(dizhi))
}

export function getXiangxingFrom(dizhi: Dizhi): readonly XiangxingEdge[] {
  return XIANGXING.filter((edge) => edge.from === dizhi)
}

export function getXiangxingTo(dizhi: Dizhi): readonly XiangxingEdge[] {
  return XIANGXING.filter((edge) => edge.to === dizhi)
}
