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

// const p = new Person();
// const p2 = new Person();
// p.greet();
// console.log(p);

// const button = document.getElementById("btn");
// // button.addEventListener("click", p.greet);
// button.addEventListener("click", p.greet.bind(p));

const course = {
  // new Object();
  title: "JavaScript = The Complete Guide",
  rating: 5,
};

// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

const student = Object.create(
  {
    printProgress: function () {
      console.log(this.progress);
    },
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: "Alex",
      writable: true,
    },
  }
);



student.name = "Alex";

Object.defineProperty(student, "progress", {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false,
});

console.log(student.progress);
console.log(student);

course.printRating();
