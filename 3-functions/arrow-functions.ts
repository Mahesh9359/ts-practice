//Basic arrow function
const greet3 = ():void => console.log("Hello!");
greet3(); // Hello!

//Single parameter (no parentheses needed)
const square = (x:number):number => x * x;
console.log(square(4)); // 16

//Multiple parameters
const add1 = (a:number, b:number):number => a + b;
console.log(add(2, 3)); // 5

//Multiline arrow function
type User={
  name:string;
  age:number;
  isAdult:boolean;
};
const createUser = (name:string, age:number):User => {
  return {
    name,
    age,
    isAdult: age >= 18,
  };
};
console.log(createUser("Bob", 20)); // {name: "Bob", age: 20, isAdult: true}

//Arrow function as callback
const number:number[] = [1, 2, 3];
const doubled:number[] = number.map((num:number) => num * 2);
console.log(doubled); // [2, 4, 6]