// Arithmetic Operators (+, -, *, /, %)
// TypeScript infers number types for results
const addition: number = 10 + 5;         
const subtraction: number = 10 - 5;      
const division: number = 10 / 5;        
const multiplication: number = 10 * 5;    
const modulus: number = 10 % 3;        

console.log(addition, subtraction, division, multiplication, modulus);

// Comparison Operators (==, ===, !=, !==)
// Convert string to number first
const strNumber: string = "6";
const numNumber: number = 5;
const compare:boolean = numNumber === Number(strNumber);
console.log(compare);
// Logical Operators (&&, ||, !)
// TypeScript maintains boolean type safety
const andResult: boolean = true && false;     // false
const orResult: boolean = true || false;      // true
const notResult: boolean = !true;             // false

console.log(andResult, orResult, notResult);

// Assignment Operators (=, +=, -=)
let count: number = 10;
count += 5; 
console.log(count); 

// Ternary Operator
const marks: number = 75;
const result: string = marks >= 35 ? "Pass" : "Fail";
console.log(result);  // "Pass"