const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
    console.log("Game is starting...");
}

// const person = {
//     name: "Asparuh", // This is a property of the function.
//     greet: function greet() {
//         console.log("Hello there!");
//     } // Functions, stored inside objects are called Methods. They are accesed by a .
// };

// person.greet();

console.dir(startGame);

startGameBtn.addEventListener('click', startGame)
