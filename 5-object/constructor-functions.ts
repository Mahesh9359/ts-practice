// 1. Basic constructor
class Book {
  title:string;
  author:string;
  constructor(title:string,author:string){
    this.title=title;
    this.author=author;
  }
  getInfo():string {
    return `${this.title} by ${this.author}`;
  }
}
const book= new Book('1982','Orwell');
console.log(book.getInfo());

// 2. Instance checking
console.log(book instanceof Book); // true

// 3. Multiple instances
const book2 = new Book('Dune', 'Herbert');

// 4. Constructor with defaults
class Product{
  name2:string;
  price:number;
  constructor(name2:string,price:number=0){
    this.name2=name2;
    this.price=price;
  }
  getInfo():string{
    return `${this.name2} is of Rs ${this.price}`
  }
  isClassic():boolean{
    return this.price==12000;
  }
}

let product = new Product("Iphone",1110);

