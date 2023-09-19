const numbers = [1, 5, 4, 12, 24, 3, 4, 53, 27.55, 89.23, 99];

const numsGreater5 = numbers.filter((number) => number > 5);
console.log(numsGreater5)

const mappedValue = numbers.map((val) => ({ num: val }));
console.log(mappedValue)

const reducedNumbers = numbers.reduce(
  (totalVal, curVal) => totalVal * curVal,
  1
);
console.log(reducedNumbers)

const arrayOfMinMax = [];
const findMax = (arguments) => {
  const maxNum = Math.max(...arguments);
  arrayOfMinMax.push(maxNum);
  const minNum = Math.min(...arguments);
  arrayOfMinMax.push(minNum);
};

findMax(numbers);

const [maxNum, minNum] = arrayOfMinMax;

const randnumbers = [1, 1, 2, 5, 5, 6, 7, 4, 3, 4, 6, 2];

const setItems = new Set();

for (const element of randnumbers) {
  setItems.add(element);
}
