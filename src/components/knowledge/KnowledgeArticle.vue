<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { KnowledgeCitation, ResolvedKnowledgeEntry, ResolvedKnowledgeRelation } from '@/knowledge/public-api'
import { listCitationsInMarkerOrder } from '@/knowledge/public-api'
import KnowledgeSection from './KnowledgeSection.vue'
import PinyinTitle from './PinyinTitle.vue'
import RelationList from './RelationList.vue'
import SourceList from './SourceList.vue'

const props = defineProps<{
  entry: ResolvedKnowledgeEntry
  relations: ResolvedKnowledgeRelation[]
  backlinks: ResolvedKnowledgeRelation[]
}>()

const relationTabId = '__relations__'

const hasExplicitRelationSection = computed(() => props.entry.sections.some((section) => section.id === 'related'))

const tabs = computed(() => [
  ...props.entry.sections.map((section) => ({ id: section.id, title: section.title, kind: 'section' as const })),
  ...(!hasExplicitRelationSection.value && (props.relations.length || props.backlinks.length)
    ? [{ id: relationTabId, title: '相关关系', kind: 'relations' as const }]
    : [])
])

const activeTabId = ref(tabs.value[0]?.id ?? '')

watch(
  () => props.entry.id,
  () => {
    activeTabId.value = tabs.value[0]?.id ?? ''
  }
)

const activeSection = computed(() => props.entry.sections.find((section) => section.id === activeTabId.value))

function uniqueCitations(citations: KnowledgeCitation[]): KnowledgeCitation[] {
  const seen = new Set<string>()
  return citations.filter((citation) => {
    const key = `${citation.sourceId}:${citation.locator ?? ''}:${citation.quote ?? ''}:${citation.note ?? ''}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

const activeCitations = computed(() => {
  if (activeSection.value) {
    return listCitationsInMarkerOrder(activeSection.value.content, activeSection.value.citations ?? [])
  }
  if (activeTabId.value !== relationTabId) return []

  return uniqueCitations([
    ...props.relations.flatMap((relation) => relation.citations ?? []),
    ...props.backlinks.flatMap((relation) => relation.citations ?? [])
  ])
})
</script>

<template>
  <article class="article-card">
    <header class="article-header">
      <PinyinTitle :title="entry.title" :pinyin="entry.pinyin" />
      <p v-if="entry.summary" class="article-summary">{{ entry.summary }}</p>
      <div v-if="entry.aliases?.length" class="alias-row">别名：{{ entry.aliases.join('、') }}</div>
    </header>

    <nav v-if="tabs.length" class="article-tabs" aria-label="知识条目章节">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        type="button"
        class="article-tab"
        :class="{ 'article-tab--active': activeTabId === tab.id }"
        :aria-selected="activeTabId === tab.id"
        @click="activeTabId = tab.id"
      >
        {{ tab.title }}
      </button>
    </nav>

    <KnowledgeSection v-if="activeSection" :section="activeSection" :entry-id="entry.id" />
    <RelationList
      v-else-if="activeTabId === relationTabId"
      :relations="relations"
      :backlinks="backlinks"
    />

    <SourceList :citations="activeCitations" />
  </article>
</template>
