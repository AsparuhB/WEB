const defaultResult = 0;
let currentResult = defaultResult;

function addsNumbers() {
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, "");
}

addBtn.addEventListener("click", addsNumbers);
