"use strict";
// //Basic async/await
// async function fetchUser() {
//   const response = await fetch('/api/user');
//   return await response.json();
// }
// //Error handling with try/catch
// async function loadData() {
//   try {
//     const data = await fetch('/api/data');
//     return await data.json();
//   } catch (error) {
//     console.error('Failed to load:', error);
//   }
// }
// //Multiple parallel requests
// async function fetchAll() {
//   const [users, posts] = await Promise.all([
//     fetch('/api/users'),
//     fetch('/api/posts')
//   ]);
//   return {
//     users: await users.json(),
//     posts: await posts.json()
//   };
// }
// //Await in loops
// async function processItems(items) {
//   for (const item of items) {
//     await processItem(item);
//   }
// }
// //Top-level await (ES2022)
// const config = await fetch('/config.json').then(r => r.json());
// class Rectangle1 {
//   private _height: number;
//   private _width: number;
//   constructor(height: number, width: number) {
//     this._height = height;
//     this._width = width;
//   }
//   get area(): number {
//     return this._height * this._width
//   }
//   set height(h: number) {
//     if (h <= 0) {
//       console.log("Height of a rectangle cannot be 0 or negative");
//       return;
//     }
//     this._height = h;
//   }
//   set width(w: number) {
//     if (w <= 0) {
//       console.log("width of a rectangle cannot be 0 or negative");
//       return;
//     }
//     this._width = w;
//   }
// }
// const rect = new Rectangle1(10, 5);
// console.log(rect.area); // Output: 50
// rect.width = 15;
// console.log(rect.area); // Output: 75
// rect.height = -3;        // ❌ Should show error and not update
// console.log(rect.area); // Output: still 75
class Student {
    constructor(name, rollNo, marks) {
        this._name = name;
        this._rollNo = rollNo;
        this._marks = marks;
    }
    get result() {
        if (this._marks >= 40) {
            return "Pass";
        }
        else {
            return "fail";
        }
    }
    set updateMarks(newMarks) {
        if (newMarks < 0 || newMarks > 100) {
            console.log("Marks cannot be less than 0 and greater than 100");
        }
        this._marks = newMarks;
    }
}
const s = new Student("Mahesh", 101, 35);
console.log(s._name); // Mahesh
console.log(s._rollNo); // 101
console.log(s.result); // Fail
s.updateMarks = 80;
console.log(s.result); // Pass
s.updateMarks = 150; // ❌ Invalid
// s._rollNo = 102; // ❌ Error: Cannot assign to 'rollNo' because it is a read-only property
class User2 {
    constructor(name, email, role) {
        this.name = name;
        this.email = email;
        this._role = role;
    }
    get role() {
        return this._role;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
    }
}
class Admin extends User2 {
    constructor(name, email) {
        super(name, email, "admin"); // 💡 Automatically sets role to "admin"
    }
    // Method overriding
    displayInfo() {
        super.displayInfo(); // Call parent method
        console.log(`Role: ${this.role}`); // Add role display
    }
}
// interface Veichle {
//   brand: string;
//   start(): void;
// }
// class Car implements Veichle {
//   brand: string;
//   wheels: number
//   constructor(brand: string, wheels: number) {
//     this.brand = brand;
//     this.wheels = wheels;
//   }
//   start(): void {
//     console.log(`Car ${this.brand} started with ${this.wheels} wheels`);
//   }
// }
// class Bike implements Veichle {
//   brand: string;
//   type: string
//   constructor(brand: string, type: string) {
//     this.brand = brand;
//     this.type = type;
//   }
//   start(): void {
//     console.log(`Bike ${this.brand} (${this.type}) started`);
//   }
// }
// function startVehicle(v: Veichle): void {
//   v.start();
// }
// const myCar = new Car("Toyota", 4);
// const myBike = new Bike("Yamaha", "sports");
// startVehicle(myCar);  // Car Toyota started with 4 wheels
// startVehicle(myBike); // Bike Yamaha (sports) started
class User3 {
    constructor() {
        User3.userCount++;
    }
    static getTotalUsers() {
        return User3.userCount;
    }
}
User3.userCount = 0;
const ob = new User3();
const ob2 = new User3();
const ob3 = new User3();
console.log(User3.getTotalUsers());
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}
class Rectangle2 {
    constructor(width, height) {
        this.height = height;
        this.width = width;
    }
}
function printShapeArea(shape) {
    if (shape instanceof Circle) {
        console.log("Circle area : ", Math.PI * shape.radius ** 2);
    }
    else {
        console.log("Rectangle area : ", shape.height * shape.width);
    }
}
const f = new Circle(7);
const r = new Rectangle2(4, 6);
printShapeArea(f); // Circle Area: 153.93804002589985
printShapeArea(r); // Rectangle Area: 24
function printId(id) {
    if (typeof id === "string") {
        console.log("String ID:", id.toUpperCase());
    }
    else {
        console.log("Number ID:", id.toFixed());
    }
}
printId("mahesh"); // String ID: MAHESH
printId(123.456); // Number ID: 123.46
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement([10, 65, 69, 63, 20]));
console.log(getFirstElement(['ABC', 'XYZ']));
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}
const numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.pop()); // 20
console.log(numberStack.peek()); // 10
console.log(numberStack.size()); // 1
console.log(numberStack.isEmpty()); // false
const stringStack = new Stack();
stringStack.push("Mahesh");
stringStack.push("TypeScript");
console.log(stringStack.peek()); // TypeScript
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person4, property) {
    console.log(`Printing person property ${property}: "${person4[property]}"`);
}
let person4 = {
    name: "Max",
    age: 27
};
printPersonProperty(person4, "name"); // Printing person property name: "Max"
function getProp(obj, key) {
    return obj[key]; // ✅ return the value from object at key K
}
const mobile = { id: 1, name: "iPhone", price: 99999 };
console.log(getProp(mobile, "name")); // iPhone
console.log(getProp(mobile, "price")); // 99999
const scores = {
    Mahesh: 90,
    Suresh: 85,
    Raj: 78
};
console.log("Mahesh's score:", scores["Mahesh"]);
for (let user in scores) {
    console.log(`${user}'s score is ${scores[user]}`);
}
