//Basic while loop
let count1:number = 0;
while (count1 < 3) {
    console.log(count1); 
    count1++; 
}

//While with condition from user input
let userInput:string|null="";
while (userInput !== "exit") {
    userInput = prompt("Type 'exit' to stop"); 
    console.log("You typed:", userInput);
}

//Infinite loop
while (true) {
    console.log("This runs forever!"); //this will run infinite times till you close the browser
}

//Do-while (runs at least once)
//beacause it checks the condition after running the loop once
let z:number = 10;
do {
    console.log(z); // 10(executes once even if condition is false)
    z++;
} while (z < 5);

//While loop with break
let num3:number = 1;
while (true) {
    console.log(num3);
    num3++;
    if (num3 > 5)
        break;
}