export function interpreter(code: string, tape: string): string {
  let memPoint = 0, insPoint = 0;
  let memory = [...tape].map(Number);
  const cleanCode = [...code].filter((c) => ['>', '<', '*', '[', ']'].includes(c));

  while (insPoint < cleanCode.length) {
    const command = cleanCode[insPoint];
    switch(command) {
      case '>':
        memPoint++;
        if (memPoint >= memory.length) return memory.join('');
        break;
      case '<':
        memPoint--;
        if (memPoint < 0) return memory.join('');
        break;
      case '*':
        memory[memPoint] = memory[memPoint] === 0 ? 1 : 0;
        break;
      case '[':
        if (memory[memPoint] === 0) {
          let nested = 0;
          insPoint++;
          while(cleanCode[insPoint] !== ']' || nested !== 0) {
            if (cleanCode[insPoint] === '[') nested++;
            if (cleanCode[insPoint] === ']') nested--;
            insPoint++;
          }
        }
        break;
      case ']':
        if (memory[memPoint] !== 0) {
          let nested = 0;
          insPoint--;
          while(cleanCode[insPoint] !== '[' || nested !== 0) {
            if (cleanCode[insPoint] === ']') nested++;
            if (cleanCode[insPoint] === '[') nested--;
            insPoint--;
          }
        }
        break;
    }
    insPoint++;
  }
  return memory.join('');
}

console.log(interpreter("*", "00101100"))