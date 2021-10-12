// function called computerPlay that will randomly return: 'Rock', 'Paper', or 'Scissors'.

function computerPlay() {
    let options = ['rock', 'paper', 'scissors']; 
    let computerAnswer = options[Math.floor(Math.random()*options.length)];
    console.log(computerAnswer);
    return (computerAnswer);
 }

function playerPlay() {
   return (prompt('Input your selection: rock, paper, or scissors!').toLowerCase());
}
// want to run a check to confirm proper player input


play(playerPlay(), computerPlay());

// function that plays one round of rps. 
// function should take two parameters, playerSelection (case insensitive) and computer Selection
// then return a string that declares the winner of the round
function play(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
      alert('You\'ve chosen the same object. Try again!');
      play(playerPlay(), computerPlay());
  }
    else if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock')) {
       alert(`You lost! ${computerSelection} beats ${playerSelection}!`);
   }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock')) {
       alert(`You won! ${playerSelection} beats ${computerSelection}!`);
   }
    else {
       alert('I\'m broken, let\'s try again.');
       play(playerPlay(), computerPlay());
   }
}

//
// function called game. uses previous function, keeps score, reports winner at end