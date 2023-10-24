// class Person {
//   name = "Alex";

//   constructor() {
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
    this.greet = function() {
        console.log(
                  "Hi, I am " + this.name + " and I am " + this.age + " years old."
                );
    }
}

const person = new Person();
person.greet();
