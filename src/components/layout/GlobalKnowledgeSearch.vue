<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { searchKnowledge } from '@/knowledge/public-api'
import { routeForKnowledgeId } from '@/router/knowledgeRouteAdapter'

const props = withDefaults(defineProps<{
  variant?: 'header' | 'hero'
}>(), {
  variant: 'header'
})

const router = useRouter()
const inputElement = ref<HTMLInputElement | null>(null)
const query = ref('')
const focused = ref(false)
const results = computed(() => query.value.trim() ? searchKnowledge(query.value).slice(0, 6) : [])
const showResults = computed(() => focused.value && query.value.trim().length > 0)

function openFirstResult() {
  const first = results.value[0]
  if (!first) return
  const route = routeForKnowledgeId(first.id)
  if (route) router.push(route)
}

function handleBlur() {
  window.setTimeout(() => { focused.value = false }, 120)
}

function handleShortcut(event: KeyboardEvent) {
  if (props.variant !== 'header') return
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault()
    inputElement.value?.focus()
  }
}

onMounted(() => window.addEventListener('keydown', handleShortcut))
onBeforeUnmount(() => window.removeEventListener('keydown', handleShortcut))
</script>

<template>
  <div class="global-search" :class="`global-search--${props.variant}`">
    <form class="global-search__form" role="search" @submit.prevent="openFirstResult">
      <svg class="global-search__icon" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4 4" />
      </svg>
      <input
        ref="inputElement"
        v-model="query"
        class="global-search__input"
        type="search"
        :placeholder="props.variant === 'hero' ? '搜索知识、概念、关系…' : '搜索知识…'"
        autocomplete="off"
        aria-label="搜索知识"
        @focus="focused = true"
        @blur="handleBlur"
      />
      <span v-if="props.variant === 'header'" class="global-search__shortcut" aria-hidden="true">Ctrl K</span>
    </form>

    <div v-if="showResults" class="global-search__results">
      <RouterLink
        v-for="item in results"
        :key="item.id"
        :to="routeForKnowledgeId(item.id)!"
        class="global-search__result"
        @click="focused = false"
      >
        <strong>{{ item.title }}</strong>
        <span v-if="item.summary">{{ item.summary }}</span>
      </RouterLink>
      <p v-if="!results.length" class="global-search__empty">没有匹配结果。</p>
    </div>
  </div>
</template>
