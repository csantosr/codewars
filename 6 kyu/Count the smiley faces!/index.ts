function isValidSmile(str: string): boolean {
  if (![':', ';'].includes(str[0])) return false;
  const hasNose = ['-', '~'].includes(str[1]);
  const mouth = str[hasNose ? 2 : 1];
  return [')', 'D'].includes(mouth);
}

export function countSmileys(arr: string[]) {
  return arr.filter(isValidSmile).length;
}