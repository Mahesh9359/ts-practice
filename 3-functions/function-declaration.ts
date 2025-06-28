//Basic function
function greet1():void {
  console.log("Hello, World!");
}
greet1(); //Hello, World!

//Function with parameters
function add(a:number, b:number):number {
  return a + b;
}
console.log(add(2, 3)); //5

//Function with default parameter
function sayHello(name:string = "Guest"):void {
  console.log(`Hello, ${name}!`);
}
sayHello(); //Hello, Guest!

//Function returning another function
function createMultiplier(factor:number):(num:number)=>number {
  return function (num:number):number {
    return num * factor;
  };
}
const double = createMultiplier(2);
console.log(double(5)); // 10

//Recursive function (factorial)
function fact(n:number):number {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5)); // 120