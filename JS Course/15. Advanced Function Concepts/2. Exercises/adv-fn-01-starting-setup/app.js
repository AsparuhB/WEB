function add(num1, num2) {
  return num1 + num2;
} // This is a pure function. Yield the same result every time, assuming the same parameters are inputted 

console.log(add(1, 5)) // 6
console.log(add(12, 15)) // 27

// This is an impure function. Yields unpredictable results even when the input is the same.
function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5))