const person = {
  name: "Alex",
  age: 30,
  hobbies: ["Sleeping", "Gaming"],
  greet: function () {
    alert("Hi there!");
  },
};

person.isAdmin = true;

console.log(person.isAdmin)

delete person.age
console.log(person)