export function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter( i => !b.includes(i) );
}