"use strict";
//Copy array
const original = [1, 2];
const copy = [...original];
//Merge arrays
const merged = [...[1, 2], ...[3, 4]]; // [1,2,3,4]
//Function arguments
function sum(a2, b2, c2) {
    return a2 + b2 + c2;
}
const nums = [1, 2, 3];
console.log(sum(...nums)); // 6
//Convert string to array
const letters = [...'hello']; // ['h','e','l','l','o']
const users = [{ id: 1 }];
const clonedUsers = [...users];
console.log(users[0] === clonedUsers[0]); // true (same reference)
