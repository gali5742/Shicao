import { createRouter, createWebHistory } from 'vue-router'
import { knowledgeRoutes } from './knowledgeRoutes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: knowledgeRoutes,
  scrollBehavior: () => ({ top: 0 })
})
