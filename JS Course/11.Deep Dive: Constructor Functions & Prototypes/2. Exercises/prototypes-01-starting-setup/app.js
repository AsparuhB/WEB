// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson {
//   name = "Alex";

//   constructor() {
//     super()
//     this.age = 30;
//   }

//   greet() {
//     console.log(
//       "Hi, I am " + this.name + " and I am " + this.age + " years old."
//     );
//   }
// }

function Person() {
  this.age = 30;
  this.name = "Alex";
  this.greet = function () {
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " years old."
    );
  };
}

// Person.prototype = {
//   // setting a prototype
//   printAge() {
//     console.log(this.age);
//   },
// };

Person.prototype.printAge = function () {
  console.log(this.age);
};

Person.describe = function () {
  console.log("Creating persons...");
};

console.dir(Person);

const person = new Person();
person.greet();
person.printAge();
console.log(person.__proto__);
console.log(person.toString());
const p2 = new person.__proto__.constructor();
console.log(p2);

console.dir(Object.prototype);
