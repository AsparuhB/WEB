const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers = Array(5);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of();
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li')
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const moreNumbers = Array.from('Hi!');
console.log(moreNumbers); 