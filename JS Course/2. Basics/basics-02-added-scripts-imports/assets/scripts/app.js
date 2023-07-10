const defaultResult = 0;
let currentResult = defaultResult;

function addsNumbers(num1, num2) {
	  num1 + num2;
	alert(`The result is ${result}`);
}

addsNumbers(1, 2);
addsNumbers(5, 5);

currentResult = (currentResult + 10) * 3 / 2 - 1; 

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);
