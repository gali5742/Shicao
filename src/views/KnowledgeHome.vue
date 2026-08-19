<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import GlobalKnowledgeSearch from '@/components/layout/GlobalKnowledgeSearch.vue'
import { getCategories } from '@/knowledge/public-api'

const categories = getCategories()
const featuredCategories = computed(() => categories.filter((category) => category.featured).slice(0, 4))
</script>

<template>
  <div class="home-page">
    <section class="home-hero">
      <h1>欢迎使用 蓍草</h1>
      <p class="home-hero__intro">从基础概念出发，整理传统术数中的知识体系及其相互关系。</p>
      <GlobalKnowledgeSearch variant="hero" />
    </section>

    <section v-if="featuredCategories.length" class="home-section">
      <div class="home-section__heading">
        <h2>快速入口</h2>
      </div>

      <div class="quick-entry-grid">
        <RouterLink
          v-for="category in featuredCategories"
          :key="category.id"
          :to="{ name: 'knowledge-category', params: { categorySlug: category.slug } }"
          class="quick-entry"
        >
          <h3>{{ category.title }}</h3>
          <p v-if="category.featuredSummary" class="quick-entry__terms">{{ category.featuredSummary }}</p>
          <p v-if="category.description" class="quick-entry__description">{{ category.description }}</p>
        </RouterLink>
      </div>
    </section>

  </div>
</template>
