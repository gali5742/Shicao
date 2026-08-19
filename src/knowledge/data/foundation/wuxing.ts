import type { Wuxing } from './types'

export const WUXING_ORDER = ['木', '火', '土', '金', '水'] as const satisfies readonly Wuxing[]

export const WUXING_GENERATES: Readonly<Record<Wuxing, Wuxing>> = {
  木: '火',
  火: '土',
  土: '金',
  金: '水',
  水: '木'
}

export const WUXING_CONTROLS: Readonly<Record<Wuxing, Wuxing>> = {
  木: '土',
  土: '水',
  水: '火',
  火: '金',
  金: '木'
}

function findSource(target: Wuxing, relation: Readonly<Record<Wuxing, Wuxing>>): Wuxing {
  const source = WUXING_ORDER.find((element) => relation[element] === target)
  if (!source) throw new Error(`无法解析五行反向关系：${target}`)
  return source
}

export function getGeneratedElement(element: Wuxing): Wuxing {
  return WUXING_GENERATES[element]
}

export function getGeneratingElement(element: Wuxing): Wuxing {
  return findSource(element, WUXING_GENERATES)
}

export function getControlledElement(element: Wuxing): Wuxing {
  return WUXING_CONTROLS[element]
}

export function getControllingElement(element: Wuxing): Wuxing {
  return findSource(element, WUXING_CONTROLS)
}
