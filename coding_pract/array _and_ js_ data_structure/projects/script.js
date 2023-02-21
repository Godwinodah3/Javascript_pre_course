'use strict'
//funnction that return random number if one , fllor.number retun integers whilr math.random return 0 - 1
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);

    if (num === 0) {
        return ("ROCK");
    }

    else if (num === 1) {
        return ("PAPER");
    } else {
        return ("SCISSORS");
    }
}
//getComputerChoice();

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "Ties no body wins";
    }

    else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'PAPER') {

        return 'you loss paper beats rock';
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'SCISSORS') {

        return 'you win Rock beats scissors';
    }



    else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'PAPER') {
        return 'you lose! sicssors beat paper';
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'ROCK') {
        return 'you win! rock  beats scissors';
    }


    else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'SCISSORS') {
        return 'you lose! sicssors beat paper';
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'ROCK') {
        return 'you win! paper  beats rock';
    }


    else {
        return ('invalid input');
        //return null
    }



}
/*

const playerSelection = "ock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
//getComputerChoice();
*/

function game() {
    let playerSelection, computerSelection, result;
    let playerWins = 0;
    let computerWins = 0;
    const selection = ['ROCK', 'PAPER', 'SC0ISSORS'];

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt();
        computerSelection = getComputerChoice();

        //confirm user input 
        while (!(selection.includes(playerSelection.toUpperCase()))) {
            playerSelection = prompt();
        }
    }
}