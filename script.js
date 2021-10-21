const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let computerScore = 0;
let playerScore = 0;

rock.style.backgroundColor = 'granite';
paper.style.backgroundColor = 'white';
scissors.style.backgroundColor = 'orange';
[rock, paper, scissors].forEach((rps) => {
rps.style.padding = "15px";
rps.style.fontWeight = "650";
rps.style.margin = "30px";
rps.style.border = "2px solid black";
rps.style.borderRadius = "5px";
});
const container = document.querySelector("#container");
const div = document.createElement("div");
const para = document.createElement("p");
para.textContent = "Prepare for conflict - click on your weapon of choice."
container.appendChild(div);
div.appendChild(para);
const roundResult = document.createElement('h4');
div.appendChild(roundResult);
const div2 = document.createElement("div");
const h3 = document.createElement('h3');
h3.textContent = "SCOREBOARD";
const p1 = document.createElement('p');
const p2 = document.createElement('p');
p1.textContent = `Player Score: ${playerScore}`;
p2.textContent = `Computer Score: ${computerScore}`;
div2.appendChild(h3);
div2.appendChild(p1);
div2.appendChild(p2);
container.appendChild(div2);


// function called computerPlay that will randomly return: 'Rock', 'Paper', or 'Scissors'.
function computerPlay() {
    let options = ['rock', 'paper', 'scissors']; 
    let computerAnswer = options[Math.floor(Math.random()*options.length)];
    console.log(computerAnswer);
    return (computerAnswer);
 }
 const playerPlay = 
rock.addEventListener("click", e => {
   playerPlay = "rock";
});
paper.addEventListener("click", e => {
   playerPlay = "paper";
});
scissors.addEventListener("click", e => {
   playerPlay = "scissors";
});

function play (playerSelection, computerSelection) {
   if (playerSelection == computerSelection) {
      roundResult.textContent = "Result: Tie!";
 }
   else if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock')) {
      roundResult.textContent = "Result: You lost!";
      ++computerScore;
  }
   else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock')) {
      roundResult.textContent = "Result: You won!";
      ++playerScore;
  }
   else {
      roundResult.textContent = "Result: something broke.";
  }
}

let game = function () {
   for (let i = 0; (playerScore <= 5 && computerScore <= 5); i++) {
play(playerPlay, computerPlay());
   };
}

// game();
if (computerScore > playerScore) {
   x = "Computer";
} 
else if (computerScore < playerScore) {
   x = "Player";
}
else {
   alert(`The scoreboard is broken.`)
}
let winner = x;
roundResult.cssText = "`Game over. ${winner} wins!`";