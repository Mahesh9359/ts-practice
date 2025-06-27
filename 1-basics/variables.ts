// String variable declaration using var (avoid in TypeScript)
var name1: string = "Mahesh";
console.log(name1);

// Number variable with let - allows reassignment
let age: number = 22;
age = 23;
console.log(age);

// Constant value declaration using const
const PI: number = 3.14;
console.log(PI);

// Multiple number variable declarations
let a: number = 5, b: number = 10, c: number = 15;
console.log(a + b + c);

// String variables following camelCase convention
let firstName: string = "Mahesh";
let lastName: string = "Jadhav";
console.log(firstName, lastName);

// Type inference example - TypeScript knows greeting is string
let greeting = "Hello, TypeScript!"; 

// Union type variable accepting string or number
let userId: string | number;
userId = "ABC123";
userId = 123;
console.log(userId,userId);