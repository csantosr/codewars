export function isInteresting(n: number, awesomePhrases: number[], checkBack = true): number {
  if (n < 98) return 0;
  if (n < 100) return 1;
  const numberList = [...String(n)].map(Number);

  // Any digit followed by all zeros
  const [first, ...lastDigits] = numberList;
  if (lastDigits.every((d) => d === 0)) {
    return 2;
  }

  // Every digit is the same number
  if (lastDigits.every((d) => d === first)) {
    return 2;
  }

  // The digits are sequential, incementing
  if (first <= 7) {
    let pointer = first + 1;
    const isIncrementing = lastDigits.every((d, idx) => {
      if (d !== pointer) return false;
      pointer = (pointer+1) % 10;
      return !(pointer === 1 && (idx !== 0 && idx !== lastDigits.length - 1))
    });
    if (isIncrementing) return 2;
  }

  // The digits are sequential, decrementing
  if (first >= 3) {
    let pointer = first - 1;
    const isDecrementing = lastDigits.every((d, i) => {
      if (d !== pointer) return false;
      pointer--;
      return !(pointer === -1 && i !== lastDigits.length - 1);
    });
    if (isDecrementing) return 2;
  }

  let isPalindrome = true;
  for (let i = 0; i < Math.floor(numberList.length / 2); i++) {
    if (numberList[i] !== numberList[numberList.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }
  if (isPalindrome) return 2;

  if (awesomePhrases.includes(n)) return 2;

  if (checkBack && (isInteresting(n+1, awesomePhrases, false) === 2 || isInteresting(n+2, awesomePhrases, false) === 2)) {
    return 1;
  }
  return 0;
}

// "boring" numbers
console.log(isInteresting(3, [1337, 256]) , 0);
console.log(isInteresting(3236, [1337, 256]), 0);

// progress as we near an "interesting" number
console.log(isInteresting(11207, []), 0);
console.log(isInteresting(11208, []), 0);
console.log(isInteresting(11209, []), 1);
console.log(isInteresting(11210, []), 1);
console.log(isInteresting(11211, []), 2);
console.log(isInteresting(999996, []), 100);

// nearing a provided "awesome phrase"
console.log(isInteresting(1335, [1337, 256]), 1);
console.log(isInteresting(1336, [1337, 256]), 1);
console.log(isInteresting(1337, [1337, 256]), 2);