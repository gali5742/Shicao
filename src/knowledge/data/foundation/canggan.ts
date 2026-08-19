import type { Dizhi, Tiangan } from './types'

export const CANGGAN: Readonly<Record<Dizhi, readonly Tiangan[]>> = {
  子: ['癸'],
  丑: ['癸', '辛', '己'],
  寅: ['甲', '丙', '戊'],
  卯: ['乙'],
  辰: ['乙', '戊', '癸'],
  巳: ['庚', '丙', '戊'],
  午: ['丁', '己'],
  未: ['乙', '己', '丁'],
  申: ['庚', '壬', '戊'],
  酉: ['辛'],
  戌: ['辛', '丁', '戊'],
  亥: ['壬', '甲']
}

export function getCanggan(dizhi: Dizhi): readonly Tiangan[] {
  return CANGGAN[dizhi]
}
