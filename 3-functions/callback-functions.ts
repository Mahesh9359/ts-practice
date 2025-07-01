//Basic callback example
function processUserInput(callback: (name: string) => void): void {
  const name = "Alice";
  callback(name);
}
processUserInput((name: string) => console.log(`Hello, ${name}!`)); // Hello, Alice!

//Error-first callback (Node.js style)
function divide1(a: number, b: number, callback: (error: Error | null, result: number | null) => void): void {
  if (b === 0) {
    callback(new Error("Cannot divide by zero"), null);
  } else {
    callback(null, a / b);
  }
}
divide1(10, 2, (err, result) => {
  if (err) console.error(err);
  else console.log(result); // 5
});

//Callback in array method
const numbers1: number[] = [1, 2, 3];
numbers1.forEach(num => console.log(num * 2)); // 2 4 6

//Asynchronous callback (setTimeout)
setTimeout(() => console.log("This runs after 2 seconds"), 2000);

//Event listener callback
let el = document.querySelector("button");
if (el) {
  el.addEventListener("click", () => {
    console.log("Button clicked!");
  });
}
