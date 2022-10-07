'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', checkNumber);

let userScore = 20;
let highScore = 0;

const bgSuccessColor = '#60b347';
const bgFailColor = '#FF0000';
const tooLowMessage = '📉 Too Low !';
const tooHighMessage = '📈 Too High !';
const correctMessage = '🏆 Correct !!!';
const gameOverMessage = '🚨 Game Over !. Please start again !';

/* Default Values */
const bgNormalColor = '#222222';
const defaultMessage = 'Start guessing...';
const errorMessage = '🛑 Enter number between 1 and 20...';

function resetGame() {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  userScore = 20;
  document.querySelector('body').style.backgroundColor = bgNormalColor;
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = userScore;
  document.querySelector('.message').textContent = defaultMessage;
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.check').textContent = 'Check!';
  document.querySelector('.check').removeEventListener('click', resetGame);
  document.querySelector('.check').addEventListener('click', checkNumber);
}

function checkNumber() {
  let userInput = Number(document.querySelector('.guess').value);

  if (!userInput || userInput <= 0 || userInput > 20) {
    document.querySelector('.message').textContent = errorMessage;
    userScore = userScore > 0 ? userScore - 1 : 0;
    document.querySelector('.score').textContent = userScore;
  } else {
    console.log(userInput);
    if (userInput === randomNumber) {
      document.querySelector('.message').textContent = correctMessage;
      document.querySelector('body').style.backgroundColor = bgSuccessColor;
      highScore = userScore > highScore ? userScore : highScore;
      document.querySelector('.highscore').textContent = highScore;

      document.querySelector('.number').textContent = randomNumber;
      document.querySelector('.number').style.width = '30rem';

      document.querySelector('.check').textContent = 'Restart Game.';
      document
        .querySelector('.check')
        .removeEventListener('click', checkNumber);
      document.querySelector('.check').addEventListener('click', resetGame);
    } else {
      document.querySelector('.message').textContent =
        userInput < randomNumber ? tooLowMessage : tooHighMessage;
      userScore = userScore > 0 ? userScore - 1 : 0;
      document.querySelector('.score').textContent = userScore;
    }
  }

  if (userScore == 0) {
    document.querySelector('body').style.backgroundColor = bgFailColor;
    document.querySelector('.message').textContent = gameOverMessage;
    document.querySelector('.check').textContent = 'Restart Game.';
    document.querySelector('.check').removeEventListener('click', checkNumber);
    document.querySelector('.check').addEventListener('click', resetGame);
  }
}

document.querySelector('.again').addEventListener('click', resetGame);
