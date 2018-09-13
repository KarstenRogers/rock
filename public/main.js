let p1choice = "";
let p2choice = "";

const detectWinner = () => {
  if (p1choice !== "" && p2choice !== "") {
    let footer = document.querySelector("footer");

    if (p1choice === "rock" && p2choice === "paper") {
      footer.textContent = "player 2 wins";
    }

    if (p1choice === "rock" && p2choice === "rock") {
      footer.textContent = "tie";
    }

    if (
      (p1choice === "rock" && p2choice === "scissors") ||
      (p1choice === "paper" && p2choice === "rock")
    ) {
      footer.textContent = "player 1 wins";
    }

    if (p1choice === "paper" && p2choice === "rock") {
      footer.textContent = "player 1 wins";
    }

    if (p1choice === "paper" && p2choice === "paper") {
      footer.textContent = "tie";
    }

    if (p1choice === "paper" && p2choice === "scissors") {
      footer.textContent = "player 2 wins";
    }

    if (p1choice === "scissors" && p2choice === "rock") {
      footer.textContent = "player 2 wins";
    }

    if (p1choice === "scissors" && p2choice === "paper") {
      footer.textContent = "player 1 wins";
    }

    if (p1choice === "scissors" && p2choice === "scissors") {
      footer.textContent = "tie";
    }
  }
};

const clickedOnPlayerOne = event => {
  document.querySelector(".player-1").classList.add("choice-made");

  p1choice = "rock";

  console.log(p1choice);

  console.log(p2choice);

  detectWinner();
};
let clickedOnPlayerOnePaper = event => {
  document.querySelector(".player-1").classList.add("choice-made");

  p1choice = "paper";
  detectWinner();
};

let clickedOnPlayerOneScissors = event => {
  document.querySelector(".player-1").classList.add("choice-made");

  p1choice = "scissors";
  detectWinner();
};

const clickedOnPlayerTwo = event => {
  document.querySelector(".player-2").classList.add("choice-made");

  p2choice = "rock";
  detectWinner();
};
let clickedOnPlayerTwoPaper = event => {
  document.querySelector(".player-2").classList.add("choice-made");

  p2choice = "paper";
  detectWinner();
};

let clickedOnPlayerTwoScissors = event => {
  document.querySelector(".player-2").classList.add("choice-made");

  p2choice = "scissors";
  detectWinner();
};

const main = () => {
  let player1rock = document.querySelector(".player-1 .rock");

  player1rock.addEventListener("click", clickedOnPlayerOne);

  let player1scissors = document.querySelector(".player-1 .scissors");

  player1scissors.addEventListener("click", clickedOnPlayerOneScissors);

  let player1paper = document.querySelector(".player-1 .paper");

  player1paper.addEventListener("click", clickedOnPlayerOnePaper);

  let player2rock = document.querySelector(".player-2 .rock");

  player2rock.addEventListener("click", clickedOnPlayerTwo);

  let player2scissors = document.querySelector(".player-2 .scissors");

  player2scissors.addEventListener("click", clickedOnPlayerTwoScissors);

  let player2paper = document.querySelector(".player-2 .paper");

  player2paper.addEventListener("click", clickedOnPlayerTwoPaper);
};

document.addEventListener("DOMContentLoaded", main);
