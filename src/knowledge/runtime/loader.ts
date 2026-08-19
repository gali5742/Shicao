import type {
  KnowledgeCategory,
  KnowledgeEntry,
  KnowledgeGroup,
  KnowledgeRelationType,
  KnowledgeSource,
  ResolvedKnowledgeSection
} from '../schema'

interface DefaultModule<T> {
  default: T
}

export interface LoadedKnowledgeEntrySource {
  definition: KnowledgeEntry
  modulePath: string
  resolvedSections: Array<ResolvedKnowledgeSection | undefined>
}

export interface RawKnowledgeAssets {
  entries: LoadedKnowledgeEntrySource[]
  groups: KnowledgeGroup[]
  categories: KnowledgeCategory[]
  relationTypes: KnowledgeRelationType[]
  sources: KnowledgeSource[]
}

const entryModules = import.meta.glob<DefaultModule<KnowledgeEntry>>('../entries/**/entry.ts', { eager: true })
const groupModules = import.meta.glob<DefaultModule<KnowledgeGroup>>('../groups/*.ts', { eager: true })
const categoryModules = import.meta.glob<DefaultModule<KnowledgeCategory>>('../categories/*.ts', { eager: true })
const relationTypeModules = import.meta.glob<DefaultModule<KnowledgeRelationType>>('../relation-types/*.ts', { eager: true })
const sourceModules = import.meta.glob<DefaultModule<KnowledgeSource>>('../sources/*.ts', { eager: true })
const markdownModules = import.meta.glob<string>('../entries/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
})

function moduleDefaults<T>(modules: Record<string, DefaultModule<T>>): T[] {
  return Object.values(modules).map((module) => module.default)
}

function resolveSectionPath(entryModulePath: string, source: string): string {
  const directory = entryModulePath.slice(0, entryModulePath.lastIndexOf('/'))
  const localSource = source.startsWith('./') ? source.slice(2) : source
  return `${directory}/${localSource}`
}

export function loadKnowledgeAssets(): RawKnowledgeAssets {
  const entries = Object.entries(entryModules).map(([modulePath, module]) => {
    const definition = module.default
    const resolvedSections = definition.sections.map((section) => {
      const resolvedPath = resolveSectionPath(modulePath, section.source)
      const content = markdownModules[resolvedPath]
      if (content === undefined) return undefined
      return { ...section, content }
    })

    return { definition, modulePath, resolvedSections }
  })

  return {
    entries,
    groups: moduleDefaults(groupModules),
    categories: moduleDefaults(categoryModules),
    relationTypes: moduleDefaults(relationTypeModules),
    sources: moduleDefaults(sourceModules)
  }
}
