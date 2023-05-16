// 
const scoreDisplay = document.getElementById("scoreIndex");

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
var points = scoreDisplay.innerHTML;
// points++;

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
  // setTimeout(() => {
  //   computerChoiceDisplay.innerHTML = computerChoice;
  // }, 1000);
}

function getResults() {
  if (computerChoice === playerChoice) {
    result = "DRAW"
  }
  else if (computerChoice === "rock" && playerChoice === "paper") {
    result = "YOU WIN";
    // console.log(points += 1);
    scoreDisplay.innerHTML = points++;
  }
  else if (computerChoice === "rock" && playerChoice === "scissors") {
    result = "YOU LOSE"
    // scoreDisplay.innerHTML = points--;
  }
  else if (computerChoice === "paper" && playerChoice === "scissors") {
    result = "YOU WIN";
    // console.log(points += 1);
    scoreDisplay.innerHTML = points++;
  }
  else if (computerChoice === "paper" && playerChoice === "rock") {
    result = "YOU LOSE";
    // console.log(points += 1);
    // scoreDisplay.innerHTML = points--;
  }
  else if (computerChoice === "scissors" && playerChoice === "rock") {
    result = "YOU WIN";
    // console.log(points += 1);
    scoreDisplay.innerHTML = points++;
  }
  else {
    result = "YOU LOSE"
    // scoreDisplay.innerHTML = points--;
  }
  resultDisplay.innerHTML = result;
  // setTimeout(() => {
  //   resultDisplay.innerHTML = result;
  // }, 2000);
}