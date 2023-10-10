export function order(words:string):string {
  return words.split(' ')
    .map((x) => ({
      digit: Number(x.match(/\d+/)?.[0] ?? '0'),
      text: x
    }))
    .sort(({digit: a}, {digit: b}) => a - b)
    .map(({text})=> text)
    .join(' ')
}