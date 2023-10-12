type Partition = number[];

function generatePartitions(n: number, max?: number): Partition[] {
    if (n === 0) return [[]];
    if (n < 0) return [];
    if (!max || max > n) max = n;

    let partitions: Partition[] = [];
    
    for (let i = max; i >= 1; i--) {
        let subPartitions = generatePartitions(n - i, i);
        subPartitions.forEach(part => {
            partitions.push([i, ...part]);
        });
    }
    return partitions;
}

function prod(n: number): number[] {
    let partitions = generatePartitions(n);
    let products: { [key: number]: boolean } = {};

    partitions.forEach(partition => {
        let product = partition.reduce((a, b) => a * b, 1);
        products[product] = true;
    });

    return Object.keys(products).map(Number).sort((a, b) => a - b);
}

function part(n: number): string {
    let products = prod(n);
    let range = products[products.length - 1] - products[0];
    let average = products.reduce((sum, val) => sum + val, 0) / products.length;

    let median: number;
    if (products.length % 2 === 1) {
        median = products[Math.floor(products.length / 2)];
    } else {
        let mid1 = products[(products.length / 2) - 1];
        let mid2 = products[products.length / 2];
        median = (mid1 + mid2) / 2;
    }

    return `Range: ${range} Average: ${average.toFixed(2)} Median: ${median.toFixed(2)}`;
}

console.log(part(5));
