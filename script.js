'use strict';

// Elements selection
const score0Element = document.getElementById('score--0');
const current0Element = document.getElementById('current--0');

const score1Element = document.getElementById('score--1');
const current1Element = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

//game initial conditions
score0Element.textContent = '0';
score1Element.textContent = '0';
diceElement.classList.add('hidden');

const totalScores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//roll the dice
btnRoll.addEventListener('click', () => {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(diceNumber);

  diceElement.classList.remove('hidden');
  diceElement.src = `src/img/dice${diceNumber}.png`;

  if (diceNumber !== 1) {
    currentScore += diceNumber;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    activePlayer = activePlayer === 0 ? 1 : 0;

    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', () => {
  totalScores[activePlayer] += currentScore;
});