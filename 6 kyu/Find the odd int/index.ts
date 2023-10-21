export const findOdd = (xl: number[]): number => {
  return [...new Set(xl)].find((x) => xl.filter(y => y===x).length % 2 === 1) ?? 0;
};