const startGameBtn = document.getElementById('start-game-btn');

const start = function() {
    console.log("Game is starting...");
}; // this is a function expression, not a declaration/statement. 
// functions without names, stored in variables are also called anonymous expressions.

// const person = {
//     name: "Asparuh", // This is a property of the function.
//     greet: function greet() {
//         console.log("Hello there!");
//     } // Functions, stored inside objects are called Methods. They are accessed by a .
// };

// person.greet();

// console.dir(startGame);  

startGameBtn.addEventListener('click', start)
