// 
const scorePoints = document.querySelector("scoreIndex")

// 
const resultDisplay = document.getElementById("result");

// 
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");

// 
const choice = document.querySelectorAll("button");

// 
let playerChoice;
let computerChoice;
let result;


// 
choice.forEach(choice => choice.addEventListener('click', (e) => {
  playerChoice = e.target.id;
  playerChoiceDisplay.innerHTML = playerChoice;
  getComputerChoice();
  getResults();
}));

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // or choice.lenght
  // console.log(randomNumber) 
  if (randomNumber === 1) {
    computerChoice = "rock"
  }
  if (randomNumber === 2) {
    computerChoice = "paper"
  }
  if (randomNumber === 3) {
    computerChoice = "scissore"
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResults() {
  if( computerChoice === playerChoice ) {
    result = "DRAW"
  }
  if( computerChoice === "rock" && playerChoice === "paper") {
    result = "YOU WIN"
  }
  if( computerChoice === "rock" && playerChoice === "scissors") {
    result = "YOU LOSE"
  }
  if( computerChoice === "paper" && playerChoice === "scissors") {
    result = "YOU WIN"
  }
  if( computerChoice === "paper" && playerChoice === "rock") {
    result = "YOU LOSE"
  }
  if( computerChoice === "scissors" && playerChoice === "rock") {
    result = "YOU WIN"
  }
  if( computerChoice === "scissors" && playerChoice === "paper") {
    result = "YOU LOSE"
  } 
  resultDisplay.innerHTML = result;
}

function getPoints() {
  
}

// Option 2
// const resultDisplay2 = document.createElement("h1");

// // 
// const playerChoiceDisplay2 = document.createElement("h1");
// const computerChoiceDisplay2 = document.createElement("h1");

// // 
// const game = document.getElementById("game");
// game.append(resultDisplay2, playerChoiceDisplay2, computerChoiceDisplay2)