// 1. Object literal syntax
const person3: { name: string; age: number; greet: () => string } = {
  name:"mahesh",
  age: 30,
  greet() {
    return `Hello, I'm ${this.name}`;
  }
};
console.log(person3.greet()); // Hello, I'm Alice

// 2. Dynamic property names
const key:string = 'email';
const user : {
  [key:string]: string // Computed property name
}={
  [key]:'alice@example.com'
};
console.log(user.email);


// 3. Object methods shorthand
const shop : {
  items: string[];
  addItem:(item:string)=>void
}={
  items:['apple','banana'],
  addItem(item){
    this.items.push(item);
  }
};
shop.addItem('orange');
console.log(shop.items)

