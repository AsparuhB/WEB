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

// const hobbies = ["Sports", "Cooking"];

// hobbies.push("Reading");
// hobbies.unshift("Coding");

// const shifted = hobbies.shift();
// let popped = hobbies.pop();

// hobbies.splice(1, 0, "Good food");

// console.log(hobbies);

// const removedElements = hobbies.splice(0, 2, "Newly added element");
// console.log(hobbies);
// console.log(removedElements);

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// // const storedResults = testResults.slice(2);
// const storedResults = testResults.concat([3.99, 2]);

// testResults.push(5.91);

// console.log(testResults, storedResults);
// console.log(testResults.indexOf(1.5));
// console.log(testResults.lastIndexOf(1.5))

// const personData = [{name: "Max"}, {name: "Manuel"}];
// console.log(personData.indexOf({name: "Manuel"}));

// const manuel = personData.find((person, index, persons) => {
//     return person.name === "Manuel";
// });

// manuel.name = "Anna";
// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//     return person.name === "Max";
// });

// console.log(maxIndex)

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //     taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });
// console.log(taxAdjustedPrices);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   return priceObj;
// });
// // console.log(prices, taxAdjustedPrices);

// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedPrices);

// const filteredArray = prices.filter((price)   => price > 6);

// console.log(filteredArray);

// // let sum = 0;

// // prices.forEach((price) => {
// //     sum += price;
// // })
// // console.log(sum);

// // const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

// // console.log(sum)

// const originalArray = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];

// const sum = originalArray
//   .map((obj) => obj.price)
//   .reduce((sumVal, curVal) => sumVal + curVal, 0);

// console.log(originalArray);
// console.log(sum);

// const data = "new york;10.99;2000";

// const transformedData = data.split(";");

// console.log(transformedData);

// const nameFragments = ["Max", "Schwarz"];
// const name = nameFragments.join(" ");
// console.log(name);

// const copiedNameFragments = [...nameFragments];
// nameFragments.unshift("Mr");
// console.log(nameFragments, copiedNameFragments);

// console.log(Math.min(...prices));

// const persons = [
//   { name: "Max", age: 30 },
//   { name: "Manuel", age: 31 },
// ];
// const copiedPersons = [...persons];

// const copiedPersonsDiff = [
//   ...persons.map((person) => ({ name: person.name, age: person.age })),
// ];

// persons.push({ name: "Anna", age: 29 });
// persons[0].age = 31

// console.log(persons, copiedPersonsDiff);

// const nameData = ["Max", "Schwarz", "Mr", 30];

// const [firstName, lastName, ...otherInformation] = nameData;

// console.log(firstName, lastName, otherInformation);

// const people = [
//   { name: "Alice", age: 28, favoriteFood: "Pizza" },
//   { name: "Bob", age: 22, favoriteFood: "Burgers" },
//   { name: "Charlie", age: 35, favoriteFood: "Sushi" },
//   { name: "David", age: 30, favoriteFood: "Pasta" },
//   { name: "Eve", age: 25, favoriteFood: "Tacos" },
// ];

// const peopleChange = people.map((person) => {
//   return { name: person.name, age: person.age + 1, favoriteFood: person.favoriteFood };
// });

// peopleChange.push({ name: "Alex", age: 30, favoriteFood: "Sadness" });

// console.log(people, peopleChange);
