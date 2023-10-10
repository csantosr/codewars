const RADIOUS = 3390;

const gradesToRad = (grad: string): number => {
  return (['N', 'E'].includes(grad[grad.length - 1]) ? 1 : -1) *
    (parseFloat(grad.split('°')[0]) * Math.PI / 180);
}

const hav = (rad: number) => Math.pow(Math.sin(rad / 2), 2);

export function saveMark(c1: string, c2: string): string {
  const [lat1, lon1] = c1.split(',').map(gradesToRad);
  const [lat2, lon2] = c2.split(',').map(gradesToRad);
  const d = 2*RADIOUS*Math.asin(Math.sqrt(hav(lat2-lat1)+Math.cos(lat1)*Math.cos(lat2)*hav(lon1-lon2)))
  return `${Math.floor(d/10) * 10}KM`;
}

console.log(saveMark('48.23° N, 89.10° E', '48.84° N, 89.40° E'), '30KM');
console.log(saveMark('52.10° S, 56.25° W', '52.10° N, 56.25° W'), '6160KM');
console.log(saveMark('11.28° S, 78.98° E', '21.28° S, 75.56° E'), '620KM');
