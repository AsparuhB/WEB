const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomSecondNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)


let isGreater = false;
let isThisGreater = false;

function assignment1() {
  while (randomNumber > 0.7 && !isGreater) {
    alert("Number  is greater than 0.7");
    isGreater = true;
  }
}

const testArray = [1, 4, 6, 2, 3, 23, 14, 6, 654, 9];

function arrayTesting() {
  for (const number of testArray) {
    console.log(number);
  }
}
function arrayTesting2() {
  for (let i = 0; i < testArray.length; i++) {
    console.log(testArray[i]);
  }
}
function reversedArray() {
  for (let i = testArray.length - 1; i >= 0; i--) {
    console.log(testArray[i]);
  }
}

function assignment4() {
    while (
        (randomNumber > 0.7 && randomSecondNumber > 0.7 && !isThisGreater) ||
        (randomNumber <= 0.2 && !isThisGreater) ||
        (randomSecondNumber <= 0.2 && !isThisGreater)
      ) {
        alert("Both are greater than 0.7 or at least one is NOT greater than 0.2");
        isThisGreater = true;
      }
}

function assignment4Part2() {
    if (randomNumber > 0.7 && randomSecondNumber > 0.7) {
        alert("Both are greater than 0.7");
    } else if (randomNumber <= 0.2) {
        alert("randomNumber is NOT greater than 0.2");
    } else if (randomSecondNumber <= 0.2) {
        alert("randomSecondNumber is NOT greater than 0.2");
    }
}

console.log(randomNumber);
console.log(randomSecondNumber);
console.log("------------");
assignment1();
console.log("------------");
arrayTesting();
console.log("------------");
arrayTesting2();
console.log("------------");
reversedArray();
console.log("------------");
assignment4();
assignment4Part2();