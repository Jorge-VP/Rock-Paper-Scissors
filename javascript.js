// getComputerChoice

const getComputerChoice = function () {
    randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {
        return "rock";
    }
    else if (randomNumber === 1) {
        return "paper";
    }
    else{
        return "scissors"
    }    
}
//console.log("COMPUTER:", getComputerChoice());

//getHumanChoice

const getHumanChoice = function () {
    humanOption = prompt('Write your choice: "rock", "paper" or "scissors": ');
    humanOption = humanOption.toLowerCase();
    let condition = true;
    while (condition) {
        if (humanOption === "rock") {
            condition = false;
        }
        else if (humanOption === "paper") {
            condition = false;
        }
        else if (humanOption === "scissors") {
            condition = false;
        }
        else {
            humanOption = prompt('Invalid choice. Write your choice: "rock", "paper" or "scissors": ').toLowerCase();
        }        
    }
    return humanOption;
}

//console.log("PLAYER:", getHumanChoice());

// Players score variables
let humanScore = 0;
let computerScore = 0;

// playRound

const playRound = function () {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            return "This round was tied.";
        }
        else if (computerChoice === "paper") {
            computerScore += 1;
            return "You loss! paper beats rock.";
        }
        else {
            humanScore += 1;
            return "You win! rock beats scissors.";
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore += 1;
            return "You win! paper beats rock.";
        }   
        else if (computerChoice === "paper") {
            return "This roun was tied.";
        }
        else {
            computerScore += 1;
            return "You loss! scissors beats paper.";
        }    
    }
    else {
        if (computerChoice === "rock") {
            computerScore += 1;
            return "You loss! rock beats scissors.";
        }
        else if (computerChoice === "paper") {
            humanScore += 1;
            return "You win! scissors beats paper.";
        }
        else {
            return "This round was tied."
        }
    }
}
//console.log(playRound());

//playGame

const playGame = function () {
    for (let i = 1; i <= 5; i++){
        let game = playRound();
        console.log("Round: ", i, game);
    }
    console.log("You win: ", humanScore);
    console.log("You loss: ", computerScore);
    console.log("Tied: ", 5-(humanScore+computerScore));
}
playGame();



