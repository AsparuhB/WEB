const defaultResult = 0;
let currentResult = defaultResult; // Current result variable.
let logEntries = []; // Array for log.

const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const MULTIPLY = "MULTIPLY";
const DIVIDE = "DIVIDE";

// Gets input from input field
function getUserNumberInput() {
  return parseFloat(userInput.value);
}

// Generates and writes a calculation log.
function createAndWriteOutput(resultBefore, operator, calcNumber) {
  const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file!
}

// Writes to log.
function writeToLog( // Function with 4 parameters.
  operationIdentifier, // 1st parameter.
  prevResult, // 2nd parameter.
  operationNumber, // 3rd parameter.
  newResult // 4th parameter.
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry); // Pushing to array.
  console.log(logEntries); // Logging array.
}

// No need for comment here, but test.
// function add() {
//   const enteredNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult += enteredNumber;
//   createAndWriteOutput(initialResult, "+", enteredNumber);
//   writeToLog("ADD", initialResult, enteredNumber, currentResult)
// }

// // Same as above.
// function subtract() {
//   const enteredNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult -= enteredNumber;
//   createAndWriteOutput(initialResult, "-", enteredNumber);
//   writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult)
// }

// // Kind of self explanatory.
// function multiply() {
//   const enteredNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult *= enteredNumber;
//   createAndWriteOutput(initialResult, "*", enteredNumber);
//   writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult)
// }

// // Same as above.
// function divide() {
//   const enteredNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult /= enteredNumber;
//   createAndWriteOutput(initialResult, "/", enteredNumber);
//   writeToLog("DIVIDE", initialResult, enteredNumber, currentResult)
// }


function calculate(operation) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let operator;
  if (operation === ADD) {
    currentResult += enteredNumber;
    operator = "+";
  } else if (operation === SUBTRACT) {
    currentResult -= enteredNumber;
    operator = "-";
  } else if (operation === MULTIPLY) {
    currentResult *= enteredNumber;
    operator = "*";
  } else if (operation === DIVIDE) {
    currentResult /= enteredNumber;
    operator = "/";
  }
  createAndWriteOutput(initialResult, operator, enteredNumber);
  writeToLog(operation, initialResult, enteredNumber, currentResult);
}

//Grouping all buttons and linking them to functions.
addBtn.addEventListener("click", calculate.bind(this, ADD));
subtractBtn.addEventListener("click", calculate.bind(this, SUBTRACT));
divideBtn.addEventListener("click", calculate.bind(this, DIVIDE));
multiplyBtn.addEventListener("click", calculate.bind(this, MULTIPLY));
