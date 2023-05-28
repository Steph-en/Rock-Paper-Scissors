"use strict";

// 
var handOptions = {
  "paper": "/assets/images/icon-paper.svg",
  "scissors": "/assets/images/icon-scissors.svg",
  "rock": "/assets/images/icon-rock.svg",
  "lizard": "/assets/images/icon-lizard.svg",
  "spock": "/assets/images/icon-spock.svg"
};
var Score = 0;

var pickUserHand = function pickUserHand(hand) {
  console.log(hand); // hide the start page 

  var hands = document.querySelector(".hands");
  hands.style.display = "none"; // show the battle page 

  var contest = document.querySelector(".contest");
  contest.style.display = "flex"; // User choice

  document.getElementById("userChoiceHand").src = handOptions[hand]; // Calling Computer Choice

  var computerHand = pickComputerHand(); // Calling Judge

  judge(hand, computerHand);
};

var pickComputerHand = function pickComputerHand() {
  var hands = ["paper", "scissors", "rock", "lizard", "spock"];
  var computerHand = hands[Math.floor(Math.random() * 5)];
  console.log(computerHand); // Computer choice

  document.getElementById("computerChoiceHand").src = handOptions[computerHand];
  return computerHand;
};

var judge = function judge(userHand, computerHand) {
  if (userHand == "paper" && computerHand == "scissors") {
    setDecision("You Lose");
  }

  if (userHand == "paper" && computerHand == "rock") {
    setDecision("You Win");
    setScore(Score + 1);
  }

  if (userHand == "paper" && computerHand == "lizard") {
    setDecision("You Lose");
  }

  if (userHand == "paper" && computerHand == "spock") {
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

  if (userHand == "scissors" && computerHand == "spock") {
    setDecision("You Lose");
  }

  if (userHand == "scissors" && computerHand == "lizard") {
    setDecision("You Win");
    setScore(Score + 1);
  }

  if (userHand == "rock" && computerHand == "paper") {
    setDecision("You Lose");
  }

  if (userHand == "rock" && computerHand == "scissors") {
    setDecision("You Win");
    setScore(Score + 1);
  }

  if (userHand == "rock" && computerHand == "spock") {
    setDecision("You Lose");
  }

  if (userHand == "rock" && computerHand == "lizard") {
    setDecision("You Win");
    setScore(Score + 1);
  }

  if (userHand == "lizard" && computerHand == "paper") {
    setDecision("You Win");
    setScore(Score + 1);
  }

  if (userHand == "lizard" && computerHand == "scissors") {
    setDecision("You Lose");
  }

  if (userHand == "lizard" && computerHand == "spock") {
    setDecision("You Win");
    setScore(Score + 1);
  }

  if (userHand == "lizard" && computerHand == "rock") {
    setDecision("You Lose");
  }

  if (userHand == "spock" && computerHand == "scissors") {
    setDecision("You Win");
    setScore(Score + 1);
  }

  if (userHand == "spock" && computerHand == "lizard") {
    setDecision("You Lose");
  }

  if (userHand == "spock" && computerHand == "rock") {
    setDecision("You Win");
    setScore(Score + 1);
  }

  if (userHand == "spock" && computerHand == "paper") {
    setDecision("You Lose");
  } else if (userHand == computerHand) {
    setDecision("It's a Tie");
  }
}; // Decision Function


var setDecision = function setDecision(decision) {
  console.log(decision);
  document.querySelector(".decision h1").innerText = decision;
}; // Score Count Function


var setScore = function setScore(score) {
  console.log(score); // Let Score = the score value the perform increase 

  Score = score;
  document.querySelector(".score h1").innerText = score;
}; // Continue Game Function


var playAgain = function playAgain() {
  // Show the start page 
  var hands = document.querySelector(".hands");
  hands.style.display = "flex"; // Hide the battle page 

  var contest = document.querySelector(".contest");
  contest.style.display = "none";
}; // Rules


var rules = function rules() {
  var rule = document.querySelector(".ruleimg");
  rule.style.display = "flex";
  var closerules = document.querySelector(".bi");
  closerules.addEventListener('click', function () {
    rule.style.display = "none";
  });
};