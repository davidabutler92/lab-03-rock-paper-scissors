import {getRandomThrow, checkWinCondition} from './helper-functions.js';
// import functions and grab DOM elements
const button = document.getElementById('shoot-button');
const resetButton = document.getElementById('reset-button')
const winSpan = document.getElementById('win-span');
const loseSpan = document.getElementById('lose-span');
const drawSpan = document.getElementById('draw-span'); 
const gameOutcome = document.getElementById('game-outcome');
//const makeAChoice = document.getElementById('make-a-choice');
// initialize state
let wins = 0;
let loss = 0;
let draws = 0;
// set event listeners to update state and DOM
button.addEventListener('click', () => {
    const userChoice = document.querySelector('input[name="options"]:checked').value;
    const computerChoice = getRandomThrow();

    const checkWin = checkWinCondition(userChoice, computerChoice);

    if (checkWin === 'win') { 
        wins++;
        winSpan.textContent = wins;
        gameOutcome.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
    } if (checkWin === 'loss') {
        loss++;
        loseSpan.textContent = loss;
        gameOutcome.textContent = `You lost! ${computerChoice} beats ${userChoice}.`;
    } if (checkWin === 'draw') {
        draws++;
        drawSpan.textContent = draws;
        gameOutcome.textContent = `A tie! you both chose ${userChoice}.`;
    }
});

resetButton.addEventListener('click', () => {
    document.location.reload();

});