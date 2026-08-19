export interface PinyinTitleUnit {
  character: string
  syllable?: string
}

const isHanCharacter = (character: string) => /\p{Script=Han}/u.test(character)

export function buildPinyinTitleUnits(title: string, pinyin?: string) {
  const characters = Array.from(title)
  const syllables = pinyin?.trim().split(/\s+/).filter(Boolean) ?? []
  const hanCount = characters.filter(isHanCharacter).length
  const canAlign = syllables.length > 0 && syllables.length === hanCount

  if (!canAlign) {
    return {
      canAlign: false,
      units: characters.map((character) => ({ character })) satisfies PinyinTitleUnit[]
    }
  }

  let syllableIndex = 0
  const units = characters.map((character) => {
    if (!isHanCharacter(character)) return { character }

    const unit = { character, syllable: syllables[syllableIndex] }
    syllableIndex += 1
    return unit
  }) satisfies PinyinTitleUnit[]

  return { canAlign: true, units }
}
