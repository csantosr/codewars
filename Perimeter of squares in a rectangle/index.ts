export const perimeter = (n:number):number => {
  if (n === 0) return 4;
  const fibo = [4, 4];
  for(let i = 2; i <= n; i++) {
    fibo.push((fibo[fibo.length-1]??0) + (fibo[fibo.length-2]??0))
  }
  return fibo.reduce((a, c) => a+c);
}

console.log(perimeter(5));