"use strict";
const carInfo = {
    brand: 'Toyota',
    getBrand() {
        return this.brand;
    }
};
function describe() {
    return `${this.color} ${this.type}`;
}
const bike = { color: 'Red', type: 'Mountain' };
const Describe = describe.bind(bike);
console.log(Describe()); // Red Mountain
// 3. Constructor binding
class Persons {
    constructor(name) {
        this.name = name;
    }
    PersonName() {
        return `${this.name}`;
    }
}
let pName = new Persons("Navanath");
// 4. Arrow function lexical this
const counter = {
    count: 0,
    increment() {
        console.log(this.count); // ✅ Now refers to the correct object
    }
};
counter.increment(); // Output: 0
// 5. bind() for permanent context
const Describes = describe.bind(bike);
console.log(Describes()); // Red Mountain
