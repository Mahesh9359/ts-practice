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

// 4. Getters/Setters
class Temperature {
  celsius:number
  constructor(celsius:number) {
    this.celsius = celsius;
  }
  get fahrenheit():number {
    return this.celsius * 1.8 + 32;
  }
}

// 5. Private fields (ES2022)
class Wallet {
  #balance: number = 0;

  deposit(amount: number): void {
    this.#balance += amount;
    console.log(this.#balance);
    
  }

  getBalance(): number {
    return this.#balance;
  }
}
let newWallet = new Wallet();
newWallet.deposit(100);
newWallet.deposit(100);
newWallet.deposit(100);
newWallet.deposit(100);
newWallet.deposit(100);

