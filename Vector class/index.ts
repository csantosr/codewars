export class Vector {
  comp: number[];
  constructor(components: number[]) {
    this.comp = components;
  }
  
  add(v: Vector): Vector {
    if (v.comp.length !== this.comp.length) throw new Error('Not the same dimensions');
    return new Vector(v.comp.map((x, idx) => x + this.comp[idx]));
  }

  subtract(v: Vector): Vector {
    if (v.comp.length !== this.comp.length) throw new Error('Not the same dimensions');
    return new Vector(v.comp.map((x, idx) => this.comp[idx] - x));
  }

  dot(v: Vector): number {
    if (v.comp.length !== this.comp.length) throw new Error('Not the same dimensions');
    return v.comp.map((x, idx) => this.comp[idx] * x).reduce((a, c) => a+c, 0);
  }

  norm(): number {
    return Math.sqrt(
      this.comp.map((x) => x*x).reduce((a, c) => a+c)
    )
  }

  equals(v: Vector): boolean {
    return v.comp.every((x, idx) => x===this.comp[idx])
  }

  toString(): string {
    return `(${this.comp.join(',')})`
  }
};