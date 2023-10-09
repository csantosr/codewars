const isPrime = (n: number): boolean => {
  let isP = true;
  for (let d = 2; d * d <= n; d++) {
    if (n % d === 0) {
      isP = false;
      break;
    }
  }
  return isP;
}

const nextPrime = (p: number): number => {
  for (let i = p + 1; ; i++) {
    if (isPrime(i)) {
      return i;
    }
  }
}

export const gap = (g: number, m: number, n: number): number[] | null => {
  let current = isPrime(m) ? m : nextPrime(m), nextP = nextPrime(m);
  while (nextP <= n) {
    if (nextP - current === g) {
      return [current, nextP];
    }
    current = nextP;
    nextP = nextPrime(current)
  }
  return null
}

const testing = (g: number, m: number, n: number, result: number[] | null) => {
  console.log(gap(g, m, n), result);
}

testing(2, 100, 110, [101, 103]);
testing(4, 100, 110, [103, 107]);
testing(6, 100, 110, null);
testing(8, 300, 400, [359, 367]);
testing(10, 300, 400, [337, 347]);