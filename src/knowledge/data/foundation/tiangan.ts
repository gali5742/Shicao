import type { BasicSymbolFact, Tiangan } from './types'

export const TIANGAN_ORDER = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'] as const satisfies readonly Tiangan[]

export const TIANGAN_FACTS: Readonly<Record<Tiangan, BasicSymbolFact<Tiangan>>> = {
  甲: { id: 'tiangan.jia', name: '甲', order: 1, yinYang: '阳', element: '木' },
  乙: { id: 'tiangan.yi', name: '乙', order: 2, yinYang: '阴', element: '木' },
  丙: { id: 'tiangan.bing', name: '丙', order: 3, yinYang: '阳', element: '火' },
  丁: { id: 'tiangan.ding', name: '丁', order: 4, yinYang: '阴', element: '火' },
  戊: { id: 'tiangan.wu', name: '戊', order: 5, yinYang: '阳', element: '土' },
  己: { id: 'tiangan.ji', name: '己', order: 6, yinYang: '阴', element: '土' },
  庚: { id: 'tiangan.geng', name: '庚', order: 7, yinYang: '阳', element: '金' },
  辛: { id: 'tiangan.xin', name: '辛', order: 8, yinYang: '阴', element: '金' },
  壬: { id: 'tiangan.ren', name: '壬', order: 9, yinYang: '阳', element: '水' },
  癸: { id: 'tiangan.gui', name: '癸', order: 10, yinYang: '阴', element: '水' }
}

export function getTianganFact(tiangan: Tiangan) {
  return TIANGAN_FACTS[tiangan]
}
