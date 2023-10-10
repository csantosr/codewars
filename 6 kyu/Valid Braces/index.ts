type OPEN_BRACES = "{" | "[" | "(";
type CLOSE_BRACES = "}" | "]" | ")";

const MAP_BRACES: Record<CLOSE_BRACES, OPEN_BRACES> = {
  "}": "{",
  "]": "[",
  ")": "(",
}

export function validBraces(braces: string): boolean {
  let stack: Array<CLOSE_BRACES | OPEN_BRACES> = [];
  for (let i = 0; i < braces.length; i++) {
    const brace: CLOSE_BRACES | OPEN_BRACES = braces[i] as CLOSE_BRACES | OPEN_BRACES;
    if (["{", "[", "("].includes(brace)) stack.push(brace);
    else {
      const last = stack.pop();
      if (!last || MAP_BRACES[brace as CLOSE_BRACES] !== last) return false
    }
  }
  return stack.length === 0;
}