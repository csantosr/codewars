export function rot13(str: string): string {
  return [...str]
    .map((c) => {
      const ascii = c.charCodeAt(0);
      if (ascii >= 65 && ascii <= 90) return String.fromCharCode(((ascii-65+13) % 26) + 65)
      if (ascii >= 97 && ascii <= 122) return String.fromCharCode(((ascii-97+13) % 26) + 97)
      return c;
    })
    .join('')
}

console.log(rot13('Guvf vf zl svefg EBG13 rkprepvfr!'))
