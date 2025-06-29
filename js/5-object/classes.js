"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Wallet_balance;
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
// 4. Getters/Setters
class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }
}
// 5. Private fields (ES2022)
class Wallet {
    constructor() {
        _Wallet_balance.set(this, 0);
    }
    deposit(amount) {
        __classPrivateFieldSet(this, _Wallet_balance, __classPrivateFieldGet(this, _Wallet_balance, "f") + amount, "f");
        console.log(__classPrivateFieldGet(this, _Wallet_balance, "f"));
    }
    getBalance() {
        return __classPrivateFieldGet(this, _Wallet_balance, "f");
    }
}
_Wallet_balance = new WeakMap();
let newWallet = new Wallet();
newWallet.deposit(100);
newWallet.deposit(100);
newWallet.deposit(100);
newWallet.deposit(100);
newWallet.deposit(100);
