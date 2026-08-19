<script setup lang="ts">
import { computed } from 'vue'
import { buildPinyinTitleUnits } from './pinyin-title'

const props = defineProps<{
  title: string
  pinyin?: string
}>()

const renderedTitle = computed(() => buildPinyinTitleUnits(props.title, props.pinyin))
</script>

<template>
  <h1 class="pinyin-title">
    <template v-if="renderedTitle.canAlign">
      <template v-for="(unit, index) in renderedTitle.units" :key="`${unit.character}-${index}`">
        <ruby v-if="unit.syllable" class="pinyin-title__unit">
          <span>{{ unit.character }}</span>
          <rt>{{ unit.syllable }}</rt>
        </ruby>
        <span v-else>{{ unit.character }}</span>
      </template>
    </template>
    <span v-else>{{ title }}</span>
  </h1>
</template>
