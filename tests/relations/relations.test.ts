import { describe, expect, it } from 'vitest'
import { getBacklinks, getRelations } from '@/knowledge/public-api'

describe('knowledge relations', () => {
  it('正向关系由条目声明', () => {
    const relation = getRelations('wuxing.wood').find((item) => item.type.id === 'wuxing.generates')
    expect(relation?.targetId).toBe('wuxing.fire')
  })

  it('反向关系由运行时自动推导', () => {
    const backlink = getBacklinks('wuxing.fire').find((item) => item.type.id === 'wuxing.generatedBy')
    expect(backlink?.targetId).toBe('wuxing.wood')
    expect(backlink?.type.label).toBe('受生于')
  })
})
