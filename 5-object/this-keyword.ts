// 1. Implicit binding
interface car{
  brand:String;
  getBrand():String;
}
const carInfo:car={
  brand:'Toyota',
  getBrand(){
    return this.brand;
  }
}


// 2. Explicit binding (call/apply)
interface Bike {
  color: string;
  type: string;
}

function describe(this: Bike) {
  return `${this.color} ${this.type}`;
}

const bike: Bike = { color: 'Red', type: 'Mountain' };
const Describe = describe.bind(bike);
console.log(Describe()); // Red Mountain


// 3. Constructor binding
class Persons{
  name:string;
  constructor(name:string){
    this.name=name;
  }
  PersonName():string{
    return `${this.name}`
  }
}
let pName = new Persons("Navanath");

// 4. Arrow function lexical this
const counter: {
   count: number; 
   increment: () => void 
  } = 
  {
  count: 0,
  increment() {
    console.log(this.count); // ✅ Now refers to the correct object
  }
};

counter.increment(); // Output: 0


// 5. bind() for permanent context
const Describes = describe.bind(bike);
console.log(Describes()); // Red Mountain