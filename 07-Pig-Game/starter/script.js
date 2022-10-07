'use strict';

const score0Elm = document.querySelector('#score--0');
const score1Elm = document.querySelector('#score--1');
const btnNewElm = document.querySelector('.btn--new');
const btnRollElm = document.querySelector('.btn--roll');
const btnHoldElm = document.querySelector('.btn--hold');

const MAX_SCORE = 10;

const diceElm = document.querySelector('.dice');

let activePlayer = 0;
let activePlayerCurrentScore = 0;
let activePlayerTotalScore = 0;

resetGame();

function resetGame() {
  score0Elm.textContent = score1Elm.textContent = 0;
  diceElm.classList.add('hidden');

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');

  activePlayer = 0;
  activePlayerCurrentScore = 0;
  activePlayerTotalScore = 0;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
}

function showModal() {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
  document.querySelector('.modal').classList.remove('hidden');
  document.querySelector('.overlay').classList.remove('hidden');
  document.querySelector('#winner').textContent = `Player ${
    activePlayer + 1
  } Wins 🏆`;
}

function hideModal() {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--winner');
  resetGame();
}

function switchPlayer() {
  activePlayerTotalScore = Number(
    document.querySelector(`#score--${activePlayer}`).textContent
  );
  activePlayerTotalScore += activePlayerCurrentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    activePlayerTotalScore;

  if (activePlayerTotalScore >= MAX_SCORE) {
    showModal();
    return;
  }
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  activePlayerCurrentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    activePlayerCurrentScore;
  activePlayer = activePlayer ? 0 : 1;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  console.log(`Switching Active Player to ${activePlayer}...`);
}

function rollDice() {
  const diceFace = Math.trunc(Math.random() * 6) + 1;
  diceElm.src = `dice-${diceFace}.png`;
  diceElm.classList.remove('hidden');

  activePlayerCurrentScore = Number(
    document.querySelector(`#current--${activePlayer}`).textContent
  );
  if (diceFace > 1) {
    activePlayerCurrentScore += diceFace;
  } else {
    activePlayerCurrentScore = 0;
    switchPlayer();
  }
  document.querySelector(`#current--${activePlayer}`).textContent =
    activePlayerCurrentScore;
}

btnRollElm.addEventListener('click', rollDice);
btnHoldElm.addEventListener('click', switchPlayer);
btnNewElm.addEventListener('click', resetGame);

document.querySelector('.close-modal').addEventListener('click', hideModal);
