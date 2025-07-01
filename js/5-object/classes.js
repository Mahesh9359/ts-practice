"use strict";
// 1. Basic class
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.height = height;
        this.width = width;
    }
    area() {
        return this.height * this.width;
    }
}
// 2. Static methods
class MathUtils {
    static square(x) {
        return x * x;
    }
}
// 3. Class inheritance
class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
}
// 5. Getters/Setters
class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }
}
class Rectangle1 {
    constructor(height, width) {
        this._height = height;
        this._width = width;
    }
    get area() {
        return this._height * this._width;
    }
    set height(h) {
        if (h <= 0) {
            console.log("Height of a rectangle cannot be 0 or negative");
            return;
        }
        this._height = h;
    }
    set width(w) {
        if (w <= 0) {
            console.log("width of a rectangle cannot be 0 or negative");
            return;
        }
        this._width = w;
    }
}
const rect = new Rectangle1(10, 5);
console.log(rect.area); // Output: 50
rect.width = 15;
console.log(rect.area); // Output: 75
rect.height = -3; // ❌ Should show error and not update
console.log(rect.area); // Output: still 75
