import { describe, expect, it } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'
import { knowledgeRoutes } from '@/router/knowledgeRoutes'
import { routeForKnowledgeId } from '@/router/knowledgeRouteAdapter'

describe('knowledge navigation', () => {
  it('Knowledge ID 可以由前台适配为 URL', () => {
    const route = routeForKnowledgeId('wuxing.wood')
    expect(route).toEqual({ name: 'knowledge-detail', params: { categorySlug: 'wuxing', entrySlug: 'wood' } })
  })

  it('具体知识页可以作为直接入口匹配', async () => {
    const router = createRouter({ history: createMemoryHistory(), routes: knowledgeRoutes })
    await router.push('/knowledge/wuxing/wood')
    expect(router.currentRoute.value.name).toBe('knowledge-detail')
    expect(router.currentRoute.value.params.entrySlug).toBe('wood')
  })
  it('routes directly to the yin-yang overview entry', () => {
    const route = routeForKnowledgeId('yinyang.overview')
    expect(route).toEqual({ name: 'knowledge-detail', params: { categorySlug: 'yinyang', entrySlug: 'overview' } })
  })

  it('routes directly to a tiangan entry', () => {
    const route = routeForKnowledgeId('tiangan.jia')
    expect(route).toEqual({ name: 'knowledge-detail', params: { categorySlug: 'tiangan', entrySlug: 'jia' } })
  })

})
