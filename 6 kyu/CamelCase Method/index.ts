export function camelCase(str: string): string {
  return str.split(' ').map((x) => x && (x[0].toUpperCase() + x.slice(1).toLowerCase())).join('')
}