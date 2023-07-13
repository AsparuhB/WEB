const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];    // Array

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}   // parseInt() converts string to number

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}   // `` is a template literal

function writeToLog(  // function to write to log
  operationIdentifier, // string 
  prevResult, // result before calculation  
  operationNumber, // number entered by user
  newResult // result after calculation
) {
  const logEntry = {  // object
    operation: operationIdentifier, // string
    prevResult: prevResult,  // result before calculation
    number: operationNumber, // number entered by user
    result: newResult // result after calculation
  }; // object
  logEntries.push(logEntry); // push() adds new element to end of array
  console.log(logEntries); // console.log() prints to console
} // push() adds new element to end of array

function add() { // function to add
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
} 

function subtract() { // function to subtract
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() { // function to multiply
  const enteredNumber = getUserNumberInput(); 
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
} 

function divide() { // function to divide
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add); // event listener
subtractBtn.addEventListener('click', subtract); // event listener 
multiplyBtn.addEventListener('click', multiply); // event listener
divideBtn.addEventListener('click', divide);  // event listener
