"use strict";
//Basic function
function greet1() {
    console.log("Hello, World!");
}
greet1(); //Hello, World!
//Function with parameters
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); //5
//Function with default parameter
function sayHello(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
sayHello(); //Hello, Guest!
//Function returning another function
function createMultiplier(factor) {
    return function (num) {
        return num * factor;
    };
}
const double = createMultiplier(2);
console.log(double(5)); // 10
//Recursive function (factorial)
function fact(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5)); // 120
