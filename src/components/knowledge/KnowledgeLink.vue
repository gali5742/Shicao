<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { getEntry } from '@/knowledge/public-api'
import { routeForKnowledgeId } from '@/router/knowledgeRouteAdapter'

const props = defineProps<{ targetId: string; label?: string }>()
const entry = computed(() => getEntry(props.targetId))
const route = computed(() => routeForKnowledgeId(props.targetId))
</script>

<template>
  <RouterLink v-if="entry && route" :to="route" class="knowledge-link">
    {{ label ?? entry.title }}
  </RouterLink>
  <span v-else class="knowledge-link knowledge-link--broken">{{ label ?? '相关条目暂不可用' }}</span>
</template>
