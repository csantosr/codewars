export const findOdd = (xs: number[]): number => {
  return [...new Set(xs)].find((x) => xs.filter(y => y===x).length % 2 === 1) ?? 0;
};