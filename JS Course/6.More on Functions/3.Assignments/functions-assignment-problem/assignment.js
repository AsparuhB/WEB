const sayHello = (name) => console.log("Hi, " + name);
const sayHello2 = (greet, name) => console.log(greet + " " + name);
const sayHello3 = () => console.log("What am I doing ?");
const sayHello4 = (name) => "Hi, " + name;

sayHello("Alex");
sayHello2("Hello,", "there!");
sayHello3();
console.log(sayHello4("Alex"));

const sayHello5 = (greet = "Hi,", name = "Alex") =>
  console.log(greet + " " + name);

sayHello5();
sayHello5("Hello,", "Asparuh");

// let x = () => {
//   console.log("I am called from inside of a function.");
// };

// let y = (callBack) => {
//   console.log("Do something");
//   callBack();
// }

// y(x)

function checkInput(callBack, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    return callBack();
  }
}

checkInput(
  () => {
    console.log("Not all empty");
  },
  "t",
  "rt",
  "g"
);
