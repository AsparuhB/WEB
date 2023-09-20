const person = {
  name: "Alex",
  age: 30,
  hobbies: ["Sleeping", "Gaming"],
  greet: function () {
    alert("Hi there!");
  },
};

person.isAdmin = true;
person.age = 31;
console.log(person.isAdmin);
console.log(person);

delete person.age;
console.log(person);
