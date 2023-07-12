const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseFloat(userInput.value);
}

function createAndWriteOutput(operator, resultBefore, calcNumber) {
  const calcDesciption = `${resultBefore} ${operator} ${calcNumber}`;
  outputResult(currentResult,calcDesciption);
} 

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);

}

addBtn.addEventListener('click', add);

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
}

subtractBtn.addEventListener("click", subtract);

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
}

multiplyBtn.addEventListener("click", multiply);

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
}

divideBtn.addEventListener("click", divide);