const sayHello = (name) => console.log("Hi" + name);
const sayHello1 = (greet, name) => console.log(greet + " " + name);
const sayHello2 = () => console.log("What am I doing wrong ?");
const sayHello3 = (greet, name) => greet + " " + name;

const sayHello4 = (greet, name = "Asparuh") => console.log(greet + " " + name);

sayHello(" Asparuh");
sayHello1("Hello,", "Asparuh");
sayHello2(" Asparuh");
console.log(sayHello3("Hello,", "Asparuh"));
sayHello4("Hello", "Alex");
sayHello4("Hello");

function checkInput(callBack, ...strings) {
  let isEmpty = false;
  for (const text of strings) {
    if (!text) {
      isEmpty = true;
      break;
    }
  }
  if (!isEmpty) {
    callBack();
  } else {
    console.log("Somewhere a string is empty");
  }
}

checkInput(
    () => {
  console.log("No empty strings");
},
  "",
  "sd",
  "sdas",
  "asdf");