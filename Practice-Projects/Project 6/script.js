const form = document.getElementById('form');
const Chances = document.querySelector('.chances');
const HighOrLow = document.querySelector('.HighOrLow');
const Submit = document.getElementById('submitBtn');
const PreviousGuess = document.getElementById('previousGuess');
// console.log(PreviousGuess);
const userInput = document.getElementById('guessField');
let rightNum = Math.floor(Math.random() * 100 + 1)
let list = [];
let numGuess = 1;
let playgame = true;

console.log(rightNum);

if (playgame) {

    Submit.addEventListener('click', (e) => {
        e.preventDefault();
        guess = parseInt(userInput.value)
        validateGuess(guess)
        checkGuess(guess)
        // displayGuess(guess);
        // PreviousGuess.innerHTML += guess;

    })
}
// console.log(guess);


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Value can't be NaN.")
    } else if (guess === '') {
        alert("Value can't be Empty.")
    } else if (guess < 1) {
        alert("Value can't be less than 1.")
    } else if (guess > 100) {
        alert("Value can't be greater than 100.")
    } else {
        list.push(guess)
        // PreviousGuess.innerHTML += `${guess}\n`;
        if(numGuess === 10){
            console.log(numGuess);
        //  HighOrLow.innerHTML = `Game Over. Random Number was ${rightNum}`
            
        displayGuess(guess)
        endGame()
        displayMessage(`Game over. Random Number was ${rightNum}`);
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === rightNum) {
        displayMessage(`You guessed it right, the number was ${rightNum}`)
        endGame();
    } else if (guess < rightNum) {
        displayMessage(`Number is too low.`)
    }
    else if (guess > rightNum) {
        displayMessage(`Number is too high.`)
    }
}
function displayGuess(guess) {
    userInput.value = '';
    PreviousGuess.innerHTML += `${guess},\n`;
    numGuess++;
    Chances.innerHTML=`${11 - numGuess}`
}
function displayMessage(message) {
    // console.log("displayMessage called");
    
    HighOrLow.innerHTML = `${message}`
}


function endGame(){
    // console.log("Function Executed");
    
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    // submit.setAttribute('disabled', '');
    // PreviousGuess.innerHTML = '';
    document.getElementById('startNew').style.display = "flex";
    numGuess= 1;
    playgame = false;
    // displayMessage(`Start New Game`)
    newGame();

}

function newGame(){
    const newGameBtn = document.getElementById('startNew');
    newGameBtn.addEventListener('click', function(){
        rightNum = Math.floor(Math.random() * 100 + 1)
        PreviousGuess.innerHTML = '';
        numGuess = 1;
        Chances.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        HighOrLow.innerHTML = '';
        document.getElementById('startNew').style.display = "none";
        list = []
        playgame = true;
    })
   
}