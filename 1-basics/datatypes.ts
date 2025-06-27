// String (text) with type annotation
let greet: string = "Hello, World!";
console.log(typeof greet);

// Numbers (both integer and float are number type in TS)
let num1: number = 100;
let num2: number = 3.14;
console.log(typeof num1); 
console.log(typeof num2);

// Boolean (true/false)
let isLoggedIn: boolean = true;
console.log(typeof isLoggedIn);

// Null (explicit null type)
let emptyValue: null = null;
console.log(typeof emptyValue);

// Undefined (explicit undefined type)
let x: undefined;
console.log(typeof x); 

// TypeScript additions:

// Tuple (fixed-length array with specific types)
let person: [string, number] = ["Alice", 30];
console.log(person[0].substring(1)); 

// Enum (named constants)
enum Color {Red, Green, Blue};
let bgColor: Color = Color.Green;
console.log(Color[bgColor]);  

// Any type can contain anything(number,string, boolean)
let dynamicValue: any = "This could be anything";
dynamicValue = 42;  
console.log(typeof dynamicValue); 

// Void type (This is used in the function which doeson't return anything)
function test(): void {
    console.log("This is a test function");
}
