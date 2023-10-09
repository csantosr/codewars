export function myFirstInterpreter(code: string):string {
  let memory = 0;
  const cleanCode = [...code].filter((c) => ['+', '.'].includes(c));
  let output = '';

  for (let i = 0; i < cleanCode.length; i++) {
    const command = cleanCode[i];
    if (command === '+') {
      memory++;
      if (memory === 256) memory = 0;
    } else {
      output += String.fromCharCode(memory);
    }
  }
  return output;
}
