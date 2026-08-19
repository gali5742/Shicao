import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

async function source(path: string) {
  return readFile(resolve(process.cwd(), path), 'utf8')
}

describe('frontend boundary', () => {
  it('前台不直接显示内部知识编码或条目统计', async () => {
    const category = await source('src/views/KnowledgeCategory.vue')
    const article = await source('src/components/knowledge/KnowledgeArticle.vue')
    const home = await source('src/views/KnowledgeHome.vue')

    expect(category).not.toContain('{{ entry.id }}')
    expect(category).not.toContain('{{ category.id }}')
    expect(article).not.toContain('{{ entry.id }}')
    expect(home).not.toContain('{{ category.id }}')
    expect(home).not.toContain('个条目')
    expect(home).not.toContain('getEntriesByCategory(category.id).length')
  })

  it('品牌统一使用蓍草，页面标题不再以功能名充当品牌', async () => {
    const app = await source('src/App.vue')
    const home = await source('src/views/KnowledgeHome.vue')
    const html = await source('index.html')

    expect(app).toContain('class="site-brand" to="/knowledge" aria-label="蓍草首页"')
    expect(app).toContain('@/assets/shicao-brand.png')
    expect(app).toContain('class="site-brand__image"')
    expect(home).toContain('欢迎使用 蓍草')
    expect(html).toContain('<title>蓍草｜传统术数知识库</title>')
  })

  it('首页目录由知识分组和分类数据驱动，而不是硬编码分类墙', async () => {
    const sidebar = await source('src/components/layout/KnowledgeSidebar.vue')

    expect(sidebar).toContain('getKnowledgeGroups')
    expect(sidebar).toContain('getCategories')
    expect(sidebar).toContain('getEntriesByCategory')
    expect(sidebar).toContain('category.groupId === group.id')
    expect(sidebar).toContain('entry.id !== category.overviewEntryId')
    expect(sidebar).toContain('v-if="category.entries.length"')
    expect(sidebar).toContain('@click="toggleCategory(category.id)"')
    expect(sidebar).toContain(`:to="{ name: 'knowledge-category', params: { categorySlug: category.slug } }"`)
    expect(sidebar).toContain('class="knowledge-tree__category-link"')
    expect(sidebar).toContain('v-for="entry in category.entries"')
    expect(sidebar).not.toContain('基础概念</')
    expect(sidebar).not.toContain('五行</')
  })

  it('目录分类标题进入分类页，展开按钮只负责展开条目', async () => {
    const sidebar = await source('src/components/layout/KnowledgeSidebar.vue')

    expect(sidebar).toContain(`:to="{ name: 'knowledge-category', params: { categorySlug: category.slug } }"`)
    expect(sidebar).toContain('class="knowledge-tree__category-toggle"')
    expect(sidebar).toContain('@click="toggleCategory(category.id)"')
    expect(sidebar).toContain('activeCategorySlug === category.slug')
  })

  it('首页只提供有上限的快速入口，不随全部分类无限生成卡片', async () => {
    const home = await source('src/views/KnowledgeHome.vue')

    expect(home).toContain('.filter((category) => category.featured).slice(0, 4)')
    expect(home).not.toContain('v-for="category in categories"')
  })

  it('蓍草植物水印由独立图形资源提供', async () => {
    const css = await source('src/styles/base.css')
    const watermark = await source('src/assets/yarrow-watermark.svg')

    expect(css).toContain("url('../assets/yarrow-watermark.svg')")
    expect(css).toContain('24vw')
    expect(watermark).toContain('<svg')
  })

  it('正文与相关关系统一通过选项卡切换，显式相关关系正文优先于机器关系面板', async () => {
    const article = await source('src/components/knowledge/KnowledgeArticle.vue')

    expect(article).toContain('const activeTabId = ref')
    expect(article).toContain('hasExplicitRelationSection')
    expect(article).toContain("section.id === 'related'")
    expect(article).toContain("title: '相关关系'")
    expect(article).toContain('@click="activeTabId = tab.id"')
    expect(article).toContain('v-if="activeSection"')
    expect(article).toContain('v-else-if="activeTabId === relationTabId"')
  })

  it('参考资料来自当前选项卡，而不是条目统一 bibliography', async () => {
    const article = await source('src/components/knowledge/KnowledgeArticle.vue')

    expect(article).toContain('const activeCitations = computed')
    expect(article).toContain('<SourceList :citations="activeCitations" />')
    expect(article).not.toContain('entry.citations ?? []')
  })

  it('拼音只在详情页标题呈现，分类页和首页不显示', async () => {
    const category = await source('src/views/KnowledgeCategory.vue')
    const home = await source('src/views/KnowledgeHome.vue')
    const article = await source('src/components/knowledge/KnowledgeArticle.vue')
    const pinyinTitle = await source('src/components/knowledge/PinyinTitle.vue')

    expect(category).not.toContain('entry.pinyin')
    expect(home).not.toContain('category.pinyin')
    expect(article).toContain('<PinyinTitle :title="entry.title" :pinyin="entry.pinyin" />')
    expect(pinyinTitle).toContain('buildPinyinTitleUnits')
    expect(pinyinTitle).toContain('<rt>{{ unit.syllable }}</rt>')
  })

  it('别名只在存在有意义的别名数据时展示', async () => {
    const article = await source('src/components/knowledge/KnowledgeArticle.vue')
    expect(article).toContain('v-if="entry.aliases?.length"')
  })

  it('前台不出现测试与后台说明文案', async () => {
    const files = [
      'src/App.vue',
      'src/views/KnowledgeHome.vue',
      'src/views/KnowledgeCategory.vue',
      'src/views/KnowledgeDetail.vue'
    ]
    const texts = await Promise.all(files.map(source))
    const combined = texts.join('\n')

    for (const phrase of ['独立测试版', '架构测试', 'Knowledge ID', '样板条目', '结构化关系数据', '卡片墙']) {
      expect(combined).not.toContain(phrase)
    }
  })
  it('正文脚注由稳定标识自动编号，参考资料区域显示对应序号', async () => {
    const section = await source('src/components/knowledge/KnowledgeSection.vue')
    const sourceList = await source('src/components/knowledge/SourceList.vue')
    const article = await source('src/components/knowledge/KnowledgeArticle.vue')

    expect(section).toContain('renderKnowledgeMarkdown(withKnowledgeLinks')
    expect(section).toContain('transformCitationMarkers')
    expect(section).toContain('reference-${number}')
    expect(sourceList).toContain('[{{ item.number }}]')
    expect(article).toContain('listCitationsInMarkerOrder')
  })

})
