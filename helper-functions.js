export function getRandomThrow() {
    const randomValue = Math.ceil(Math.random() * 3);
    let rockPaperScisssors;
    if (randomValue === 1) {
        rockPaperScisssors = 'rock';
    } if (randomValue === 2) {
        rockPaperScisssors = 'paper';
    } if (randomValue === 3) {
        rockPaperScisssors = 'scissors';
    }
    return rockPaperScisssors;
}

export function checkWinCondition(player, computer) {
    if (player === computer) {
        return 'draw';
    } if (player === 'rock' && computer === 'scissors') {
        return 'win';
    } if (player === 'rock' && computer === 'paper') {
        return 'loss';
    } if (player === 'paper' && computer === 'rock') {    
        return 'win';
    } if (player === 'paper' && computer === 'scissors') {
        return 'loss';
    } if (player === 'scissor' && computer === 'paper') {
        return 'win';
    } if (player === 'scissors' && computer === 'rock'){
        return 'loss';
    }
}