export function nextBigger(n: number): number {
  const numbers = [...String(n)].map(Number).reverse();
  let flag = false;
  for (let i=0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i+1]) {
      [numbers[i], numbers[i+1]] = [numbers[i+1], numbers[i]];
      flag = true;
      break;
    }
  }
  return flag ? Number(numbers.reverse().join('')) : -1;
}

console.log(nextBigger(12))
console.log(nextBigger(513))
console.log(nextBigger(2017))

console.log(nextBigger(9))
console.log(nextBigger(111))
console.log(nextBigger(531))