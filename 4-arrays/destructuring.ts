// Basic array destructuring
const [first, second]: [number, number] = [10, 20];
console.log(first); // 10

// Skipping items
const [,, third]: [number, number, number] = [1, 2, 3];
console.log(third); // 3

// Rest pattern
const [head, ...tail]: [number, ...number[]] = [1, 2, 3, 4];
console.log(tail); // [2, 3, 4]

// Default values
const [d = 1, e = 2]: [number?, number?] = [undefined, 5];
console.log(d); // 1
console.log(e); // 5

// Swapping variables
let x1: number = 1, y1: number = 2;
[x1, y1] = [y1, x1]; // x = 2, y = 1
console.log(x1, y1);
