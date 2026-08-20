<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import type { ResolvedKnowledgeSection } from '@/knowledge/public-api'
import { getLinkableKnowledgeEntries, transformCitationMarkers, transformKnowledgeReferences } from '@/knowledge/public-api'
import { routeForKnowledgeId } from '@/router/knowledgeRouteAdapter'
import { renderKnowledgeMarkdown } from './knowledgeMarkdown'
import { renderStructuredFacts } from './structuredFactMarkdown'

const props = defineProps<{ section: ResolvedKnowledgeSection; entryId: string }>()
const router = useRouter()

const html = computed(() => {
  const withStructuredFacts = renderStructuredFacts(props.section.content)
  const withKnowledgeLinks = transformKnowledgeReferences(withStructuredFacts, (id) => `knowledge:${id}`)
  const renderedMarkdown = renderKnowledgeMarkdown(withKnowledgeLinks, getLinkableKnowledgeEntries(), props.entryId)
  return transformCitationMarkers(
    renderedMarkdown,
    props.section.citations ?? [],
    ({ number }) => `<sup class="citation-marker"><a href="#reference-${number}" aria-label="参考资料 ${number}">[${number}]</a></sup>`
  )
})

function onContentClick(event: MouseEvent) {
  const target = event.target
  if (!(target instanceof Element)) return
  const anchor = target.closest('a')
  if (!(anchor instanceof HTMLAnchorElement)) return
  const href = anchor.getAttribute('href') ?? ''
  if (!href.startsWith('knowledge:')) return

  event.preventDefault()
  const id = href.slice('knowledge:'.length)
  const route = routeForKnowledgeId(id)
  if (route) router.push(route)
}
</script>

<template>
  <section :id="section.id" class="article-section">
    <h2>{{ section.title }}</h2>
    <div class="markdown-body" @click="onContentClick" v-html="html" />
  </section>
</template>
