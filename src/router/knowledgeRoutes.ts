import type { RouteRecordRaw } from 'vue-router'
import KnowledgeCategory from '@/views/KnowledgeCategory.vue'
import KnowledgeDetail from '@/views/KnowledgeDetail.vue'
import KnowledgeHome from '@/views/KnowledgeHome.vue'
import NotFound from '@/views/NotFound.vue'

export const knowledgeRoutes: RouteRecordRaw[] = [
  { path: '/', redirect: '/knowledge' },
  { path: '/knowledge', name: 'knowledge-home', component: KnowledgeHome },
  { path: '/knowledge/:categorySlug', name: 'knowledge-category', component: KnowledgeCategory },
  { path: '/knowledge/:categorySlug/:entrySlug', name: 'knowledge-detail', component: KnowledgeDetail },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
]
