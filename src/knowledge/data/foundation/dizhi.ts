import type { BasicSymbolFact, Dizhi } from './types'

export const DIZHI_ORDER = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'] as const satisfies readonly Dizhi[]

export const DIZHI_FACTS: Readonly<Record<Dizhi, BasicSymbolFact<Dizhi>>> = {
  子: { id: 'dizhi.zi', name: '子', order: 1, yinYang: '阳', element: '水' },
  丑: { id: 'dizhi.chou', name: '丑', order: 2, yinYang: '阴', element: '土' },
  寅: { id: 'dizhi.yin', name: '寅', order: 3, yinYang: '阳', element: '木' },
  卯: { id: 'dizhi.mao', name: '卯', order: 4, yinYang: '阴', element: '木' },
  辰: { id: 'dizhi.chen', name: '辰', order: 5, yinYang: '阳', element: '土' },
  巳: { id: 'dizhi.si', name: '巳', order: 6, yinYang: '阴', element: '火' },
  午: { id: 'dizhi.wu', name: '午', order: 7, yinYang: '阳', element: '火' },
  未: { id: 'dizhi.wei', name: '未', order: 8, yinYang: '阴', element: '土' },
  申: { id: 'dizhi.shen', name: '申', order: 9, yinYang: '阳', element: '金' },
  酉: { id: 'dizhi.you', name: '酉', order: 10, yinYang: '阴', element: '金' },
  戌: { id: 'dizhi.xu', name: '戌', order: 11, yinYang: '阳', element: '土' },
  亥: { id: 'dizhi.hai', name: '亥', order: 12, yinYang: '阴', element: '水' }
}

export function getDizhiFact(dizhi: Dizhi) {
  return DIZHI_FACTS[dizhi]
}
