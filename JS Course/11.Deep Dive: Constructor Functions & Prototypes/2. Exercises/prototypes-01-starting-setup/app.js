class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person {
  name = "Alex";

  constructor() {
    // super()
    this.age = 30;
    // this.greet = function() { ... }
  }

  // greet = function() {
  //   console.log(
  //     "Hi, I am " + this.name + " and I am " + this.age + " years old."
  //   );
  // }

  // greet = () => {
  //   console.log(
  //     "Hi, I am " + this.name + " and I am " + this.age + " years old."
  //   );
  // };

  greet() {
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " years old."
    );
  }
}

// function Person() {
//   this.age = 30;
//   this.name = "Alex";
//   this.greet = function () {
//     console.log(
//       "Hi, I am " + this.name + " and I am " + this.age + " years old."
//     );
//   };
// }

// Person.prototype = {
//   // setting a prototype
//   printAge() {
//     console.log(this.age);
//   },
// };

// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// Person.describe = function () {
//   console.log("Creating persons...");
// };

// console.dir(Person);

// const person = new Person();
// person.greet();
// person.printAge();
// console.log(person.__proto__);
// console.log(person.toString());
// const p2 = new person.__proto__.constructor();
// console.log(p2);

// console.dir(Object.prototype);

const p = new Person();
const p2 = new Person();
p.greet();
console.log(p);

const button = document.getElementById("btn");
// button.addEventListener("click", p.greet);
button.addEventListener("click", p.greet.bind(p));

