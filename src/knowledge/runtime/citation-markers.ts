import type { KnowledgeCitation } from '../schema'

const CITATION_PATTERN = /\[\[cite:([a-zA-Z0-9._-]+)\]\]/g
const CITATION_AFTER_PUNCTUATION_PATTERN = /([。！？；：，、.!?,;:])\s*\[\[cite:([a-zA-Z0-9._-]+)\]\]/g

export interface ResolvedCitationMarker {
  id: string
  number: number
  citation: KnowledgeCitation
}

export interface CitationMarkerPlacementIssue {
  id: string
  punctuation: string
}

export function extractCitationMarkerIds(content: string): string[] {
  return [...content.matchAll(CITATION_PATTERN)].map((match) => match[1])
}

export function findCitationMarkersAfterPunctuation(content: string): CitationMarkerPlacementIssue[] {
  return [...content.matchAll(CITATION_AFTER_PUNCTUATION_PATTERN)].map((match) => ({
    id: match[2],
    punctuation: match[1]
  }))
}

export function resolveCitationMarkers(content: string, citations: KnowledgeCitation[]): ResolvedCitationMarker[] {
  const definitions = new Map(
    citations
      .filter((citation): citation is KnowledgeCitation & { id: string } => Boolean(citation.id))
      .map((citation) => [citation.id, citation])
  )
  const seen = new Set<string>()
  const result: ResolvedCitationMarker[] = []

  for (const id of extractCitationMarkerIds(content)) {
    if (seen.has(id)) continue
    const citation = definitions.get(id)
    if (!citation) continue
    seen.add(id)
    result.push({ id, number: result.length + 1, citation })
  }

  return result
}

export function listCitationsInMarkerOrder(content: string, citations: KnowledgeCitation[]): KnowledgeCitation[] {
  return resolveCitationMarkers(content, citations).map((item) => item.citation)
}

export function transformCitationMarkers(
  content: string,
  citations: KnowledgeCitation[],
  makeMarker: (marker: ResolvedCitationMarker) => string
): string {
  const markers = new Map(resolveCitationMarkers(content, citations).map((item) => [item.id, item]))
  return content.replace(CITATION_PATTERN, (full, id: string) => {
    const marker = markers.get(id)
    return marker ? makeMarker(marker) : full
  })
}
