import {
  CHANGSHENG_STATES,
  DIZHI_ORDER,
  FOUR_SEASON_ORDER,
  LIUCHONG,
  LIUHE,
  SANHE,
  SANHUI,
  TIANGAN_ORDER,
  XIANGHAI,
  XIANGXING,
  getBinaryRelationPartner,
  getCanggan,
  getDizhiWuxingRelations,
  getFourSeasonalStates,
  getChangshengByBranch,
  getChangshengByStem,
  getChangshengTable,
  getSanhuiByBranch,
  getSanheByBranch,
  getSexagenaryByBranch,
  getXiangxingFrom,
  getXuns,
  type BinaryDizhiRelationType,
  type Dizhi,
  type Tiangan,
  type XiangxingEdge
} from '@/knowledge/public-api'

const STRUCTURED_FACT_PATTERN = /\[\[fact:([a-z0-9.-]+)(?:\|([^\]]+))?\]\]/gi

const tianganSet = new Set<string>(TIANGAN_ORDER)
const dizhiSet = new Set<string>(DIZHI_ORDER)

function asTiangan(value: string | undefined): Tiangan {
  const normalized = value?.trim() ?? ''
  if (!tianganSet.has(normalized)) throw new Error(`未知天干事实参数：${normalized || '(空)'}`)
  return normalized as Tiangan
}

function asDizhi(value: string | undefined): Dizhi {
  const normalized = value?.trim() ?? ''
  if (!dizhiSet.has(normalized)) throw new Error(`未知地支事实参数：${normalized || '(空)'}`)
  return normalized as Dizhi
}

function markdownTable(headers: readonly string[], rows: readonly (readonly string[])[]): string {
  return [
    `| ${headers.join(' | ')} |`,
    `|${headers.map(() => '---').join('|')}|`,
    ...rows.map((row) => `| ${row.join(' | ')} |`)
  ].join('\n')
}

function renderChangshengTable(): string {
  const table = getChangshengTable()
  return markdownTable(
    ['天干', ...DIZHI_ORDER],
    table.map(({ tiangan, states }) => [
      `**${tiangan}**`,
      ...states.map(({ state }) => state)
    ])
  )
}

function renderChangshengByStem(raw: string | undefined): string {
  const tiangan = asTiangan(raw)
  const byBranch = new Map(getChangshengByStem(tiangan).map(({ dizhi, state }) => [state, dizhi]))
  return markdownTable(
    ['状态', '地支'],
    CHANGSHENG_STATES.map((state) => [state, byBranch.get(state) ?? ''])
  )
}

function renderChangshengByBranch(raw: string | undefined): string {
  const dizhi = asDizhi(raw)
  return markdownTable(
    ['天干', `在${dizhi}所处状态`],
    getChangshengByBranch(dizhi).map(({ tiangan, state }) => [tiangan, state])
  )
}

function renderCangganTable(): string {
  return markdownTable(
    ['地支', '藏干'],
    DIZHI_ORDER.map((dizhi) => [dizhi, getCanggan(dizhi).join('、')])
  )
}

function renderCangganByBranch(raw: string | undefined): string {
  const dizhi = asDizhi(raw)
  return `${dizhi}藏**${getCanggan(dizhi).join('、')}**`
}

function renderSexagenaryTable(): string {
  return markdownTable(
    ['旬', '十组干支'],
    getXuns().map((xun) => [xun.name, xun.entries.map((entry) => entry.name).join('、')])
  )
}

function renderSexagenaryByBranch(raw: string | undefined): string {
  const dizhi = asDizhi(raw)
  return `**${getSexagenaryByBranch(dizhi).map((entry) => entry.name).join('、')}**`
}

function renderWangxiangSeasonsTable(): string {
  const rows = getFourSeasonalStates()
  return markdownTable(
    ['时令', '旺', '相', '休', '囚', '死'],
    FOUR_SEASON_ORDER.map((season) => {
      const row = rows.find((item) => item.season === season)
      if (!row) throw new Error(`缺少${season}季旺相休囚死事实`)
      const byState = new Map(Object.entries(row.states).map(([element, state]) => [state, element]))
      return [season, byState.get('旺') ?? '', byState.get('相') ?? '', byState.get('休') ?? '', byState.get('囚') ?? '', byState.get('死') ?? '']
    })
  )
}

function displayDizhiSymbols(symbols: readonly Dizhi[], element: string): readonly Dizhi[] {
  if (element !== '土') return symbols
  const earthOrder: readonly Dizhi[] = ['辰', '戌', '丑', '未']
  return earthOrder.filter((dizhi) => symbols.includes(dizhi))
}

function renderDizhiWuxingRelationsTable(raw: string | undefined): string {
  const dizhi = asDizhi(raw)
  const relation = getDizhiWuxingRelations(dizhi)
  const label = (symbols: readonly Dizhi[], element: string) => `${displayDizhiSymbols(symbols, element).join('、')}${element}`

  return markdownTable(
    ['关系', '地支'],
    [
      [`${dizhi}所生`, label(relation.generates.symbols, relation.generates.element)],
      [`${dizhi}所克`, label(relation.controls.symbols, relation.controls.element)],
      [`生${dizhi}`, label(relation.generatedBy.symbols, relation.generatedBy.element)],
      [`克${dizhi}`, label(relation.controlledBy.symbols, relation.controlledBy.element)]
    ]
  )
}

function renderDizhiWuxingRelationsSummary(raw: string | undefined): string {
  const dizhi = asDizhi(raw)
  const relation = getDizhiWuxingRelations(dizhi)
  const members = (symbols: readonly Dizhi[], element: string) => displayDizhiSymbols(symbols, element).join('、')

  return `即${dizhi}${relation.sourceElement}生${members(relation.generates.symbols, relation.generates.element)}${relation.generates.element}，克${members(relation.controls.symbols, relation.controls.element)}${relation.controls.element}；${members(relation.generatedBy.symbols, relation.generatedBy.element)}${relation.generatedBy.element}生${dizhi}${relation.sourceElement}，${members(relation.controlledBy.symbols, relation.controlledBy.element)}${relation.controlledBy.element}克${dizhi}${relation.sourceElement}`
}

function renderBinaryRelationTable(type: BinaryDizhiRelationType): string {
  const source = type === '六合' ? LIUHE : type === '六冲' ? LIUCHONG : XIANGHAI
  return markdownTable(
    [type],
    source.map(({ members }) => [members.join('、')])
  )
}

function renderBinaryRelationByBranch(type: BinaryDizhiRelationType, raw: string | undefined): string {
  const dizhi = asDizhi(raw)
  const partner = getBinaryRelationPartner(type, dizhi)
  if (!partner) throw new Error(`${dizhi}没有${type}事实`)

  const wording = type === '六合'
    ? `${dizhi}与${partner}六合`
    : type === '六冲'
      ? `${dizhi}与${partner}相冲`
      : `${dizhi}与${partner}相害`

  return `**${wording}**`
}

function xiangxingEdgesByKind(kind: XiangxingEdge['kind']): readonly XiangxingEdge[] {
  return XIANGXING.filter((edge) => edge.kind === kind)
}

function xiangxingMembers(kind: XiangxingEdge['kind']): Dizhi[] {
  const members: Dizhi[] = []
  for (const edge of xiangxingEdgesByKind(kind)) {
    if (!members.includes(edge.from)) members.push(edge.from)
    if (!members.includes(edge.to)) members.push(edge.to)
  }
  return members
}

function renderXiangxingTable(): string {
  const directionalKinds: XiangxingEdge['kind'][] = ['无礼之刑', '无恩之刑', '恃势之刑']
  const rows = directionalKinds.map((kind) => {
    const edges = xiangxingEdgesByKind(kind)
    return [
      xiangxingMembers(kind).join('、'),
      edges.map(({ from, to }) => `${from}刑${to}`).join('；'),
      kind
    ]
  })

  const selfEdges = xiangxingEdgesByKind('自刑')
  rows.push([
    selfEdges.map(({ from }) => from).join('、'),
    selfEdges.map(({ from }) => `${from}见${from}`).join('；'),
    '自刑'
  ])

  return markdownTable(['结构', '相刑方向', '传统名称'], rows)
}

function renderXiangxingSelf(): string {
  const selfEdges = xiangxingEdgesByKind('自刑')
  return `**${selfEdges.map(({ from }) => `${from}见${from}`).join('、')}**`
}

function renderXiangxingByBranch(raw: string | undefined): string {
  const dizhi = asDizhi(raw)
  const outgoing = getXiangxingFrom(dizhi)
  if (!outgoing.length) throw new Error(`${dizhi}没有相刑事实`)

  const kind = outgoing[0].kind
  if (kind === '自刑') return `**${dizhi}自刑**`

  const members = xiangxingMembers(kind)
  return members.length === 2
    ? `**${members[0]}与${members[1]}相刑**`
    : `**${members.join('、')}三支相刑**`
}

function renderSanheTable(): string {
  return markdownTable(
    ['三合', '五行'],
    SANHE.map(({ members, element }) => [members.join('、'), element])
  )
}

function renderSanheShengWangKuTable(): string {
  return markdownTable(
    ['五行', '生', '旺', '库（墓）'],
    SANHE.map(({ members, element }) => [element, members[0], members[1], members[2]])
  )
}

function renderSanheByBranch(raw: string | undefined): string {
  const dizhi = asDizhi(raw)
  const group = getSanheByBranch(dizhi)
  if (!group) throw new Error(`${dizhi}没有三合事实`)
  return `**${group.members.join('、')}三合${group.element}局**`
}

function renderSanheRoleByBranch(raw: string | undefined): string {
  const dizhi = asDizhi(raw)
  const group = getSanheByBranch(dizhi)
  if (!group) throw new Error(`${dizhi}没有三合事实`)
  const index = group.members.indexOf(dizhi)
  const role = group.roles[index]
  if (!role) throw new Error(`${dizhi}在三合组中没有生旺库角色`)

  return `在生、旺、库的解释中，${group.members[0]}为${group.element}生，${group.members[1]}为${group.element}旺，${group.members[2]}为${group.element}库，因此${dizhi}在${group.members.join('、')}三合中居${group.element}之${role}位。`
}

function renderSanhuiTable(): string {
  return markdownTable(
    ['三会（方合）', '方位', '五行'],
    SANHUI.map(({ members, direction, element }) => [members.join('、'), direction, element])
  )
}

function renderSanhuiByBranch(raw: string | undefined): string {
  const dizhi = asDizhi(raw)
  const group = getSanhuiByBranch(dizhi)
  if (!group) throw new Error(`${dizhi}没有三会事实`)
  return `**${group.members.join('、')}三会${group.direction}${group.element}**`
}

export function renderStructuredFactMarker(factId: string, argument?: string): string {
  switch (factId) {
    case 'changsheng.table':
      return renderChangshengTable()
    case 'changsheng.by-stem':
      return renderChangshengByStem(argument)
    case 'changsheng.by-branch':
      return renderChangshengByBranch(argument)
    case 'canggan.table':
      return renderCangganTable()
    case 'canggan.by-branch':
      return renderCangganByBranch(argument)
    case 'ganzhi.sexagenary-table':
      return renderSexagenaryTable()
    case 'ganzhi.by-branch':
      return renderSexagenaryByBranch(argument)
    case 'wangxiang.seasons-table':
      return renderWangxiangSeasonsTable()
    case 'dizhi.wuxing-relations.table-by-branch':
      return renderDizhiWuxingRelationsTable(argument)
    case 'dizhi.wuxing-relations.summary-by-branch':
      return renderDizhiWuxingRelationsSummary(argument)
    case 'dizhi.liuhe.table':
      return renderBinaryRelationTable('六合')
    case 'dizhi.liuhe.by-branch':
      return renderBinaryRelationByBranch('六合', argument)
    case 'dizhi.liuchong.table':
      return renderBinaryRelationTable('六冲')
    case 'dizhi.liuchong.by-branch':
      return renderBinaryRelationByBranch('六冲', argument)
    case 'dizhi.xianghai.table':
      return renderBinaryRelationTable('相害')
    case 'dizhi.xianghai.by-branch':
      return renderBinaryRelationByBranch('相害', argument)
    case 'dizhi.xiangxing.table':
      return renderXiangxingTable()
    case 'dizhi.xiangxing.self':
      return renderXiangxingSelf()
    case 'dizhi.xiangxing.by-branch':
      return renderXiangxingByBranch(argument)
    case 'dizhi.sanhe.table':
      return renderSanheTable()
    case 'dizhi.sanhe.sheng-wang-ku':
      return renderSanheShengWangKuTable()
    case 'dizhi.sanhe.by-branch':
      return renderSanheByBranch(argument)
    case 'dizhi.sanhe.role-by-branch':
      return renderSanheRoleByBranch(argument)
    case 'dizhi.sanhui.table':
      return renderSanhuiTable()
    case 'dizhi.sanhui.by-branch':
      return renderSanhuiByBranch(argument)
    default:
      throw new Error(`未知结构化事实标记：${factId}`)
  }
}

export function renderStructuredFacts(markdown: string): string {
  return markdown.replace(STRUCTURED_FACT_PATTERN, (_match, factId: string, argument?: string) =>
    renderStructuredFactMarker(factId, argument)
  )
}
