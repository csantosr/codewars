export function isIsogram(str: string): boolean{
  const original = [...(str.toLowerCase())];
  const noRep = new Set(original);
  return original.length === noRep.size;
}