function add(num1, num2) {
  return num1 + num2;
} // This is a pure function. Yield the same result every time, assuming the same parameters are inputted

console.log(add(1, 5)); // 6
console.log(add(12, 15)); // 27

// This is an impure function. Yields unpredictable results even when the input is the same.
function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;
console.log(previousResult);

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum; // This is a side effect, so this is also an impure function, because it changes a variable OUTSIDE of the function
  return sum;
}

console.log(addMoreNumbers(5, 6)); // if called like this, it might not be obvious
// that this function changes something outside of it. MIGHT WANT TO AVOID!!!

console.log(previousResult);

const hobbies = ["Sports", "Cooking"];

function printHobbies(h) {
  h.push("NEW HOBBY");
  console.log(h);
}

printHobbies(hobbies); // when we change an array inside of the function, we change it also outside of the function, because stored arrays are reference to the objects location.

console.log("________________________________");
// Factory Functions:

let multiplier = 1.1;

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    console.log(multiplier);
    return amount * tax * multiplier;
  }
  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

console.log("________________________________");

// Closure in practice
let userName = "Alex";

function greetUser() {
  // let name = "Anna";
  console.log("Hi " + name);
}

let name = "Maximilian";

userName = "Manuel";

greetUser();

console.log("________________________________");

// IIFEs - Immediately Invoked Function Expressions.

(function () {
  var age = 30;
  console.log(age);
})();

/* Please note that the snippet uses var, NOT let or const. 
 Remember that var does NOT use block scope but only differ between global and function scope. 
 */

// not something that you see often, but its possible to see
