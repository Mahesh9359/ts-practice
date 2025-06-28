"use strict";
// Basic if-else with type annotation
const age2 = 18;
if (age >= 18) {
    console.log("You can vote!");
}
else {
    console.log("You cannot vote.");
}
// else-if ladder with type safety
const mark = 85;
if (mark >= 90) {
    console.log("Grade A");
}
else if (mark >= 80) {
    console.log("Grade B");
}
else {
    console.log("Grade C");
}
// Nested if-else with boolean types
const isRaining = true;
const hasUmbrella = false;
if (isRaining) {
    if (hasUmbrella) {
        console.log("Go outside!");
    }
    else {
        console.log("Stay indoors.");
    }
}
// Truthy/Falsy checks with strict null checks
const name3 = "";
if (name3) {
    console.log("Name exists");
}
else {
    console.log("Name is empty");
}
// Short-circuiting with type safety
const isLogged = true;
isLogged && console.log("User is logged in");
