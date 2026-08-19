<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getBacklinks, getCategories, getEntriesByCategory, getEntry, getRelations } from '@/knowledge/public-api'
import KnowledgeArticle from '@/components/knowledge/KnowledgeArticle.vue'

const route = useRoute()
const categorySlug = computed(() => String(route.params.categorySlug ?? ''))
const entrySlug = computed(() => String(route.params.entrySlug ?? ''))
const category = computed(() => getCategories().find((item) => item.slug === categorySlug.value))
const entrySummary = computed(() => category.value
  ? getEntriesByCategory(category.value.id).find((item) => item.slug === entrySlug.value)
  : undefined)
const entry = computed(() => entrySummary.value ? getEntry(entrySummary.value.id) : undefined)
const relations = computed(() => entry.value ? getRelations(entry.value.id) : [])
const backlinks = computed(() => entry.value ? getBacklinks(entry.value.id) : [])
</script>

<template>
  <div class="page-stack">
    <RouterLink v-if="category" :to="{ name: 'knowledge-category', params: { categorySlug: category.slug } }" class="back-link">← 返回{{ category.title }}</RouterLink>
    <KnowledgeArticle v-if="entry" :entry="entry" :relations="relations" :backlinks="backlinks" />
    <section v-else class="panel">
      <h1>条目不存在</h1>
      <p>没有找到对应的知识条目。</p>
    </section>
  </div>
</template>
