export interface PinyinTitleUnit {
  character: string
  syllable?: string
}

export interface PinyinTitleRenderResult {
  canAlign: boolean
  units: PinyinTitleUnit[]
}

const isHanCharacter = (character: string) =>
  /\p{Script=Han}/u.test(character)

export function buildPinyinTitleUnits(
  title: string,
  pinyin?: string
): PinyinTitleRenderResult {
  const characters = Array.from(title)
  const syllables = pinyin?.trim().split(/\s+/).filter(Boolean) ?? []
  const hanCount = characters.filter(isHanCharacter).length
  const canAlign = syllables.length > 0 && syllables.length === hanCount

  if (!canAlign) {
    const units: PinyinTitleUnit[] = characters.map((character) => ({
      character,
      syllable: undefined
    }))

    return {
      canAlign: false,
      units
    }
  }

  let syllableIndex = 0

  const units: PinyinTitleUnit[] = characters.map((character) => {
    if (!isHanCharacter(character)) {
      return {
        character,
        syllable: undefined
      }
    }

    const syllable = syllables[syllableIndex]
    syllableIndex += 1

    return {
      character,
      syllable
    }
  })

  return {
    canAlign: true,
    units
  }
}