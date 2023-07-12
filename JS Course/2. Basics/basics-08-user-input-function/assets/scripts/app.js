const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseFloat(userInput.value);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const calcDesciption = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult,calcDesciption );
}

addBtn.addEventListener('click', add);

function subtract() {
  const enteredNumber = getUserNumberInput();
  const calcDesciption = `${currentResult} - ${enteredNumber}`;
  currentResult = currentResult - enteredNumber;
  outputResult(currentResult,calcDesciption );
}

subtractBtn.addEventListener("click", subtract);

function multiply() {
  const enteredNumber = getUserNumberInput();
  const calcDesciption = `${currentResult} * ${enteredNumber}`;
  currentResult = currentResult * enteredNumber;
  outputResult(currentResult,calcDesciption );
}

multiplyBtn.addEventListener("click", multiply);

function divide() {
  const enteredNumber = getUserNumberInput();
  const calcDesciption = `${currentResult} / ${enteredNumber}`;
  currentResult = currentResult / enteredNumber;
  outputResult(currentResult, calcDesciption);
}

divideBtn.addEventListener("click", divide);