import type { KnowledgeCitation, KnowledgeSource } from '../schema'

function wrapBookTitle(title: string): string {
  return `《${title}》`
}

function formatClassic(source: KnowledgeSource): string {
  const title = source.partTitle ? `${source.title}·${source.partTitle}` : source.title
  const volume = source.volume ?? ''
  return `${wrapBookTitle(title)}${volume}`
}

function formatBook(source: KnowledgeSource): string {
  const author = source.author ? `${source.author}：` : ''
  const publication = [source.publisher, source.year].filter(Boolean).join('，')
  const edition = source.edition ? `，${source.edition}` : ''
  return `${author}${wrapBookTitle(source.title)}${publication ? `，${publication}` : ''}${edition}`
}

function formatArticle(source: KnowledgeSource): string {
  const author = source.author ? `${source.author}：` : ''
  const journal = source.journal ? `，《${source.journal}》` : ''
  const issue = [source.year, source.issue].filter(Boolean).join('')
  const pages = source.pages ? `，${source.pages}` : ''
  return `${author}《${source.title}》${journal}${issue ? `，${issue}` : ''}${pages}`
}

export function formatKnowledgeSource(source: KnowledgeSource): string {
  switch (source.kind) {
    case 'classic': return formatClassic(source)
    case 'book': return formatBook(source)
    case 'article': return formatArticle(source)
    default: return source.title
  }
}

export function formatKnowledgeCitation(source: KnowledgeSource, citation: KnowledgeCitation): string {
  const base = formatKnowledgeSource(source)
  const locator = citation.locator ? `，${citation.locator}` : ''
  const sourceText = `${base}${locator}`

  if (citation.quote) {
    const quoted = `${sourceText}：“${citation.quote}”`
    return citation.note ? `${quoted}；${citation.note}` : quoted
  }

  if (citation.note) return `${sourceText}：${citation.note}`
  return `${sourceText}。`
}
