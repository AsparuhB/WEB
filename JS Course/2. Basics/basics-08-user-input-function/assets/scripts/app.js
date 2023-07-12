const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseFloat(userInput.value);
}

function add() {
  const enteredNumber = getUserNumberInput;
  const calcDesciption = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult,calcDesciption );
}

addBtn.addEventListener('click', add);
