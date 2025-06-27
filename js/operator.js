"use strict";
// Arithmetic Operators (+, -, *, /, %)
// TypeScript infers number types for results
const addition = 10 + 5;
const subtraction = 10 - 5;
const division = 10 / 5;
const multiplication = 10 * 5;
const modulus = 10 % 3;
console.log(addition, subtraction, division, multiplication, modulus);
// Comparison Operators (==, ===, !=, !==)
// Convert string to number first
const strNumber = "6";
const numNumber = 5;
const compare = numNumber === Number(strNumber);
console.log(compare);
// Logical Operators (&&, ||, !)
// TypeScript maintains boolean type safety
const andResult = true && false; // false
const orResult = true || false; // true
const notResult = !true; // false
console.log(andResult, orResult, notResult);
// Assignment Operators (=, +=, -=)
let count = 10;
count += 5;
console.log(count);
// Ternary Operator
const marks = 75;
const result = marks >= 35 ? "Pass" : "Fail";
console.log(result); // "Pass"
