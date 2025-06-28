//Basic function expression
const greet2 = function ():void {
  console.log("Hello!");
};
greet2();

//Named function expression
const factorial = function calcFactorial(n:number):number {
  return n <= 1 ? 1 : n * calcFactorial(n - 1);
};
console.log(factorial(4)); // 24

//Immediately Invoked Function Expression (IIFE)
(function () :void{
  console.log("IIFE runs immediately!");
})();

//Function expression as method
type Person ={
  name:string;
  greet:()=>void;
};

const person1: Person={
  name:"Alice",
  greet:function ():void{
    console.log(`Hi, I'm ${this.name}`);    
  },
};
person1.greet();


//Passing function expression as callback
setTimeout(function ():void {
  console.log("This runs after 1 second");
}, 1000);