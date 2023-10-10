export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
  const base = [a, b, c]
  if (n <= 3) return base.splice(0, n); 
  for (let i = 3; i < n; i++) {
    base.push(base[i-1] + base[i-2] + base[i-3])
  }
  return base;
}