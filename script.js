const rock = document.querySelector('#rock');
rock.setAttribute('data-value', 'rock');
const paper = document.querySelector('#paper');
paper.setAttribute('data-value', 'paper');
const scissors = document.querySelector('#scissors');
scissors.setAttribute('data-value', 'scissors');
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
const gameOver = document.createElement('h1');
div.appendChild(gameOver);
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


function computerPlay() {
    let options = ['rock', 'paper', 'scissors']; 
    let computerAnswer = options[Math.floor(Math.random()*options.length)];
    console.log(computerAnswer);
    return (computerAnswer);
 }

function play (playerSelection, computerSelection) {
   if (playerSelection == computerSelection) {
      roundResult.textContent = "Result: Tie!";
 }
   else if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock')) {
      roundResult.textContent = "Result: You lost!";
      ++computerScore;
      p2.textContent = `Computer Score: ${computerScore}`;
  }
   else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock')) {
      roundResult.textContent = "Result: You won!";
      ++playerScore;
      p1.textContent = `Player Score: ${playerScore}`;
  }
   else {
      roundResult.textContent = "Result: something broke.";
  }
}
const end = 5;
function checkResult (pScore, cScore) {
   switch (end) {
      case pScore:
         gameOver.textContent = `Game over. Player wins!`;
         div.removeChild(roundResult);
         break;
      case cScore:
         gameOver.textContent = `Game over. Computer wins!`;
         div.removeChild(roundResult);
         break;
      default:
         console.log("didn't work");
   }
}

[rock, paper, scissors].forEach((rps) => {
   rps.addEventListener('click', (e) => {
     const playerPlay = e.target.id;
      console.log(playerPlay);
      play(playerPlay, computerPlay());
      checkResult(playerScore, computerScore);
      });
});