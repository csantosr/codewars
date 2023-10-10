export const sqInRect=(l:number, w:number): null|number[] =>{
  if (l === w) return null;
  return recursiveSqInRect(l, w)
}

const recursiveSqInRect = (l: number, w: number): null | number[] => {
  if (l === w) return [l];
  if (l === 0 || w === 0) return [];
  if (l === 1) return Array(w).fill(1);
  if (w === 1) return Array(l).fill(1);
  if (l > w) {
    return [w, ...(recursiveSqInRect(l-w, w) ?? [])];
  } else {
    return [l, ...(recursiveSqInRect(l, w-l) ?? [])];
  }
}