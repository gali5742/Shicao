<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getCategories, getEntriesByCategory, getEntry } from '@/knowledge/public-api'
import { routeForKnowledgeId } from '@/router/knowledgeRouteAdapter'

const route = useRoute()
const categorySlug = computed(() => String(route.params.categorySlug ?? ''))
const category = computed(() => getCategories().find((item) => item.slug === categorySlug.value))
const allEntries = computed(() => category.value ? getEntriesByCategory(category.value.id) : [])
const overview = computed(() => category.value?.overviewEntryId ? getEntry(category.value.overviewEntryId) : undefined)
const entries = computed(() => allEntries.value.filter((entry) => entry.id !== category.value?.overviewEntryId))
</script>

<template>
  <div class="page-stack">
    <RouterLink to="/knowledge" class="back-link">← 返回蓍草</RouterLink>
    <section v-if="category" class="panel category-panel">
      <header class="category-header">
        <h1>{{ category.title }}</h1>
        <p>{{ category.description }}</p>
      </header>

      <RouterLink
        v-if="overview && routeForKnowledgeId(overview.id)"
        :to="routeForKnowledgeId(overview.id)!"
        class="overview-card"
      >
        <div>
          <h2>{{ overview.title }}概说</h2>
          <p>{{ overview.summary }}</p>
        </div>
        <span>阅读全文 →</span>
      </RouterLink>

      <div class="entry-grid">
        <RouterLink v-for="entry in entries" :key="entry.id" :to="routeForKnowledgeId(entry.id)!" class="entry-card">
          <h2>{{ entry.title }}</h2>
          <p>{{ entry.summary }}</p>
        </RouterLink>
      </div>
    </section>
    <section v-else class="panel">
      <h1>分类不存在</h1>
      <p>没有找到对应的知识分类。</p>
    </section>
  </div>
</template>
