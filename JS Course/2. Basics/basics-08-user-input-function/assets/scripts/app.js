const defaultResult = 0;
let currentResult = defaultResult;

// Making a function that gets the input value from the user.
function getUserNumberInput() {
  return parseFloat(userInput.value);
}

// Making a function that rewrites the output. Takes the result before the c a
function createAndWriteOutput(resultBefore, operator, calcNumber) {
  const calcDesciption = `${resultBefore} ${operator} ${calcNumber}`;
  outputResult(currentResult,calcDesciption);
} 

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput(initialResult, "+", enteredNumber);

}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput(initialResult, "-", enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput(initialResult, "*", enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput(initialResult, "/", enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener("click", subtract);
divideBtn.addEventListener("click", divide);
multiplyBtn.addEventListener("click", multiply);