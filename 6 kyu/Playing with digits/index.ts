export class G964 {

  public static digPow = (n: number, p: number) => {
      const sum = String(n)
        .split('')
        .map((n, idx) => Math.pow(Number(n), idx + p))
        .reduce((a, c) => a+c, 0)
      if (sum/n < 0 || Math.floor(sum/n) !== sum/n) return -1;
      return sum/n;
  }
}