"use strict";
// Basic array destructuring
const [first, second] = [10, 20];
console.log(first); // 10
// Skipping items
const [, , third] = [1, 2, 3];
console.log(third); // 3
// Rest pattern
const [head, ...tail] = [1, 2, 3, 4];
console.log(tail); // [2, 3, 4]
// Default values
const [d = 1, e = 2] = [undefined, 5];
console.log(d); // 1
console.log(e); // 5
// Swapping variables
let x1 = 1, y1 = 2;
[x1, y1] = [y1, x1]; // x = 2, y = 1
console.log(x1, y1);
