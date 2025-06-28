"use strict";
//Basic function expression
const greet2 = function () {
    console.log("Hello!");
};
greet2();
//Named function expression
const factorial = function calcFactorial(n) {
    return n <= 1 ? 1 : n * calcFactorial(n - 1);
};
console.log(factorial(4)); // 24
//Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("IIFE runs immediately!");
})();
const person1 = {
    name: "Alice",
    greet: function () {
        console.log(`Hi, I'm ${this.name}`);
    },
};
person1.greet();
//Passing function expression as callback
setTimeout(function () {
    console.log("This runs after 1 second");
}, 1000);
