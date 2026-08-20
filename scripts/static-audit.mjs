import { readdir, readFile, stat } from 'node:fs/promises'
import { resolve, relative, dirname, sep } from 'node:path'

const root = resolve(process.cwd(), 'src/knowledge')
const errors = []

// 已迁移到 foundation facts 的旧天干聚合 JSON 不应重新进入项目。
const legacyTianganFacts = resolve(root, 'data/tiangan-facts.json')
try {
  await stat(legacyTianganFacts)
  errors.push('发现已废弃的数据文件 data/tiangan-facts.json；请使用 data/foundation 统一事实层')
} catch {
  // 不存在即为预期状态。
}

async function walk(dir) {
  const files = []
  for (const name of await readdir(dir)) {
    const full = resolve(dir, name)
    const info = await stat(full)
    if (info.isDirectory()) files.push(...await walk(full))
    else files.push(full)
  }
  return files
}

function firstMatch(text, pattern) {
  return text.match(pattern)?.[1]
}

async function collectIds(files) {
  const ids = new Set()
  for (const file of files) {
    const text = await readFile(file, 'utf8')
    const id = firstMatch(text, /\bid:\s*'([^']+)'/)
    if (!id) errors.push(`${relative(root, file)} 缺少 id`)
    else if (ids.has(id)) errors.push(`重复 id: ${id}`)
    else ids.add(id)
  }
  return ids
}

const files = await walk(root)
const knowledgePath = (file) => relative(root, file).split(sep).join('/')
const entryFiles = files.filter((file) => {
  const path = knowledgePath(file)
  return path.startsWith('entries/') && path.endsWith('/entry.ts')
})
const groupFiles = files.filter((file) => {
  const path = knowledgePath(file)
  return path.startsWith('groups/') && path.endsWith('.ts')
})
const categoryFiles = files.filter((file) => {
  const path = knowledgePath(file)
  return path.startsWith('categories/') && path.endsWith('.ts')
})
const relationTypeFiles = files.filter((file) => {
  const path = knowledgePath(file)
  return path.startsWith('relation-types/') && path.endsWith('.ts')
})
const sourceFiles = files.filter((file) => {
  const path = knowledgePath(file)
  return path.startsWith('sources/') && path.endsWith('.ts')
})

if (entryFiles.length === 0) errors.push('未发现任何 entry.ts')

const entryIds = await collectIds(entryFiles)
const groupIds = await collectIds(groupFiles)
const categoryIds = await collectIds(categoryFiles)
const relationTypeIds = await collectIds(relationTypeFiles)
const sourceIds = await collectIds(sourceFiles)
const entrySlugs = new Set()
const referencedMarkdownFiles = new Set()

for (const file of categoryFiles) {
  const text = await readFile(file, 'utf8')
  const categoryId = firstMatch(text, /\bid:\s*'([^']+)'/) ?? relative(root, file)
  const groupId = firstMatch(text, /\bgroupId:\s*'([^']+)'/)
  const overviewEntryId = firstMatch(text, /\boverviewEntryId:\s*'([^']+)'/)
  if (!groupId || !groupIds.has(groupId)) errors.push(`${categoryId} 引用未知知识分组 ${groupId ?? '(缺失)'}`)
  if (overviewEntryId && !entryIds.has(overviewEntryId)) errors.push(`${categoryId} 引用未知概说条目 ${overviewEntryId}`)
}

for (const file of entryFiles) {
  const text = await readFile(file, 'utf8')
  const entryId = firstMatch(text, /\bid:\s*'([^']+)'/) ?? relative(root, file)
  const categoryId = firstMatch(text, /\bcategoryId:\s*'([^']+)'/)
  const slug = firstMatch(text, /\bslug:\s*'([^']+)'/)

  if (!categoryId || !categoryIds.has(categoryId)) errors.push(`${entryId} 引用未知分类 ${categoryId ?? '(缺失)'}`)
  if (!slug) errors.push(`${entryId} 缺少 slug`)
  else {
    const key = `${categoryId}/${slug}`
    if (entrySlugs.has(key)) errors.push(`重复分类/slug: ${key}`)
    entrySlugs.add(key)
  }

  for (const source of [...text.matchAll(/source:\s*'(\.\/[^']+\.md)'/g)].map((m) => m[1])) {
    const target = resolve(dirname(file), source)
    referencedMarkdownFiles.add(target)
    try { await stat(target) } catch { errors.push(`${relative(root, file)} 找不到 ${source}`) }
  }

  for (const match of text.matchAll(/\{\s*type:\s*'([^']+)'\s*,\s*target:\s*'([^']+)'/g)) {
    if (!relationTypeIds.has(match[1])) errors.push(`${entryId} 使用未知关系类型 ${match[1]}`)
    if (!entryIds.has(match[2])) errors.push(`${entryId} 的关系指向未知 ID ${match[2]}`)
  }

  for (const match of text.matchAll(/sourceId:\s*'([^']+)'/g)) {
    if (!sourceIds.has(match[1])) errors.push(`${entryId} 引用未知来源 ${match[1]}`)
  }

  const citationIds = new Set([...text.matchAll(/\{\s*id:\s*'([^']+)'\s*,\s*sourceId:/g)].map((match) => match[1]))
  const entryDir = dirname(file)
  for (const markdownFile of [...referencedMarkdownFiles].filter((candidate) => candidate.startsWith(entryDir + '/') && candidate.endsWith('.md'))) {
    const markdown = await readFile(markdownFile, 'utf8')
    for (const match of markdown.matchAll(/\[\[cite:([a-zA-Z0-9._-]+)\]\]/g)) {
      if (!citationIds.has(match[1])) errors.push(`${relative(root, markdownFile)} 脚注 ${match[1]} 没有对应定义`)
    }
    for (const match of markdown.matchAll(/([。！？；：，、.!?,;:])\s*\[\[cite:([a-zA-Z0-9._-]+)\]\]/g)) {
      errors.push(`${relative(root, markdownFile)} 脚注 ${match[2]} 位于标点“${match[1]}”之后`)
    }
  }
}

for (const file of [...referencedMarkdownFiles]) {
  const text = await readFile(file, 'utf8')
  for (const match of text.matchAll(/\[\[([a-z0-9.-]+)\|[^\]]+\]\]/gi)) {
    if (!entryIds.has(match[1])) errors.push(`${relative(root, file)} 引用未知 ID ${match[1]}`)
  }
}

if (errors.length) {
  console.error('Static audit failed:')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(`Static audit passed: ${entryFiles.length} entries, ${referencedMarkdownFiles.size} referenced Markdown sections, ${groupIds.size} knowledge groups, ${relationTypeIds.size} relation types, ${sourceIds.size} sources.`)
