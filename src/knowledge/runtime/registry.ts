import type {
  KnowledgeCategory,
  KnowledgeEntrySummary,
  KnowledgeGroup,
  KnowledgeRelationType,
  KnowledgeSource,
  ResolvedKnowledgeEntry,
  ResolvedRelationType
} from '../schema'
import type { LoadedKnowledgeEntrySource, RawKnowledgeAssets } from './loader'

function summarize(entry: ResolvedKnowledgeEntry): KnowledgeEntrySummary {
  return {
    id: entry.id,
    categoryId: entry.categoryId,
    slug: entry.slug,
    title: entry.title,
    pinyin: entry.pinyin,
    aliases: entry.aliases ?? [],
    summary: entry.summary,
    order: entry.order ?? 9999,
    status: entry.status ?? 'draft'
  }
}

export class KnowledgeRegistry {
  private readonly entries = new Map<string, ResolvedKnowledgeEntry>()
  private readonly groups = new Map<string, KnowledgeGroup>()
  private readonly categories = new Map<string, KnowledgeCategory>()
  private readonly relationTypes = new Map<string, KnowledgeRelationType>()
  private readonly sources = new Map<string, KnowledgeSource>()

  constructor(assets: RawKnowledgeAssets) {
    for (const group of assets.groups) this.groups.set(group.id, group)
    for (const category of assets.categories) this.categories.set(category.id, category)
    for (const relationType of assets.relationTypes) this.relationTypes.set(relationType.id, relationType)
    for (const source of assets.sources) this.sources.set(source.id, source)
    for (const loaded of assets.entries) this.entries.set(loaded.definition.id, this.resolveEntry(loaded))
  }

  private resolveEntry(loaded: LoadedKnowledgeEntrySource): ResolvedKnowledgeEntry {
    return {
      ...loaded.definition,
      sections: loaded.resolvedSections.filter((section): section is NonNullable<typeof section> => Boolean(section))
    }
  }

  getEntry(id: string): ResolvedKnowledgeEntry | undefined {
    return this.entries.get(id)
  }

  hasEntry(id: string): boolean {
    return this.entries.has(id)
  }

  listEntries(): KnowledgeEntrySummary[] {
    return [...this.entries.values()]
      .map(summarize)
      .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title, 'zh-CN'))
  }

  listEntriesByCategory(categoryId: string): KnowledgeEntrySummary[] {
    return [...this.entries.values()]
      .filter((entry) => entry.categoryId === categoryId)
      .map(summarize)
      .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title, 'zh-CN'))
  }

  getGroup(id: string): KnowledgeGroup | undefined {
    return this.groups.get(id)
  }

  listGroups(): KnowledgeGroup[] {
    return [...this.groups.values()].sort((a, b) => a.order - b.order || a.title.localeCompare(b.title, 'zh-CN'))
  }

  getCategory(id: string): KnowledgeCategory | undefined {
    return this.categories.get(id)
  }

  listCategories(): KnowledgeCategory[] {
    return [...this.categories.values()].sort((a, b) => a.order - b.order || a.title.localeCompare(b.title, 'zh-CN'))
  }

  getSource(id: string): KnowledgeSource | undefined {
    return this.sources.get(id)
  }

  getRelationType(id: string): ResolvedRelationType | undefined {
    const direct = this.relationTypes.get(id)
    if (direct) return { ...direct, derivedInverse: false }

    for (const type of this.relationTypes.values()) {
      if (type.inverseId === id) {
        return {
          id: type.inverseId,
          label: type.inverseLabel,
          inverseId: type.id,
          inverseLabel: type.label,
          directed: type.directed,
          derivedInverse: true
        }
      }
    }
    return undefined
  }

  getDeclaredRelationType(id: string): KnowledgeRelationType | undefined {
    return this.relationTypes.get(id)
  }
}
