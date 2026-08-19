import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { buildPinyinTitleUnits } from '../../src/components/knowledge/pinyin-title'

async function source(path: string) {
  return readFile(resolve(process.cwd(), path), 'utf8')
}

describe('PinyinTitle', () => {
  it('括号等标点不占拼音音节，括号内汉字仍正常注音', () => {
    const result = buildPinyinTitleUnits('三会（方合）', 'sān huì fāng hé')

    expect(result.canAlign).toBe(true)
    expect(result.units).toEqual([
      { character: '三', syllable: 'sān' },
      { character: '会', syllable: 'huì' },
      { character: '（' },
      { character: '方', syllable: 'fāng' },
      { character: '合', syllable: 'hé' },
      { character: '）' }
    ])
  })

  it('三会（方合）条目提供完整四字拼音', async () => {
    const entry = await source('src/knowledge/entries/dizhi/sanhui/entry.ts')
    expect(entry).toContain("title: '三会（方合）'")
    expect(entry).toContain("pinyin: 'sān huì fāng hé'")
  })
})
