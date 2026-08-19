<script setup lang="ts">
import { computed } from 'vue'
import type { KnowledgeCitation } from '@/knowledge/public-api'
import { formatKnowledgeCitation, getSource } from '@/knowledge/public-api'

const props = defineProps<{ citations: KnowledgeCitation[] }>()

const items = computed(() => props.citations.flatMap((citation, index) => {
  const source = getSource(citation.sourceId)
  if (!source) return []
  return [{
    key: `${citation.id ?? citation.sourceId}:${citation.locator ?? ''}:${citation.quote ?? ''}:${citation.note ?? ''}`,
    number: index + 1,
    text: formatKnowledgeCitation(source, citation)
  }]
}))
</script>

<template>
  <section v-if="items.length" class="article-section source-section">
    <h2>参考资料</h2>
    <ol class="source-list">
      <li v-for="item in items" :id="`reference-${item.number}`" :key="item.key">
        <span class="source-index">[{{ item.number }}]</span>
        <span>{{ item.text }}</span>
      </li>
    </ol>
  </section>
</template>
