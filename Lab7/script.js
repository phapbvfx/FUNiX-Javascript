"use strict";

let message = document.querySelector(".message");
let number = document.querySelector(".number");
let body = document.querySelector("body");

let guessLabel = document.querySelector(".guess");

let scoreLabel = document.querySelector(".score");
let score = 20;
scoreLabel.textContent = score;

let highscoreLabel = document.querySelector(".highscore");
let highscore = 0;
highscoreLabel.textContent = highscore;

let btnCheck = document.querySelector(".btn.check");
let btnReset = document.querySelector(".btn.again");

let result = Math.trunc(Math.random() * 20) + 1;

btnCheck.addEventListener("click", () => {
  let guessValue = Number(guessLabel.value);
  console.log(result, guessValue, score);
  if (!guessValue) {
    message.textContent = "No Number";
  }

  if (guessValue !== result) {
    score--;
    scoreLabel.textContent = score;
    if (score >= 1) {
      guessValue > result
        ? (message.textContent = "Too large")
        : (message.textContent = "Too Small");
    } else {
      message.textContent = "Game over";
      number.textContent = result;
      // restart();
      return;
    }
  } else {
    number.textContent = result;
    message.textContent = "Correct number";

    body.style.backgroundColor = "#60b347";

    number.style.width = "30rem";

    scoreLabel.textContent = score;
    highscore < score
      ? (highscoreLabel.textContent = score)
      : (highscoreLabel.textContent = highscore);
  }
});
//lab 10
btnReset.addEventListener("click", restart);

function restart() {
  result = Math.trunc(Math.random() * 20) + 1;
  guessLabel.value = null;
  score = 20;
  scoreLabel.textContent = score;
  message.textContent = "Guess My Number!";
  number.textContent = "?";
  body.style.backgroundColor = "#222";
}
