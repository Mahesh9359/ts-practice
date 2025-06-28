let age3: number = 19;

let canVote = age3 >= 18 ? "Yes You can Vote" : "No you are not eligible for voting";
console.log(canVote);


function isEven(num:number):string{
    return num%2==0?`${num} is an even number`:`${num} is an odd number`;
}
console.log(isEven(21));

let score:number = 91;
let grade = score>=90?`O`:score>=80?"A+":"C";
console.log(grade);


let isRaining1:boolean = true;
let action = isRaining1 ? "Take an umbrella" : "Wear sunglasses";
console.log(action); 

let name4:string = "Alice";
name4 === "Alice" ? console.log("Hello Alice!") : console.log("Who are you?");