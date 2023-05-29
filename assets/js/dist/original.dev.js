"use strict";

// 
var handOptions = {
  "paper": "/assets/images/icon-paper.svg",
  "scissors": "/assets/images/icon-scissors.svg",
  "rock": "/assets/images/icon-rock.svg"
}; // Declearation of The Score value

var Score = 0; // Assignment of The score Value to The Local Storage Value

document.querySelector(".score h1").innerText = localStorage.getItem("score");

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
  var hands = ["paper", "scissors", "rock"];
  var computerHand = hands[Math.floor(Math.random() * 3)];
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
}; // Decision Function


var setDecision = function setDecision(decision) {
  console.log(decision);
  document.querySelector(".decision h1").innerText = decision;
}; // Score Count Function


var setScore = function setScore(score) {
  console.log(score); // Let Score = the score value to perform increase 

  Score = score;
  document.querySelector(".score h1").innerText = Score; // Saving the score in Local storage

  localStorage.setItem('score', Score); // Getting the Score form Local Storage

  document.querySelector(".score h1").innerText = localStorage.getItem("score");
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