// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of();
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li')
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems)

// const moreNumbers = Array.from('Hi!');
// console.log(moreNumbers); 

// const analyticsData = [[1, 1,6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//     for (const dataPoint of data) {
//         console.log(dataPoint);
//     }
// }

const hobbies = ["Sports", "Cooking"];

hobbies.push("Reading");
hobbies.unshift("Coding");
console.log(hobbies);

let popped = hobbies.pop();
console.log(popped)