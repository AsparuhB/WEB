const defaultResult = 0;
let currentResult = defaultResult;

function addsNumbers(num1, num2) {
  const result = num1 + num2;
  return result;
}

addBtn.addEventListener("click", addsNumbers);

outputResult(currentResult, calculationDescription);
