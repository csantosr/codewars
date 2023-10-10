export function narcissistic(value: number): boolean {
  const digits: number[] = [...String(value)].map(Number)
  return value === digits.map((d) => Math.pow(d, digits.length)).reduce((acc, curr) => curr + acc, 0);
}