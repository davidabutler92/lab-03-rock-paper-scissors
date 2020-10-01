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
    console.log(rockPaperScisssors);
    return rockPaperScisssors;
}


export function checkForWin(player, computer) {
    if (player === computer) {
        draw++;
    } 
}

//win cases 
//