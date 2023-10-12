type Partitions = number[][];
type Memory = Partitions[];

const recursivePart = (n: number, mem: Memory): Partitions => {
  if (n === 1) return [[1]];
  if (mem[n]) {
    return mem[n];
  }
  
  let partitions: Partitions = [[n]];
  for(let i = n - 1; i >= 1; i--) {
    const iParts = recursivePart(n-i, mem)
      .filter((p) => p[0] <= i)
      .map((p) => [i, ...p])
    partitions = partitions.concat(iParts)
  }
  mem[n] = partitions;

  return partitions;
}

export const part = (n:number): string => {

  const mem: Memory = Array(n).fill(null);
  const partitions = recursivePart(n, mem)
  const products = partitions
    .map((p) =>
      p.reduce((acc, curr) => acc*curr, 1)
    )
    .filter((prod, index, arr) => arr.indexOf(prod) === index)
    .sort((a,b) => a-b);

  const range = products[products.length - 1] - products[0];
  const avg = products.reduce((acc, curr) => acc+curr, 0) / products.length;
  const median = products.length % 2 === 0
    ? (products[(products.length/2)-1] + products[((products.length/2) + 1) -1]) / 2
    : products[((products.length + 1)/2)-1];

  return `Range: ${range} Average: ${avg.toFixed(2)} Median: ${median.toFixed(2)}`
}

console.log(part(10))