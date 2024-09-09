// getComputerChoice

function getComputerChoice() {
    let option = Math.floor(Math.random() * 3);
    if (option === 0) {
        computerSelection = "Rock";
    }
    else if (option === 1) {
        computerSelection = "Paper";
    }
    else {
        computerSelection = "Scissors";
    } 
    return computerSelection; 
}

// getHumanChoice

function getHumanChoice() {
    let option = prompt ("Type R (Rock), P (Paper) or S (Scissors): ");
    condition = true;
    while (condition === true) {
        if (option.toUpperCase() === "R") {
            humanSelection = "Rock";
            condition = false;
        }
        else if (option.toUpperCase() === "P") {
            humanSelection = "Paper";
            condition = false;
        }
        else if (option.toUpperCase() === "S") {
            humanSelection = "Scissors";
            condition = false;
        }
        else option = prompt ("Selection is not valid. Type R (Rock), P (Paper) or S (Scissors): ");
    }
    return humanSelection;
}

// players score variables
let humanScore = 0;
let computerScore = 0;

//humanSelection = getHumanChoice();
//computerSelection = getComputerChoice();
// playRound
function playRound(humanSelection, computerSelection) {
    if (humanSelection === "Rock") {
        if (computerSelection === "Rock") {
            result = "This round was tied";
        }
        else if (computerSelection === "Paper") {
            result = "You lose! Paper beats Rock";
            computerScore += 1;
        }
        else {
            result = "You win! Rock beats Scissors";
            humanScore += 1;
        }
    }
    else if (humanSelection === "Paper") {
        if (computerSelection === "Rock") {
            result = "You win! Paper beats Rock";
            humanScore += 1;
        }
        else if (computerSelection === "Paper") {
            result = "This round was tied"
        }
        else {
            result = "You lose! Scissors beats Paper";
            computerScore += 1;
        }
    }   
    else {
        if (computerSelection === "Rock") {
            result = "You lose! Rock beats Scissors";
            humanScore += 1;
        }
        else if (computerSelection === "Paper") {
            result = "You win! Scissor beats Paper";
            computerScore += 1;  
        }
        else {
            result = "This round was tied"
        }
    }
    return result; 
}
// console.log ("You", humanSelection);
// console.log ("Computer", computerSelection)
// console.log (playRound(humanSelection, computerSelection));
// console.log(humanScore);
// console.log(computerScore);
// plaGame
function playGame() {
  for (let i = 0; i < 5; i++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    game = playRound(humanSelection, computerSelection);
    console.log("Game", i+1, "Your selection was", humanSelection, "your opponent's selection was", computerSelection);    
    console.log(game);    
  }  
}
playGame();
console.log("Won", humanScore, "Lost", computerScore,"Tie", 5-(humanScore+computerScore));

