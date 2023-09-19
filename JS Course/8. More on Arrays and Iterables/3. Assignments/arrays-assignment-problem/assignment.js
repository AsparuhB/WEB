const numbers = [1, 5, 4, 12, 24, 3, 4, 53, 27.55, 89.23, 99];

const numsGreater5 = numbers.filter((number) => number > 5);
console.log(numsGreater5);

const mappedValue = numbers.map((val) => ({ num: val }));
console.log(mappedValue);

const reducedNumbers = numbers.reduce(
  (totalVal, curVal) => totalVal * curVal,
  1
);
console.log(reducedNumbers);

// findMax function logic for finding the max number
const findMax = (arguments) => {
  const maxNum = Math.max(...arguments);
  return maxNum;
};

console.log(findMax(numbers));

// findind the min and max numbers
const arrayOfMinMax = [];
const findMinMax = (arguments) => {
  const maxNum = Math.max(...arguments);
  arrayOfMinMax.push(maxNum);
  const minNum = Math.min(...arguments);
  arrayOfMinMax.push(minNum);
};
findMinMax(numbers);
console.log(arrayOfMinMax);

const [maxNum, minNum] = arrayOfMinMax;

console.log(minNum, maxNum);


const randnumbers = [1, 1, 2, 5, 5, 6, 7, 4, 3, 4, 6, 2];

const setItems = new Set();

for (const element of randnumbers) {
  setItems.add(element);
}
console.log(setItems);
