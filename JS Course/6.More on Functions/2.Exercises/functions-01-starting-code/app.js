const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;


const getPlayerChoice = function () {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, "").toUpperCase();

  try {
    selection;
  } catch (error) {
    selection = DEFAULT_USER_CHOICE;
  }
  if (
    selection !== ROCK && 
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};



try {
    getPlayerChoice();
} catch (error) {
    selection = DEFAULT_USER_CHOICE;
}

startGameBtn.addEventListener("click", function () {
    if(gameIsRunning) {
        return;
    }
    gameIsRunning = true;
  console.log("Game is starting...");
  const getPlayerSelection = getPlayerChoice();
  console.log(getPlayerSelection);
});
