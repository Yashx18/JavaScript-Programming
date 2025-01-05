let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber)

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const lowOrHi = document.querySelector('.lowOrHi');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', (event) => {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number.');
  } else if (guess < 1) {
    alert('Please enter a number more than 1.');
  } else if (guess > 100) {
    alert('Please enter a number less than 100.');
  } else if (guess === '') {
    alert("Can't be empty.");
  } else {
    prevGuess.push(guess);
    if (numGuess >= 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}.`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guessed it right.');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is TOO LOW');
  } else if (guess > randomNumber) {
    displayMessage('Number is TOO HIGH');
  }
}

function displayGuess(guess) {
  userInput.value = ''; // Can also be called CLEAN UP METHOD because it clears the user input after every turn.
  guessSlot.innerHTML += `${guess}\n`; // += is used keep on adding values.
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',(event)=>{

    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess= []
    numGuess = 1
    guessSlot.innerHTML= ''
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}
