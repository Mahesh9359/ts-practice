"use strict";
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    start() {
        console.log(`Car ${this.brand} started with ${this.wheels} wheels`);
    }
}
class Bike {
    constructor(brand, type) {
        this.brand = brand;
        this.type = type;
    }
    start() {
        console.log(`Bike ${this.brand} (${this.type}) started`);
    }
}
function startVehicle(v) {
    v.start();
}
const myCar = new Car("Toyota", 4);
const myBike = new Bike("Yamaha", "sports");
startVehicle(myCar); // Car Toyota started with 4 wheels
startVehicle(myBike); // Bike Yamaha (sports) started
