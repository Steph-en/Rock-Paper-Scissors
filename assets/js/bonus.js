const handOptions = {
  "paper": "/assets/images/Paper.png",
  "scissors": "/assets/images/Scissors.png",
  "rock": "/assets/images/Rock.png",
  "lizard": "/assets/images/lizard.png",
  "spock": "/assets/images/spock.png"
}

let Score = 0;

document.querySelector(".score h1").innerText = localStorage.getItem("score");

const pickUserHand = (hand) => {
  console.log(hand)

  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  document.getElementById("userChoiceHand").src = handOptions[hand];

  let computerHand = pickComputerHand();

  judge(hand, computerHand);
}

const pickComputerHand = () => {
  let hands = ["paper", "scissors", "rock", "lizard", "spock"];

  let computerHand = hands[Math.floor(Math.random() * 5)];

  console.log(computerHand);

  document.getElementById("computerChoiceHand").src = handOptions[computerHand];

  return computerHand;
}

const judge = (userHand, computerHand) => {
  if (userHand == "paper" && computerHand == "scissors") {
    setDecision("You Lose");
    if (Score > 0) {
      setScore(Score - 1);
    }
  }
  if (userHand == "paper" && computerHand == "rock") {
    setDecision("You Win");
    setScore(Score + 1);
  }
  if (userHand == "paper" && computerHand == "lizard") {
    setDecision("You Lose");
    if (Score > 0) {
      setScore(Score - 1);
    }
  }
  if (userHand == "paper" && computerHand == "spock") {
    setDecision("You Win");
    setScore(Score + 1);
  }
  if (userHand == "scissors" && computerHand == "rock") {
    setDecision("You Lose");
    if (Score > 0) {
      setScore(Score - 1);
    }
  }
  if (userHand == "scissors" && computerHand == "paper") {
    setDecision("You Win");
    setScore(Score + 1);
  }
  if (userHand == "scissors" && computerHand == "spock") {
    setDecision("You Lose");
    if (Score > 0) {
      setScore(Score - 1);
    }
  }
  if (userHand == "scissors" && computerHand == "lizard") {
    setDecision("You Win");
    setScore(Score + 1);
  }
  if (userHand == "rock" && computerHand == "paper") {
    setDecision("You Lose");
    if (Score > 0) {
      setScore(Score - 1);
    }
  }
  if (userHand == "rock" && computerHand == "scissors") {
    setDecision("You Win");
    setScore(Score + 1);
  }
  if ((userHand == "rock" && computerHand == "spock")) {
    setDecision("You Lose");
    if (Score > 0) {
      setScore(Score - 1);
    }
  }
  if ((userHand == "rock" && computerHand == "lizard")) {
    setDecision("You Win");
    setScore(Score + 1);
  }
  if ((userHand == "lizard" && computerHand == "paper")) {
    setDecision("You Win");
    setScore(Score + 1);
  }
  if ((userHand == "lizard" && computerHand == "scissors")) {
    setDecision("You Lose");
    if (Score > 0) {
      setScore(Score - 1);
    }
  }
  if ((userHand == "lizard" && computerHand == "spock")) {
    setDecision("You Win");
    setScore(Score + 1);
  }
  if ((userHand == "lizard" && computerHand == "rock")) {
    setDecision("You Lose");
    if (Score > 0) {
      setScore(Score - 1);
    }
  }
  if ((userHand == "spock" && computerHand == "scissors")) {
    setDecision("You Win");
    setScore(Score + 1);
  }
  if ((userHand == "spock" && computerHand == "lizard")) {
    setDecision("You Lose");
    if (Score > 0) {
      setScore(Score - 1);
    }
  }
  if ((userHand == "spock" && computerHand == "rock")) {
    setDecision("You Win");
    setScore(Score + 1);
  }
  if ((userHand == "spock" && computerHand == "paper")) {
    setDecision("You Lose");
    if (Score > 0) {
      setScore(Score - 1);
    }
  }
  else if (userHand == computerHand) {
    setDecision(" ");
  }
}

const setDecision = (decision) => {
  console.log(decision);
  document.querySelector(".decision h1").innerText = decision;
}

const setScore = (score) => {
  console.log(score);

  Score = score;

  document.querySelector(".score h1").innerText = score;

  localStorage.setItem('score', Score);

  document.querySelector(".score h1").innerText = localStorage.getItem("score");
}

const playAgain = () => { 
  let hands = document.querySelector(".hands");
  hands.style.display = "flex";

  let contest = document.querySelector(".contest");
  contest.style.display = "none";
}

const rules = () => {
  let rule = document.querySelector(".ruleimg");

  rule.style.display = "flex";

  let closerules = document.querySelector(".bi")
  closerules.addEventListener('click', () => {
    rule.style.display = "none"
  })
}