"use strict";

const scores = document.querySelectorAll(".score");

const diceEl = document.querySelector(".dice");

const currents = document.querySelectorAll(".current-score");

const btnNew = document.querySelector(".btn.btn--new");
const btnRoll = document.querySelector(".btn.btn--roll");
const btnHold = document.querySelector(".btn.btn--hold");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const players = document.querySelectorAll(".player");

diceEl.classList.add("hidden");

let playerScore;
let currentScore;
let activePlayer;
let playing;

let scoreWin = 20;

const start = () => {
  playerScore = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  players.forEach((x, i) => {
    x.classList.remove("player--winner");
    x.classList.remove("player--active");
    currents[i].textContent = 0;
    scores[i].textContent = 0;
  });
  players[activePlayer].classList.add("player--active");
  console.log(this);
};

btnRoll.addEventListener("click", () => {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      currents[activePlayer].textContent = currentScore;
    } else {
      resetCurrentScore();
    }
  }
});

btnHold.addEventListener("click", () => {
  if (playing) {
    playerScore[activePlayer] += currentScore;
    if (playerScore[activePlayer] >= scoreWin) {
      playing = false;
      diceEl.classList.add("hidden");
      players[activePlayer].classList.add("player--winner");
      players[activePlayer].classList.remove("player--active");
    }
    scores[activePlayer].textContent = playerScore[activePlayer];
    resetCurrentScore();
  }
});

btnNew.addEventListener("click", start);
const resetCurrentScore = () => {
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
  currents[activePlayer].textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer ? 0 : 1;
};
start.bind(this);
