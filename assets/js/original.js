
// 
const handOptions = {
  "paper": "/assets/images/icon-paper.svg",
  "scissors": "/assets/images/icon-scissors.svg",
  "rock": "/assets/images/icon-rock.svg"
}

let Score = 0;

const pickUserHand = (hand) => {
  console.log(hand)

  // hide the start page 
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  // show the battle page 
  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  // User choice
  document.getElementById("userChoiceHand").src = handOptions[hand];

  // Calling Computer Choice
  let computerHand = pickComputerHand();

  // Calling Judge
  judge(hand, computerHand);
}

const pickComputerHand = () => {
  let hands = ["paper", "scissors", "rock"];

  let computerHand = hands[Math.floor(Math.random() * 3)];

  console.log(computerHand);

  // Computer choice
  document.getElementById("computerChoiceHand").src = handOptions[computerHand];

  return computerHand;
}

const judge = (userHand, computerHand) => {
  if (userHand == "paper" && computerHand == "scissors") {
    setDecision("You Lose");
  }
  if (userHand == "paper" && computerHand == "rock") {
    setDecision("You Win");
    setScore(Score + 1);
  }
  if (userHand == "scissors" && computerHand == "rock") {
    setDecision("You Lose");
  }
  if (userHand == "scissors" && computerHand == "paper") {
    setDecision("You Win");
    setScore(Score + 1);
  }
  if (userHand == "rock" && computerHand == "paper") {
    setDecision("You Lose");
  }
  if (userHand == "rock" && computerHand == "scissors") {
    setDecision("You Win");
    setScore(Score + 1);
  } else if (userHand == computerHand) {
    setDecision("It's a Tie");
  }
}

// Decision Function
const setDecision = (decision) => {
  console.log(decision);
  document.querySelector(".decision h1").innerText = decision;
}

// Score Count Function
const setScore = (score) => {
  console.log(score);

  // Let Score = the score value the perform increase 
  Score = score;

  document.querySelector(".score h1").innerText = score;
}

// Continue Game Function
const playAgain = () => {
  // Show the start page 
  let hands = document.querySelector(".hands");
  hands.style.display = "flex";

  // Hide the battle page 
  let contest = document.querySelector(".contest");
  contest.style.display = "none";
}

// Rules
const rules = () => {
  let rule = document.querySelector(".ruleimg");

  rule.style.display = "flex";

  let closerules = document.querySelector(".bi")
  closerules.addEventListener('click', () => {
    rule.style.display = "none"
  })
}