import type { KnowledgeReference } from '../schema'

const REFERENCE_PATTERN = /\[\[([a-z0-9.-]+)\|([^\]]+)\]\]/gi

export function extractKnowledgeReferences(text: string): KnowledgeReference[] {
  const references: KnowledgeReference[] = []
  for (const match of text.matchAll(REFERENCE_PATTERN)) {
    references.push({
      raw: match[0],
      targetId: match[1],
      label: match[2],
      index: match.index ?? 0
    })
  }
  return references
}

export function transformKnowledgeReferences(
  text: string,
  hrefFactory: (targetId: string) => string
): string {
  return text.replace(REFERENCE_PATTERN, (_raw, targetId: string, label: string) => {
    return `[${label}](${hrefFactory(targetId)})`
  })
}
