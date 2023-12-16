/* Ace works as 1 and 11 in card game and jack, queen, king works as 10 */

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false; 
let message = '';
let player = {
  name: "Per",
  chips: 200
}

const startBtnEl = document.querySelector('.start-btn');
const messageEl = document.querySelector('.message-el');
const sumEl = document.querySelector('.sum-el');
const cardsEl = document.querySelector('.cards-el');
const newCardEl = document.querySelector('.new-card');
const resetBtnEl = document.querySelector('.reset-btn');
const playerEl = document.querySelector('.player-el');

cards.forEach((card) => {
  sum += card;
});

playerEl.textContent = player.name + ": $" + player.chips;

function renderGame () {
  if (sum <= 20) {
    message = "Do you want to draw a new card!";
  } else if (sum === 21) {
    message = "You've got blackJack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
  sumEl.innerText = `Sum: ${sum}`;
  cardsEl.innerText = `Cards: ${cards}`;
  cardsEl.style.color = "rgb(228, 174, 108)";
}

function getRandomNumber () {
  let randomNumber = Math.floor((Math.random() * 13) + 1);

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function newCard () {
  // Math.floor basically removes decimals
  // Math.random generates a number between 0 and 1 (not inclusive 1)
  // use shift and unshift

  if (isAlive === true && hasBlackJack === false) {
  const card = getRandomNumber();
  sum += card; 
  cards.push(card);
  renderGame();
  }
}

function startGame () {
  isAlive = true; 
  renderGame();
}

function resetScore () {
  cards = [];
  sum = 0;
  renderGame();
}

startBtnEl.addEventListener('click', () => {
  startGame();
});

newCardEl.addEventListener('click', () => {
  newCard();
})

resetBtnEl.addEventListener('click', () => {
  resetScore();
})


// Cash out!
console.log(hasBlackJack);