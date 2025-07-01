// 1. Basic class
class Rectangle {
  constructor(public height:number, public width:number) {
    this.height = height;
    this.width = width;
  }
  area():number {
    return this.height * this.width;
  }
}

// 2. Static methods
class MathUtils {
  static square(x:number):number {
    return x * x;
  }
}

// 3. Class inheritance
class Square extends Rectangle {
  constructor(side:number) {
    super(side, side);
  }
}

// 5. Getters/Setters
class Temperature {
  celsius:number
  constructor(celsius:number) {
    this.celsius = celsius;
  }
  get fahrenheit():number {
    return this.celsius * 1.8 + 32;
  }
}

class Rectangle1 {
  private _height: number;
  private _width: number;
  constructor(height: number, width: number) {
    this._height = height;
    this._width = width;
  }

  get area(): number {
    return this._height * this._width
  }
  set height(h: number) {
    if (h <= 0) {
      console.log("Height of a rectangle cannot be 0 or negative");
      return;
    }
    this._height = h;
  }
  set width(w: number) {
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

rect.height = -3;        // ❌ Should show error and not update
console.log(rect.area); // Output: still 75

