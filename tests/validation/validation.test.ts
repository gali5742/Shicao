import { describe, expect, it } from 'vitest'
import type { RawKnowledgeAssets } from '@/knowledge/runtime/loader'
import { validateKnowledgeAssets } from '@/knowledge/runtime/validator'

const base: RawKnowledgeAssets = {
  groups: [{ id: 'foundation', title: 'Foundation', order: 1 }],
  categories: [{ id: 'demo', groupId: 'foundation', slug: 'demo', title: 'Demo', overviewEntryId: 'demo.item', order: 1 }],
  relationTypes: [],
  sources: [],
  entries: [{
    modulePath: '../entries/demo/item/entry.ts',
    definition: {
      id: 'demo.item', categoryId: 'demo', slug: 'item', title: 'Item', sections: [{ id: 'basic', title: 'Basic', source: './basic.md' }]
    },
    resolvedSections: [{ id: 'basic', title: 'Basic', source: './basic.md', content: '正文' }]
  }]
}

describe('knowledge validator', () => {
  it('可以识别不存在的知识分组', () => {
    const assets = structuredClone(base)
    assets.categories[0].groupId = 'missing'
    expect(validateKnowledgeAssets(assets).some((issue) => issue.code === 'missing-group')).toBe(true)
  })

  it('可以识别不存在的分类', () => {
    const assets = structuredClone(base)
    assets.entries[0].definition.categoryId = 'missing'
    expect(validateKnowledgeAssets(assets).some((issue) => issue.code === 'missing-category')).toBe(true)
  })

  it('可以识别不存在的分类概说条目', () => {
    const assets = structuredClone(base)
    assets.categories[0].overviewEntryId = 'demo.missing'
    expect(validateKnowledgeAssets(assets).some((issue) => issue.code === 'missing-category-overview')).toBe(true)
  })

  it('可以识别不存在的正文文件', () => {
    const assets = structuredClone(base)
    assets.entries[0].resolvedSections[0] = undefined
    expect(validateKnowledgeAssets(assets).some((issue) => issue.code === 'missing-section-source')).toBe(true)
  })

  it('可以识别正文中的死 Knowledge ID', () => {
    const assets = structuredClone(base)
    assets.entries[0].resolvedSections[0]!.content = '[[demo.missing|missing]]'
    expect(validateKnowledgeAssets(assets).some((issue) => issue.code === 'missing-reference-target')).toBe(true)
  })

  it('可以识别没有定义的正文脚注', () => {
    const assets = structuredClone(base)
    assets.entries[0].resolvedSections[0]!.content = '正文[[cite:missing]]'
    expect(validateKnowledgeAssets(assets).some((issue) => issue.code === 'missing-citation-definition')).toBe(true)
  })

  it('可以识别定义后没有正文位置的脚注', () => {
    const assets = structuredClone(base)
    assets.sources = [{ id: 'source.demo', kind: 'classic', title: 'Demo' }]
    assets.entries[0].definition.sections[0].citations = [{ id: 'unused', sourceId: 'source.demo' }]
    assets.entries[0].resolvedSections[0] = {
      ...assets.entries[0].definition.sections[0],
      content: '正文'
    }
    expect(validateKnowledgeAssets(assets).some((issue) => issue.code === 'unused-citation-definition')).toBe(true)
  })

  it('可以识别脚注位于标点之后', () => {
    const assets = structuredClone(base)
    assets.sources = [{ id: 'source.demo', kind: 'classic', title: 'Demo' }]
    assets.entries[0].definition.sections[0].citations = [{ id: 'bad', sourceId: 'source.demo' }]
    assets.entries[0].resolvedSections[0] = {
      ...assets.entries[0].definition.sections[0],
      content: '正文。[[cite:bad]]'
    }
    expect(validateKnowledgeAssets(assets).some((issue) => issue.code === 'citation-marker-after-punctuation')).toBe(true)
  })

})
