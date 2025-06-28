"use strict";
//Basic arrow function
const greet3 = () => console.log("Hello!");
greet3(); // Hello!
//Single parameter (no parentheses needed)
const square = (x) => x * x;
console.log(square(4)); // 16
//Multiple parameters
const add1 = (a, b) => a + b;
console.log(add(2, 3)); // 5
const createUser = (name, age) => {
    return {
        name,
        age,
        isAdult: age >= 18,
    };
};
console.log(createUser("Bob", 20)); // {name: "Bob", age: 20, isAdult: true}
//Arrow function as callback
const number = [1, 2, 3];
const doubled = number.map((num) => num * 2);
console.log(doubled); // [2, 4, 6]
