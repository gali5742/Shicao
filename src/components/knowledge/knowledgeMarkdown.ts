import { marked, type Token, type Tokens } from 'marked'

export interface LinkableKnowledgeEntry {
  id: string
  title: string
  aliases?: string[]
}

type ConceptCandidate = {
  id: string
  label: string
}

type TokenWithChildren = Token & { tokens?: Token[] }

type TableCellLike = {
  tokens?: Token[]
}

type ProtectedSourceQuote = {
  placeholder: string
  html: string
}

const KNOWLEDGE_HREF_PREFIX = 'knowledge:'
const PROTECTED_INLINE_TYPES = new Set(['codespan', 'code', 'html'])
const CITED_INLINE_QUOTE_PATTERN = /(“[^”\n]+”)(?=\[\[cite:[a-zA-Z0-9._-]+\]\])/g
const KNOWLEDGE_MARKDOWN_LINK_PATTERN = /\[([^\]]+)\]\(knowledge:[^)]+\)/g

function buildCandidates(entries: LinkableKnowledgeEntry[], currentEntryId?: string): ConceptCandidate[] {
  const labels = new Map<string, string | null>()

  for (const entry of entries) {
    if (entry.id === currentEntryId) continue
    for (const rawLabel of [entry.title, ...(entry.aliases ?? [])]) {
      const label = rawLabel.trim()
      if (!label) continue
      const existing = labels.get(label)
      if (existing === undefined) labels.set(label, entry.id)
      else if (existing !== entry.id) labels.set(label, null)
    }
  }

  return [...labels.entries()]
    .filter((item): item is [string, string] => Boolean(item[1]))
    .map(([label, id]) => ({ id, label }))
    .sort((a, b) => b.label.length - a.label.length || a.label.localeCompare(b.label, 'zh-CN'))
}

function knowledgeLinkToken(label: string, id: string): Tokens.Link {
  const textToken: Tokens.Text = {
    type: 'text',
    raw: label,
    text: label,
    escaped: false
  }
  return {
    type: 'link',
    raw: label,
    href: `${KNOWLEDGE_HREF_PREFIX}${id}`,
    title: null,
    text: label,
    tokens: [textToken]
  }
}

function splitTextToken(
  token: Tokens.Text,
  candidates: ConceptCandidate[],
  usedTargets: Set<string> | null
): Token[] {
  const text = token.text
  if (!text) return [token]

  const result: Token[] = []
  let cursor = 0

  while (cursor < text.length) {
    let best: { index: number; candidate: ConceptCandidate } | undefined

    for (const candidate of candidates) {
      if (usedTargets?.has(candidate.id)) continue
      const index = text.indexOf(candidate.label, cursor)
      if (index < 0) continue
      if (
        !best ||
        index < best.index ||
        (index === best.index && candidate.label.length > best.candidate.label.length)
      ) {
        best = { index, candidate }
      }
    }

    if (!best) {
      const remainder = text.slice(cursor)
      if (remainder) {
        result.push({ type: 'text', raw: remainder, text: remainder, escaped: token.escaped } as Tokens.Text)
      }
      break
    }

    if (best.index > cursor) {
      const before = text.slice(cursor, best.index)
      result.push({ type: 'text', raw: before, text: before, escaped: token.escaped } as Tokens.Text)
    }

    result.push(knowledgeLinkToken(best.candidate.label, best.candidate.id))
    usedTargets?.add(best.candidate.id)
    cursor = best.index + best.candidate.label.length
  }

  return result.length ? result : [token]
}

function processInlineTokens(
  tokens: Token[],
  candidates: ConceptCandidate[],
  usedTargets: Set<string> | null
): Token[] {
  const result: Token[] = []

  for (const token of tokens) {
    if (token.type === 'link') {
      const href = (token as Tokens.Link).href ?? ''
      if (usedTargets && href.startsWith(KNOWLEDGE_HREF_PREFIX)) {
        usedTargets.add(href.slice(KNOWLEDGE_HREF_PREFIX.length))
      }
      result.push(token)
      continue
    }

    if (PROTECTED_INLINE_TYPES.has(token.type)) {
      result.push(token)
      continue
    }

    if (token.type === 'text') {
      result.push(...splitTextToken(token as Tokens.Text, candidates, usedTargets))
      continue
    }

    const tokenWithChildren = token as TokenWithChildren
    if (tokenWithChildren.tokens?.length) {
      tokenWithChildren.tokens = processInlineTokens(tokenWithChildren.tokens, candidates, usedTargets)
    }
    result.push(token)
  }

  return result
}

function collectInlineText(tokens: Token[]): string {
  let text = ''
  for (const token of tokens) {
    if (token.type === 'text') {
      text += (token as Tokens.Text).text ?? ''
      continue
    }
    if (token.type === 'codespan' || token.type === 'code' || token.type === 'html') return ''
    const tokenWithChildren = token as TokenWithChildren
    if (tokenWithChildren.tokens?.length) text += collectInlineText(tokenWithChildren.tokens)
  }
  return text
}

function processTableCell(
  cell: TableCellLike,
  candidates: ConceptCandidate[],
  tableUsedTargets: Set<string>
) {
  if (!cell.tokens?.length) return

  // Tables are structured navigation surfaces rather than prose. Only an
  // entire cell whose visible text exactly matches one unambiguous knowledge
  // label is auto-linked; substrings such as `同五行` or `五行生克` are left
  // untouched. Table links have their own per-table de-duplication scope and
  // therefore do not consume (or get consumed by) prose links in the section.
  const exactLabel = collectInlineText(cell.tokens).trim()
  if (!exactLabel) return

  const candidate = candidates.find((item) => item.label === exactLabel)
  if (!candidate || tableUsedTargets.has(candidate.id)) return

  cell.tokens = processInlineTokens(cell.tokens, [candidate], tableUsedTargets)
}

function processBlockTokens(tokens: Token[], candidates: ConceptCandidate[], usedTargets: Set<string>) {
  for (const token of tokens) {
    switch (token.type) {
      case 'heading':
      case 'code':
      case 'html':
      case 'blockquote':
        // Headings, code/raw HTML, and source quotation blocks are evidence/structure, not navigation surfaces.
        continue
      case 'table': {
        const table = token as Tokens.Table
        const tableUsedTargets = new Set<string>()
        for (const cell of table.header as unknown as TableCellLike[]) processTableCell(cell, candidates, tableUsedTargets)
        for (const row of table.rows as unknown as TableCellLike[][]) {
          for (const cell of row) processTableCell(cell, candidates, tableUsedTargets)
        }
        continue
      }
      case 'list': {
        const list = token as Tokens.List
        for (const item of list.items) processBlockTokens(item.tokens, candidates, usedTargets)
        continue
      }
      default: {
        const tokenWithChildren = token as TokenWithChildren
        if (tokenWithChildren.tokens?.length) {
          tokenWithChildren.tokens = processInlineTokens(tokenWithChildren.tokens, candidates, usedTargets)
        }
      }
    }
  }
}

/**
 * Inline source wording in 蓍草 is semantically identified by a source quotation
 * immediately followed by a stable [[cite:key]] marker. Quotation marks alone do
 * not trigger protection. The whole source wording is replaced before concept
 * linking and restored as already-rendered inline Markdown afterwards.
 */
function protectCitedInlineQuotes(markdown: string): { markdown: string; fragments: ProtectedSourceQuote[] } {
  const fragments: ProtectedSourceQuote[] = []
  const protectedMarkdown = markdown.replace(CITED_INLINE_QUOTE_PATTERN, (rawQuote) => {
    const placeholder = `@@SHICAOSOURCEQUOTE${fragments.length}@@`
    // Evidence text must not become a navigation surface, even if someone wrote
    // an explicit knowledge link inside the quotation.
    const withoutKnowledgeLinks = rawQuote.replace(KNOWLEDGE_MARKDOWN_LINK_PATTERN, '$1')
    const html = marked.parseInline(withoutKnowledgeLinks, { async: false }) as string
    fragments.push({ placeholder, html })
    return placeholder
  })
  return { markdown: protectedMarkdown, fragments }
}

function restoreProtectedQuotes(html: string, fragments: ProtectedSourceQuote[]): string {
  let restored = html
  for (const fragment of fragments) {
    restored = restored.replaceAll(fragment.placeholder, fragment.html)
  }
  return restored
}

/**
 * Render Markdown while automatically linking known knowledge concepts.
 *
 * Policy:
 * - explicit knowledge links remain authoritative;
 * - the current entry never links to itself;
 * - prose and lists de-duplicate auto-links per section; tables use an independent per-table scope;
 * - table auto-linking only applies when the whole cell exactly matches one concept label;
 * - visual emphasis (strong/em/del) does not block concept linking;
 * - cited source quotations, blockquotes, code, headings and raw HTML are protected;
 * - a quotation mark by itself is not enough to classify text as a source quotation;
 * - ambiguous labels shared by multiple entries are never auto-linked.
 */
export function renderKnowledgeMarkdown(
  markdown: string,
  entries: LinkableKnowledgeEntry[],
  currentEntryId?: string
): string {
  const { markdown: protectedMarkdown, fragments } = protectCitedInlineQuotes(markdown)
  const candidates = buildCandidates(entries, currentEntryId)
  if (!candidates.length) {
    const html = marked.parse(protectedMarkdown, { async: false }) as string
    return restoreProtectedQuotes(html, fragments)
  }

  const tokens = marked.lexer(protectedMarkdown)
  processBlockTokens(tokens, candidates, new Set(currentEntryId ? [currentEntryId] : []))
  return restoreProtectedQuotes(marked.parser(tokens), fragments)
}
