"use strict";
// String (text) with type annotation
let greet4 = "Hello, World!";
console.log(typeof greet);
// Numbers (both integer and float are number type in TS)
let num1 = 100;
let num2 = 3.14;
console.log(typeof num1);
console.log(typeof num2);
// Boolean (true/false)
let isLoggedIn = true;
console.log(typeof isLoggedIn);
// Null (explicit null type)
let emptyValue = null;
console.log(typeof emptyValue);
// Undefined (explicit undefined type)
let x;
console.log(typeof x);
// TypeScript additions:
// Tuple (fixed-length array with specific types)
let person = ["Alice", 30];
console.log(person[0].substring(1));
// Enum (named constants)
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let bgColor = Color.Green;
console.log(Color[bgColor]);
// Any type can contain anything(number,string, boolean)
let dynamicValue = "This could be anything";
dynamicValue = 42;
console.log(typeof dynamicValue);
// Void type (This is used in the function which doeson't return anything)
function test() {
    console.log("This is a test function");
}
