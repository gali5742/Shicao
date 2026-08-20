import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { renderStructuredFactMarker, renderStructuredFacts } from '@/components/knowledge/structuredFactMarkdown'

async function source(path: string) {
  return readFile(resolve(process.cwd(), path), 'utf8')
}

describe('structured fact Markdown rendering', () => {
  it('十二长生总表由统一 facts 生成', () => {
    const markdown = renderStructuredFactMarker('changsheng.table')
    expect(markdown).toContain('| 天干 | 子 | 丑 | 寅 | 卯 | 辰 | 巳 | 午 | 未 | 申 | 酉 | 戌 | 亥 |')
    expect(markdown).toContain('| **甲** | 沐浴 | 冠带 | 临官 | 帝旺 | 衰 | 病 | 死 | 墓 | 绝 | 胎 | 养 | 长生 |')
    expect(markdown).toContain('| **癸** | 临官 | 冠带 | 沐浴 | 长生 | 养 | 胎 | 绝 | 墓 | 死 | 病 | 衰 | 帝旺 |')
  })

  it('天干页与地支页的十二长生表由同一矩阵分别生成行列视图', () => {
    const byStem = renderStructuredFactMarker('changsheng.by-stem', '甲')
    const byBranch = renderStructuredFactMarker('changsheng.by-branch', '子')

    expect(byStem).toContain('| 长生 | 亥 |')
    expect(byStem).toContain('| 死 | 午 |')
    expect(byBranch).toContain('| 甲 | 沐浴 |')
    expect(byBranch).toContain('| 壬 | 帝旺 |')
  })

  it('藏干总表与单支文本都读取统一藏干 facts', () => {
    expect(renderStructuredFactMarker('canggan.table')).toContain('| 辰 | 乙、戊、癸 |')
    expect(renderStructuredFactMarker('canggan.by-branch', '亥')).toBe('亥藏**壬、甲**')
  })

  it('六十甲子总表与单支列表都由统一周期生成', () => {
    const table = renderStructuredFactMarker('ganzhi.sexagenary-table')
    expect(table).toContain('| 甲子旬 | 甲子、乙丑、丙寅、丁卯、戊辰、己巳、庚午、辛未、壬申、癸酉 |')
    expect(table).toContain('| 甲寅旬 | 甲寅、乙卯、丙辰、丁巳、戊午、己未、庚申、辛酉、壬戌、癸亥 |')
    expect(renderStructuredFactMarker('ganzhi.by-branch', '子')).toBe('**甲子、丙子、戊子、庚子、壬子**')
  })

  it('事实标记可以嵌入既有 Markdown，周围脚注与标点保持不变', () => {
    const markdown = renderStructuredFacts('[[fact:canggan.by-branch|子]][[cite:zi-canggan-1]]。')
    expect(markdown).toBe('子藏**癸**[[cite:zi-canggan-1]]。')
  })

  it('未知事实标记与非法参数立即失败，避免静默生成错误页面', () => {
    expect(() => renderStructuredFactMarker('unknown.fact')).toThrow('未知结构化事实标记')
    expect(() => renderStructuredFactMarker('canggan.by-branch', '甲')).toThrow('未知地支事实参数')
  })

  it('首批迁移页面不再手工维护十二长生、藏干和六十甲子重复表', async () => {
    const changsheng = await source('src/knowledge/entries/changsheng/overview/table.md')
    const canggan = await source('src/knowledge/entries/dizhi/canggan/table.md')
    const jia = await source('src/knowledge/entries/tiangan/jia/changsheng.md')
    const zi = await source('src/knowledge/entries/dizhi/zi/related.md')
    const jiazi = await source('src/knowledge/entries/ganzhi/sequence/jiazi.md')

    expect(changsheng).toContain('[[fact:changsheng.table]]')
    expect(changsheng).not.toContain('| **甲** | 沐浴 |')
    expect(canggan).toContain('[[fact:canggan.table]]')
    expect(canggan).not.toContain('| 子 | 癸 |')
    expect(jia).toContain('[[fact:changsheng.by-stem|甲]]')
    expect(jia).not.toContain('| 长生 | 亥 |')
    expect(zi).toContain('[[fact:changsheng.by-branch|子]]')
    expect(zi).toContain('[[fact:ganzhi.by-branch|子]]')
    expect(zi).not.toContain('| 甲 | 沐浴 |')
    expect(jiazi).toContain('[[fact:ganzhi.sexagenary-table]]')
    expect(jiazi).not.toContain('甲子、乙丑、丙寅、丁卯')
  })

  it('地支二元关系总表与单支事实都读取统一关系 facts', () => {
    expect(renderStructuredFactMarker('dizhi.liuhe.table')).toContain('| 子、丑 |')
    expect(renderStructuredFactMarker('dizhi.liuchong.table')).toContain('| 寅、申 |')
    expect(renderStructuredFactMarker('dizhi.xianghai.table')).toContain('| 酉、戌 |')
    expect(renderStructuredFactMarker('dizhi.liuhe.by-branch', '丑')).toBe('**丑与子六合**')
    expect(renderStructuredFactMarker('dizhi.liuchong.by-branch', '申')).toBe('**申与寅相冲**')
    expect(renderStructuredFactMarker('dizhi.xianghai.by-branch', '亥')).toBe('**亥与申相害**')
  })

  it('相刑显示保留循环方向、自刑与单支原有措辞', () => {
    const table = renderStructuredFactMarker('dizhi.xiangxing.table')
    expect(table).toContain('| 子、卯 | 子刑卯；卯刑子 | 无礼之刑 |')
    expect(table).toContain('| 寅、巳、申 | 寅刑巳；巳刑申；申刑寅 | 无恩之刑 |')
    expect(table).toContain('| 丑、戌、未 | 丑刑戌；戌刑未；未刑丑 | 恃势之刑 |')
    expect(table).toContain('| 辰、午、酉、亥 | 辰见辰；午见午；酉见酉；亥见亥 | 自刑 |')
    expect(renderStructuredFactMarker('dizhi.xiangxing.self')).toBe('**辰见辰、午见午、酉见酉、亥见亥**')
    expect(renderStructuredFactMarker('dizhi.xiangxing.by-branch', '子')).toBe('**子与卯相刑**')
    expect(renderStructuredFactMarker('dizhi.xiangxing.by-branch', '巳')).toBe('**寅、巳、申三支相刑**')
    expect(renderStructuredFactMarker('dizhi.xiangxing.by-branch', '辰')).toBe('**辰自刑**')
  })

  it('三合、三会保持完整组合、五行、方位与生旺库角色', () => {
    expect(renderStructuredFactMarker('dizhi.sanhe.table')).toContain('| 申、子、辰 | 水 |')
    expect(renderStructuredFactMarker('dizhi.sanhe.sheng-wang-ku')).toContain('| 水 | 申 | 子 | 辰 |')
    expect(renderStructuredFactMarker('dizhi.sanhe.by-branch', '子')).toBe('**申、子、辰三合水局**')
    expect(renderStructuredFactMarker('dizhi.sanhe.role-by-branch', '子')).toBe(
      '在生、旺、库的解释中，申为水生，子为水旺，辰为水库，因此子在申、子、辰三合中居水之旺位。'
    )
    expect(renderStructuredFactMarker('dizhi.sanhui.table')).toContain('| 亥、子、丑 | 北方 | 水 |')
    expect(renderStructuredFactMarker('dizhi.sanhui.by-branch', '子')).toBe('**亥、子、丑三会北方水**')
  })

  it('B2 地支关系页面不再手工维护关系组合', async () => {
    const liuhe = await source('src/knowledge/entries/dizhi/liuhe/pairs.md')
    const xiangxing = await source('src/knowledge/entries/dizhi/xiangxing/s2.md')
    const sanhe = await source('src/knowledge/entries/dizhi/sanhe/pairs.md')
    const sanhui = await source('src/knowledge/entries/dizhi/sanhui/pairs.md')
    const zi = await source('src/knowledge/entries/dizhi/zi/relations.md')

    expect(liuhe).toContain('[[fact:dizhi.liuhe.table]]')
    expect(liuhe).not.toContain('| 子、丑 |')
    expect(xiangxing).toContain('[[fact:dizhi.xiangxing.table]]')
    expect(xiangxing).not.toContain('寅刑巳；巳刑申；申刑寅')
    expect(sanhe).toContain('[[fact:dizhi.sanhe.table]]')
    expect(sanhe).not.toContain('| 申、子、辰 | 水 |')
    expect(sanhui).toContain('[[fact:dizhi.sanhui.table]]')
    expect(sanhui).not.toContain('| 亥、子、丑 | 北方 | 水 |')
    expect(zi).toContain('[[fact:dizhi.liuhe.by-branch|子]]')
    expect(zi).toContain('[[fact:dizhi.xiangxing.by-branch|子]]')
    expect(zi).toContain('[[fact:dizhi.sanhe.role-by-branch|子]]')
    expect(zi).toContain('[[fact:dizhi.sanhui.by-branch|子]]')
    expect(zi).not.toContain('**子与丑六合**')
    expect(zi).not.toContain('**申、子、辰三合水局**')
  })

  it('B3 旺相休囚死四时表由当令五行与统一生克规则生成', () => {
    const table = renderStructuredFactMarker('wangxiang.seasons-table')
    expect(table).toContain('| 春 | 木 | 火 | 水 | 金 | 土 |')
    expect(table).toContain('| 夏 | 火 | 土 | 木 | 水 | 金 |')
    expect(table).toContain('| 秋 | 金 | 水 | 土 | 火 | 木 |')
    expect(table).toContain('| 冬 | 水 | 木 | 金 | 土 | 火 |')
  })

  it('B3 单支五行生克表与说明由地支五行和统一生克 facts 派生', () => {
    expect(renderStructuredFactMarker('dizhi.wuxing-relations.table-by-branch', '子')).toContain('| 子所生 | 寅、卯木 |')
    expect(renderStructuredFactMarker('dizhi.wuxing-relations.table-by-branch', '辰')).toContain('| 克辰 | 寅、卯木 |')
    expect(renderStructuredFactMarker('dizhi.wuxing-relations.summary-by-branch', '子')).toBe(
      '即子水生寅、卯木，克巳、午火；申、酉金生子水，辰、戌、丑、未土克子水'
    )
  })

  it('B3 页面不再手工维护旺相休囚死四时结果与单支五行生克派生表', async () => {
    const seasons = await source('src/knowledge/entries/wuxing/wangxiang/seasons.md')
    const zi = await source('src/knowledge/entries/dizhi/zi/relations.md')
    const chen = await source('src/knowledge/entries/dizhi/chen/relations.md')

    expect(seasons).toContain('[[fact:wangxiang.seasons-table]]')
    expect(seasons).not.toContain('| 春 | 木 | 火 | 水 | 金 | 土 |')
    expect(zi).toContain('[[fact:dizhi.wuxing-relations.table-by-branch|子]]')
    expect(zi).toContain('[[fact:dizhi.wuxing-relations.summary-by-branch|子]]')
    expect(zi).not.toContain('| 子所生 | 寅、卯木 |')
    expect(chen).toContain('[[fact:dizhi.wuxing-relations.table-by-branch|辰]]')
    expect(chen).not.toContain('| 克辰 | 寅、卯木 |')
  })

})
