import { DIZHI_FACTS, DIZHI_ORDER } from './dizhi'
import { TIANGAN_FACTS, TIANGAN_ORDER } from './tiangan'
import type { Dizhi, Tiangan, Wuxing } from './types'
import {
  getControlledElement,
  getControllingElement,
  getGeneratedElement,
  getGeneratingElement
} from './wuxing'

export function getDizhiByElement(element: Wuxing): readonly Dizhi[] {
  return DIZHI_ORDER.filter((dizhi) => DIZHI_FACTS[dizhi].element === element)
}

export function getTianganByElement(element: Wuxing): readonly Tiangan[] {
  return TIANGAN_ORDER.filter((tiangan) => TIANGAN_FACTS[tiangan].element === element)
}

export interface WuxingRelationTargets<TSymbol extends string> {
  sourceElement: Wuxing
  generates: { element: Wuxing; symbols: readonly TSymbol[] }
  controls: { element: Wuxing; symbols: readonly TSymbol[] }
  generatedBy: { element: Wuxing; symbols: readonly TSymbol[] }
  controlledBy: { element: Wuxing; symbols: readonly TSymbol[] }
}

export function getDizhiWuxingRelations(dizhi: Dizhi): WuxingRelationTargets<Dizhi> {
  const sourceElement = DIZHI_FACTS[dizhi].element
  const generates = getGeneratedElement(sourceElement)
  const controls = getControlledElement(sourceElement)
  const generatedBy = getGeneratingElement(sourceElement)
  const controlledBy = getControllingElement(sourceElement)

  return {
    sourceElement,
    generates: { element: generates, symbols: getDizhiByElement(generates) },
    controls: { element: controls, symbols: getDizhiByElement(controls) },
    generatedBy: { element: generatedBy, symbols: getDizhiByElement(generatedBy) },
    controlledBy: { element: controlledBy, symbols: getDizhiByElement(controlledBy) }
  }
}

export function getTianganWuxingRelations(tiangan: Tiangan): WuxingRelationTargets<Tiangan> {
  const sourceElement = TIANGAN_FACTS[tiangan].element
  const generates = getGeneratedElement(sourceElement)
  const controls = getControlledElement(sourceElement)
  const generatedBy = getGeneratingElement(sourceElement)
  const controlledBy = getControllingElement(sourceElement)

  return {
    sourceElement,
    generates: { element: generates, symbols: getTianganByElement(generates) },
    controls: { element: controls, symbols: getTianganByElement(controls) },
    generatedBy: { element: generatedBy, symbols: getTianganByElement(generatedBy) },
    controlledBy: { element: controlledBy, symbols: getTianganByElement(controlledBy) }
  }
}
