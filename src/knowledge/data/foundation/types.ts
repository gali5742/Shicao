export type YinYang = '阳' | '阴'
export type Wuxing = '木' | '火' | '土' | '金' | '水'
export type Tiangan = '甲' | '乙' | '丙' | '丁' | '戊' | '己' | '庚' | '辛' | '壬' | '癸'
export type Dizhi = '子' | '丑' | '寅' | '卯' | '辰' | '巳' | '午' | '未' | '申' | '酉' | '戌' | '亥'

export type ChangshengState =
  | '长生'
  | '沐浴'
  | '冠带'
  | '临官'
  | '帝旺'
  | '衰'
  | '病'
  | '死'
  | '墓'
  | '绝'
  | '胎'
  | '养'

export type SeasonalState = '旺' | '相' | '休' | '囚' | '死'

export interface BasicSymbolFact<TName extends string> {
  id: string
  name: TName
  order: number
  yinYang: YinYang
  element: Wuxing
}
