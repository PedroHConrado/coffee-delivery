export function transformName(name: string) {
  return name
    .trim()
    .split(' ')
    .map((word) => {
      return word[0].toLocaleUpperCase().concat(word.substring(1))
    })
    .join(' ')
}
