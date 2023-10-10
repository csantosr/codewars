const ALPH = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/']

const chunksString = (str: string, size = 24): string[] => {
  const chunks: string[] = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.substring(i, i + size))
  }
  return chunks;
}

const chunkToBase64 = (str: string): string => {
  return chunksString(str, 6).map((b) => ALPH[parseInt(b.padEnd(6, '0'), 2)]).join('');
}

export function toBase64(str: string): string {
  return chunkToBase64(
    [...str]
      .map(c => c.charCodeAt(0).toString(2).padStart(8, '0'))
      .join('')
  );
}

export function fromBase64(str: string): any {
  return chunksString(
    [...str]
      .map((c) => ALPH.indexOf(c).toString(2).padStart(6, '0'))
      .join(''),
    8
  )
    .map((c) => String.fromCharCode(parseInt(c, 2)))
    .join('')
}

console.log(toBase64('Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.'))
console.log(fromBase64(
  toBase64('Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.')
))