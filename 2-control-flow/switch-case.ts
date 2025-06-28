// Basic switch-case
let day: number = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

// Multiple cases
let fruit: string = "apple";
switch (fruit) {
    case "apple":
    case "banana":
        console.log("Common fruit");
        break;
    case "kiwi":
        console.log("Exotic fruit");
        break;
}

// Switch with expressions
let num: number = 10;
switch (true) {
    case num > 0:
        console.log("Positive");
        break;
    case num < 0:
        console.log("Negative");
        break;
    default:
        console.log("Zero");
}

// Fall-through (intentional no-break)
let tLight: string = "yellow";
switch (tLight) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Caution");
        // No break here: intentional fall-through
    case "green":
        console.log("Go");
        break;
}

// Default case only
let randomValue: number = 42;
switch (randomValue) {
    default:
        console.log("Unknown value");
}
