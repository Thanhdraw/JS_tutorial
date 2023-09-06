// Class in js
// setter and getter

class Person {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  // getName() {
  //     return this.name;
  // }

  set name(newName) {
    return (this._name = newName);
  }

  // setName(newName){
  //   this.name = newName;
  // }
}
const thanh = new Person("Quocthanh");
console.log(thanh.name);

thanh.name = "ThanhDev";
console.log(thanh.name);
// thanh.setName("ThanhDev");
// console.log(thanh.getName());

// Class expression

let Student = class {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
};

const evon = new Student("ThanhDev");
console.log(evon.name);

function company(aclass) {
  return new aclass();
}

let hello = company(
  class {
    sayHello() {
      console.log("Hello, I'm trying");
    }
  }
);

// hello.sayHello();

// Static method

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static compare(a, b) {
    return a.date - b.date;
  }
}
let articles = [
  new Article("HTML", new Date(2021, 1, 1)),
  new Article("Css", new Date(2021, 10, 3)),
  new Article("Js", new Date(2021, 11, 2)),
];
articles.sort(Article.compare);
console.log(articles[0].title);

// Static properties

class Item {
  constructor(name) {
    this.name = name;
    this.constructor.count++;
  }
  static count = 0;
  static getCount() {
    return Item.count;
  }
}
const pencil = new Item("pencil");
console.log((Item.getCount()));

// Super and extend
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.species}.`);
  }

  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Dog"); // Gọi constructor của lớp cha và truyền 'Dog' vào thuộc tính species
    this.breed = breed;
  }

  makeSound() {
    console.log(`${this.name} barks.`);
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super(name, "Cat"); // Gọi constructor của lớp cha và truyền 'Cat' vào thuộc tính species
    this.color = color;
  }

  makeSound() {
    console.log(`${this.name} meows.`);
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
const cat = new Cat("Whiskers", "Calico");

dog.introduce(); // Output: "Hi, I'm Buddy, a Dog."
dog.makeSound(); // Output: "Buddy barks."

cat.introduce(); // Output: "Hi, I'm Whiskers, a Cat."
cat.makeSound(); // Output: "Whiskers meows."
