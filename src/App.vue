<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import GlobalKnowledgeSearch from '@/components/layout/GlobalKnowledgeSearch.vue'
import KnowledgeSidebar from '@/components/layout/KnowledgeSidebar.vue'
import shicaoBrand from '@/assets/shicao-brand.png'
</script>

<template>
  <div class="app-shell">
    <header class="site-header">
      <div class="site-brand-lockup">
        <RouterLink class="site-brand" to="/knowledge" aria-label="蓍草首页">
          <img class="site-brand__image" :src="shicaoBrand" alt="蓍草" />
        </RouterLink>
        <span class="site-brand-subtitle">传统术数知识库</span>
      </div>
      <GlobalKnowledgeSearch variant="header" />
    </header>

    <div class="workspace">
      <KnowledgeSidebar />
      <main class="site-main">
        <div class="site-main__content">
          <RouterView />
          <footer class="site-footer">蓍草 · 传统术数知识库</footer>
        </div>
      </main>
    </div>
  </div>
</template>
