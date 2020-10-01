import {getRandomThrow, checkWinCondition} from './helper-functions.js';
// import functions and grab DOM elements
const button = document.getElementById('shoot-button');
const winSpan = document.getElementById('win-span');
const loseSpan = document.getElementById('lose-span');
const drawSpan = document.getElementById('draw-span'); 
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
    } if (checkWin === 'loss') {
        loss++;
        loseSpan.textContent = loss;
    } if (checkWin === 'draw') {
        draws++;
        drawSpan.textContent = draws;
    }
});
