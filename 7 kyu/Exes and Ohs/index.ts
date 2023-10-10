export function xo(str: string) : boolean {
  const arr = [...str.toLowerCase()];
  return arr.filter((c) => c==='o').length === arr.filter((c) => c === 'x').length
}