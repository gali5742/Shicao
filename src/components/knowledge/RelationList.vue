<script setup lang="ts">
import type { ResolvedKnowledgeRelation } from '@/knowledge/public-api'
import KnowledgeLink from './KnowledgeLink.vue'

defineProps<{
  relations: ResolvedKnowledgeRelation[]
  backlinks: ResolvedKnowledgeRelation[]
}>()
</script>

<template>
  <section v-if="relations.length || backlinks.length" class="article-section">
    <h2>相关关系</h2>
    <div class="relation-grid">
      <div v-for="relation in relations" :key="`${relation.type.id}:${relation.targetId}`" class="relation-row">
        <span class="relation-label">{{ relation.type.label }}</span>
        <KnowledgeLink :target-id="relation.targetId" :label="relation.targetTitle" />
      </div>
      <div v-for="relation in backlinks" :key="`${relation.type.id}:${relation.targetId}`" class="relation-row">
        <span class="relation-label">{{ relation.type.label }}</span>
        <KnowledgeLink :target-id="relation.targetId" :label="relation.targetTitle" />
      </div>
    </div>
  </section>
</template>
