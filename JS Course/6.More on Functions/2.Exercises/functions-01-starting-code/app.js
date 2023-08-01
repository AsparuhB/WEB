const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WON = "PLAYER_WON";
const RESULT_COMPUTER_WON = "COMPUTER_WON";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};
//  Normal function
// const getWinner = (cChoice, pChoice) => {
//   if (cChoice === pChoice) {
//     return RESULT_DRAW;
//   } else if (
//     (cChoice === ROCK && pChoice === PAPER) ||
//     (cChoice === PAPER && pChoice === SCISSORS) ||
//     (cChoice === SCISSORS) & (pChoice === ROCK)
//   ) {
//     return RESULT_PLAYER_WON;
//   } else {
//     return RESULT_COMPUTER_WON;
//   }
// };

// ARROW FUNCTION. WE can use it with Ternary expressions to shorten the code.
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS) & (pChoice === ROCK)
    ? RESULT_PLAYER_WON
    : RESULT_COMPUTER_WON;

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice, playerChoice);
  }

  let message = `You picked ${
    playerChoice || DEFAULT_USER_CHOICE
  }, computer picked ${computerChoice}, therefore `;
  if (winner === RESULT_DRAW) {
    message = message + "you had a draw.";
  } else if (winner === RESULT_COMPUTER_WON) {
    message = message + "COMPUTER won!";
  } else {
    message = message + "YOU won!";
  }
  alert(message);
  gameIsRunning = false;
});

// Not related to the game.

const sumUp = (...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};

console.log(sumUp(1, 5, 10, -3, 6, 10));
console.log(sumUp(1, 5, 10, -3, 6, 10, 25, 88));
