import {getRandomThrow, checkForWin} from './helper-functions.js';
// import functions and grab DOM elements
const button = document.getElementById('shoot-button');
const winSpan = document.getElementById('win-span');
const loseSpan = document.getElementById('lose-span');
const drawSpan = document.getElementById('draw-span'); 
// initialize state
let wins = 0;
let loses = 0;
let draws = 0;
// set event listeners to update state and DOM
button.addEventListener('click', () => {
   const userChoice = document.querySelector('input[name="options"]:checked');
   console.log(userChoice, getRandomThrow());
});