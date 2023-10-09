type Command = 'n' | 'e' | 's' | 'w' | '*' | '[' | ']';

const createGrid = (w: number, h: number): number[][] =>
  Array(h).fill(null).map(() => Array(w).fill(0));

const printGrid = (grid: number[][]): string =>
  grid.map((row) => row.join('')).join('\r\n');

export function interpreter(code:string, iterations:number, width:number, height:number): string {
  const cleanCode = [...code].filter((c): c is Command => ['n', 'e', 's', 'w', '*', '[', ']'].includes(c))
  const memory = createGrid(width, height);
  const memPoint: {x: number, y: number} = {
    x: 0,
    y: 0,
  };
  let iter = 0, insPoint = 0;
  while(iter < iterations && insPoint < cleanCode.length) {
    const command = cleanCode[insPoint];
    switch(command) {
      case 'n':
        memPoint.y--;
        if (memPoint.y < 0) memPoint.y = height - 1;
        break;
      case 's':
        memPoint.y++;
        if (memPoint.y >= height) memPoint.y = 0;
        break;
      case 'w':
        memPoint.x--;
        if (memPoint.x < 0) memPoint.x = width - 1;
        break;
      case 'e':
        memPoint.x++;
        if (memPoint.x >= width) memPoint.x = 0;
        break;
      case '*':
        memory[memPoint.y][memPoint.x] = memory[memPoint.y][memPoint.x] === 1 ? 0 : 1;
        break;
      case '[':
        if (memory[memPoint.y][memPoint.x] === 0) {
          insPoint++;
          let nested = 0;
          while (cleanCode[insPoint] !== ']' || nested !== 0) {
            if (cleanCode[insPoint] !== '[') nested++;
            if (cleanCode[insPoint] !== ']') nested--;
            insPoint++;
          }
        }
        break;
      case ']':
        if (memory[memPoint.y][memPoint.x] !== 0) {
          insPoint--;
          let nested = 0;
          while (cleanCode[insPoint] !== '[' || nested !== 0) {
            if (cleanCode[insPoint] !== ']') nested++;
            if (cleanCode[insPoint] !== '[') nested--;
            insPoint--;
          }
        }
        break;
    }
    iter++;
    insPoint++;
  }
  return printGrid(memory);
}