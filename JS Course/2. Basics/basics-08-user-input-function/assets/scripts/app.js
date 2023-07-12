const defaultResult = 0;
let currentResult = defaultResult;

// Gets input from input field
function getUserNumberInput() {
  return parseFloat(userInput.value);
}

// Generates and writes calculation log.
function createAndWriteOutput(resultBefore, operator, calcNumber) {
  const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
  outputResult(currentResult,calcDescription); // from vendor file!
} 

// adds and inputs result.
function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput(initialResult, "+", enteredNumber);

}

// No need for comment here, but test.
function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput(initialResult, "-", enteredNumber);
}

// Kind of self explanatory.
function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput(initialResult, "*", enteredNumber);
}

// I mean... yeah...
function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput(initialResult, "/", enteredNumber);
}

//Grouping all buttons and linking them to functions.
addBtn.addEventListener('click', add);
subtractBtn.addEventListener("click", subtract);
divideBtn.addEventListener("click", divide);
multiplyBtn.addEventListener("click", multiply);