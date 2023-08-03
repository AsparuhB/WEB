const sayHello = (name) => {
  console.log('Hi ' + name);
}

sayHello("Alex");

const sayHello1 = (greet, name) => {
  console.log(greet + name);
}

sayHello1("Hello, ", "Alex");

const sayHello2 = () => {
  console.log("What am I" + " doing ?");
}

sayHello2();

const sayHello3 = (greet, name) => greet + name;

console.log(sayHello3("Hello", " there!"));