import { describe, expect, it } from 'vitest'
import { renderKnowledgeMarkdown } from '@/components/knowledge/knowledgeMarkdown'

const entries = [
  { id: 'tiangan.overview', title: '天干' },
  { id: 'tiangan.jia', title: '甲' },
  { id: 'tiangan.yi', title: '乙' },
  { id: 'tiangan.ji', title: '己' },
  { id: 'wuxing.wood', title: '木' },
  { id: 'wuxing.overview', title: '五行' },
  { id: 'yinyang.overview', title: '阴阳' }
]

describe('knowledge concept links', () => {
  it('正文自动链接每个已存在概念在当前 section 的第一次普通出现，并跳过当前条目自身', () => {
    const html = renderKnowledgeMarkdown('甲与乙同属木。乙又属木。', entries, 'tiangan.jia')
    expect(html).toContain('甲与<a href="knowledge:tiangan.yi">乙</a>同属<a href="knowledge:wuxing.wood">木</a>')
    expect(html.match(/knowledge:tiangan.yi/g)).toHaveLength(1)
    expect(html.match(/knowledge:wuxing.wood/g)).toHaveLength(1)
    expect(html).not.toContain('knowledge:tiangan.jia')
  })

  it('显式知识链接保持优先，并阻止后续正文再次自动链接同一目标', () => {
    const html = renderKnowledgeMarkdown('[乙](knowledge:tiangan.yi)与甲同属木。后来又提到乙。', entries, 'tiangan.jia')
    expect(html.match(/knowledge:tiangan.yi/g)).toHaveLength(1)
  })

  it('普通加粗和斜体保留视觉样式，同时仍可自动链接概念', () => {
    const html = renderKnowledgeMarkdown('**乙与木**，*阴阳*。', entries, 'tiangan.jia')
    expect(html).toContain('<strong><a href="knowledge:tiangan.yi">乙</a>与<a href="knowledge:wuxing.wood">木</a></strong>')
    expect(html).toContain('<em><a href="knowledge:yinyang.overview">阴阳</a></em>')
  })

  it('紧邻稳定脚注标记的文献原文不参与自动链接，但引文外正文仍可链接', () => {
    const html = renderKnowledgeMarkdown('“**乙木相见**”[[cite:source]]。正文再说乙与木。', entries, 'tiangan.jia')
    const beforeMarker = html.split('[[cite:source]]')[0]
    expect(beforeMarker).toContain('<strong>乙木相见</strong>')
    expect(beforeMarker).not.toContain('knowledge:tiangan.yi')
    expect(beforeMarker).not.toContain('knowledge:wuxing.wood')
    expect(html.match(/knowledge:tiangan.yi/g)).toHaveLength(1)
    expect(html.match(/knowledge:wuxing.wood/g)).toHaveLength(1)
  })

  it('普通中文引号不是文献保护标记，仍按正文处理', () => {
    const html = renderKnowledgeMarkdown('这里说“乙木”，没有脚注。', entries, 'tiangan.jia')
    expect(html).toContain('“<a href="knowledge:tiangan.yi">乙</a><a href="knowledge:wuxing.wood">木</a>”')
  })

  it('blockquote 和代码保持保护，不自动插入概念链接', () => {
    const html = renderKnowledgeMarkdown('> 乙木原文\n\n`乙木`\n\n正文乙木。', entries, 'tiangan.jia')
    expect(html).toContain('<blockquote>')
    expect(html).toContain('乙木原文')
    expect(html).toContain('<code>乙木</code>')
    expect(html.match(/knowledge:tiangan.yi/g)).toHaveLength(1)
    expect(html.match(/knowledge:wuxing.wood/g)).toHaveLength(1)
  })

  it('表格只在整个单元格恰好等于概念名时自动链接，不对子字符串加链接', () => {
    const html = renderKnowledgeMarkdown('| 天干 | 五行生克 |\n|---|---|\n| 乙 | 同五行 |\n| 己 | 同五行 |', entries, 'tiangan.jia')
    expect(html).toContain('href="knowledge:tiangan.overview">天干</a>')
    expect(html).toContain('href="knowledge:tiangan.yi">乙</a>')
    expect(html).toContain('href="knowledge:tiangan.ji">己</a>')
    expect(html).not.toContain('knowledge:wuxing.overview')
  })

  it('表格使用独立于正文的链接范围，正文已经链接过的概念仍可在表格完整单元格中作为导航链接', () => {
    const html = renderKnowledgeMarkdown('正文先提到乙。\n\n| 天干 | 阴阳异同 |\n|---|---|\n| 乙 | 异 |\n| 己 | 异 |', entries, 'tiangan.jia')
    expect(html.match(/knowledge:tiangan.yi/g)).toHaveLength(2)
    expect(html.match(/knowledge:tiangan.ji/g)).toHaveLength(1)
  })

  it('同一张表中同一个 Knowledge ID 只自动链接一次', () => {
    const html = renderKnowledgeMarkdown('| A | B |\n|---|---|\n| 乙 | 乙 |', entries, 'tiangan.jia')
    expect(html.match(/knowledge:tiangan.yi/g)).toHaveLength(1)
  })

  it('同名标签若对应多个条目则不做自动判断', () => {
    const ambiguous = [...entries, { id: 'other.wood', title: '木' }]
    const html = renderKnowledgeMarkdown('这里提到木。', ambiguous, 'tiangan.jia')
    expect(html).not.toContain('knowledge:wuxing.wood')
    expect(html).not.toContain('knowledge:other.wood')
  })
})
