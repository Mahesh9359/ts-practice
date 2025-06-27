"use strict";
// String variable declaration using var (avoid in TypeScript)
var name1 = "Mahesh";
console.log(name1);
// Number variable with let - allows reassignment
let age = 22;
age = 23;
console.log(age);
// Constant value declaration using const
const PI = 3.14;
console.log(PI);
// Multiple number variable declarations
let a = 5, b = 10, c = 15;
console.log(a + b + c);
// String variables following camelCase convention
let firstName = "Mahesh";
let lastName = "Jadhav";
console.log(firstName, lastName);
// Type inference example - TypeScript knows greeting is string
let greeting = "Hello, TypeScript!";
// Union type variable accepting string or number
let userId;
userId = "ABC123";
userId = 123;
console.log(userId, userId);
