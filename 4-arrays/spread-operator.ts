//Copy array
const original:number[] = [1, 2];
const copy:number[] = [...original];

//Merge arrays
const merged:number[] = [...[1, 2], ...[3, 4]]; // [1,2,3,4]

//Function arguments
function sum(a2:number, b2:number, c2:number):number {
    return a2 + b2 + c2;
}
const nums:[number,number,number] = [1, 2, 3];
console.log(sum(...nums)); // 6

//Convert string to array
const letters:string[] = [...'hello']; // ['h','e','l','l','o']

//Shallow copy objects in array
type User1 = { id: number };

const users: User1[] = [{ id: 1 }];
const clonedUsers: User1[] = [...users];

console.log(users[0] === clonedUsers[0]);  // true (same reference)