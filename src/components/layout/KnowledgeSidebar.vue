<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getCategories, getEntriesByCategory, getKnowledgeGroups } from '@/knowledge/public-api'
import { routeForKnowledgeId } from '@/router/knowledgeRouteAdapter'

const route = useRoute()
const groups = getKnowledgeGroups()
const categories = getCategories()

const populatedGroups = computed(() => groups.flatMap((group) => {
  const groupCategories = categories
    .filter((category) => category.groupId === group.id)
    .map((category) => ({
      ...category,
      entries: getEntriesByCategory(category.id)
        .filter((entry) => entry.id !== category.overviewEntryId)
    }))

  return groupCategories.length ? [{ ...group, categories: groupCategories }] : []
}))

const openGroupIds = ref<string[]>(populatedGroups.value.slice(0, 1).map((group) => group.id))
const openCategoryIds = ref<string[]>([])
const activeCategorySlug = computed(() => String(route.params.categorySlug ?? ''))
const activeEntrySlug = computed(() => String(route.params.entrySlug ?? ''))

function isGroupOpen(groupId: string) {
  return openGroupIds.value.includes(groupId)
}

function toggleGroup(groupId: string) {
  openGroupIds.value = isGroupOpen(groupId)
    ? openGroupIds.value.filter((id) => id !== groupId)
    : [...openGroupIds.value, groupId]
}

function isCategoryOpen(categoryId: string) {
  return openCategoryIds.value.includes(categoryId)
}

function toggleCategory(categoryId: string) {
  openCategoryIds.value = isCategoryOpen(categoryId)
    ? openCategoryIds.value.filter((id) => id !== categoryId)
    : [...openCategoryIds.value, categoryId]
}

watch(activeCategorySlug, (slug) => {
  if (!slug) return
  const category = categories.find((item) => item.slug === slug)
  if (!category) return

  if (!isGroupOpen(category.groupId)) {
    openGroupIds.value = [...openGroupIds.value, category.groupId]
  }
  if (!isCategoryOpen(category.id)) {
    openCategoryIds.value = [...openCategoryIds.value, category.id]
  }
}, { immediate: true })
</script>

<template>
  <aside class="knowledge-sidebar" aria-label="知识目录">
    <div class="knowledge-sidebar__inner">
      <h2 class="knowledge-sidebar__title">知识目录</h2>

      <nav class="knowledge-tree">
        <section v-for="group in populatedGroups" :key="group.id" class="knowledge-tree__group">
          <button
            type="button"
            class="knowledge-tree__group-button"
            :aria-expanded="isGroupOpen(group.id)"
            @click="toggleGroup(group.id)"
          >
            <span class="knowledge-tree__chevron" :class="{ 'knowledge-tree__chevron--open': isGroupOpen(group.id) }">›</span>
            <span>{{ group.title }}</span>
          </button>

          <div v-show="isGroupOpen(group.id)" class="knowledge-tree__categories">
            <section v-for="category in group.categories" :key="category.id" class="knowledge-tree__category">
              <div
                class="knowledge-tree__category-row"
                :class="{ 'knowledge-tree__category-row--active': activeCategorySlug === category.slug }"
              >
                <button
                  v-if="category.entries.length"
                  type="button"
                  class="knowledge-tree__category-toggle"
                  :aria-label="`${isCategoryOpen(category.id) ? '收起' : '展开'}${category.title}`"
                  :aria-expanded="isCategoryOpen(category.id)"
                  @click="toggleCategory(category.id)"
                >
                  <span class="knowledge-tree__category-chevron" :class="{ 'knowledge-tree__category-chevron--open': isCategoryOpen(category.id) }">›</span>
                </button>
                <span v-else class="knowledge-tree__category-toggle knowledge-tree__category-toggle--placeholder" aria-hidden="true" />

                <RouterLink
                  :to="{ name: 'knowledge-category', params: { categorySlug: category.slug } }"
                  class="knowledge-tree__category-link"
                >
                  {{ category.title }}
                </RouterLink>
              </div>

              <div v-show="isCategoryOpen(category.id)" class="knowledge-tree__items">
                <RouterLink
                  v-for="entry in category.entries"
                  :key="entry.id"
                  :to="routeForKnowledgeId(entry.id)!"
                  class="knowledge-tree__link"
                  :class="{ 'knowledge-tree__link--active': activeEntrySlug === entry.slug }"
                >
                  {{ entry.title }}
                </RouterLink>
              </div>
            </section>
          </div>
        </section>
      </nav>
    </div>
  </aside>
</template>
