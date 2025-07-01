interface Veichle {
  brand: string;
  start(): void;
}

class Car implements Veichle {
  brand: string;
  wheels: number
  constructor(brand: string, wheels: number) {
    this.brand = brand;
    this.wheels = wheels;
  }
  start(): void {
    console.log(`Car ${this.brand} started with ${this.wheels} wheels`);
  }
}
class Bike implements Veichle {
  brand: string;
  type: string
  constructor(brand: string, type: string) {
    this.brand = brand;
    this.type = type;
  }
  start(): void {
    console.log(`Bike ${this.brand} (${this.type}) started`);
  }
}
function startVehicle(v: Veichle): void {
  v.start();
}
const myCar = new Car("Toyota", 4);
const myBike = new Bike("Yamaha", "sports");

startVehicle(myCar);  // Car Toyota started with 4 wheels
startVehicle(myBike); // Bike Yamaha (sports) started