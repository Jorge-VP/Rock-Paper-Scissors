// DOM
const $container = document.querySelector("#container");
const $rock = document.querySelector("#rock");
const $paper = document.querySelector("#paper");
const $scissors = document.querySelector("#scissors");
const $outcomeDiv = document.querySelector(".outcome");

// getComputerChoice

const getComputerChoice = function () {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*options.length)];      
}
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

const playRound = function (humanChoice, computerChoice) {
    //humanChoice = getHumanChoice();
    //computerChoice = getComputerChoice();
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            const $p = document.createElement("p");
            $p.innerText = "This round was tied.";
            $outcomeDiv.appendChild($p);
        }
        else if (computerChoice === "paper") {
            computerScore += 1;
            const $p = document.createElement("p");
            $p.innerText = "You loss! paper beats rock.";
            $outcomeDiv.appendChild($p);
        }
        else {
            humanScore += 1;
            const $p = document.createElement("p");
            $p.innerText = "You win! rock beats scissors.";
            $outcomeDiv.appendChild($p);
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore += 1;
            const $p = document.createElement("p");
            $p.innerText = "You win! paper beats rock.";
            $outcomeDiv.appendChild($p);
        }   
        else if (computerChoice === "paper") {
            const $p = document.createElement("p");
            $p.innerText = "This roun was tied.";
            $outcomeDiv.appendChild($p);
        }
        else {
            computerScore += 1;
            const $p = document.createElement("p");
            $p.innerText = "You loss! scissors beats paper.";
            $outcomeDiv.appendChild($p);
        }    
    }
    else {
        if (computerChoice === "rock") {
            computerScore += 1;
            const $p = document.createElement("p");
            $p.innerText = "You loss! rock beats scissors.";
            $outcomeDiv.appendChild($p);
        }
        else if (computerChoice === "paper") {
            humanScore += 1;
            const $p = document.createElement("p");
            $p.innerText = "You win! scissors beats paper.";
            $outcomeDiv.appendChild($p);
        }
        else {
            const $p = document.createElement("p");
            $p.innerText = "This round was tied."
            $outcomeDiv.appendChild($p);
        }
    }
}

// check Winner
const checkWinner = function(humanScore, computerScore) {
    if(humanScore === 5) {
        $rock.style.display = "none";
        $paper.style.display = "none";
        $scissors.style.display = "none";
        const $resultDiv = document.createElement("div");
        const $h2 = document.createElement("h2");
        const $playAgain = document.createElement("button");
        $playAgain.innerText = "Play Again";
        $h2.innerText = `You won! ${humanScore} to ${computerScore}. Great Job.`;
        $resultDiv.appendChild($h2);
        document.body.appendChild($resultDiv);
        document.body.appendChild($playAgain);
        $playAgain.addEventListener("click", () => location.reload());
    }
    if (computerScore === 5 ) {
        $rock.style.display = "none";
        $paper.style.display = "none";
        $scissors.style.display = "none";
        const $resultDiv = document.createElement("div");
        const $h2 = document.createElement("h2");
        const $playAgain = document.createElement("button");
        $playAgain.innerText = "Play Again";
        $h2.innerText = `You lost! ${humanScore} to ${computerScore}. Good luck next time.`;
        $resultDiv.appendChild($h2); 
        document.body.appendChild($resultDiv);
        document.body.appendChild($playAgain);
        $playAgain.addEventListener("click", () => location.reload());
    }
}
//console.log(playRound());

//playGame
/*
const playGame = function () {
    for (let i = 1; i <= 5; i++){
        let game = playRound();
        console.log(`Round: ${i} ${game}`);        
        console.log("You win: ", humanScore);
        console.log("You loss: ", computerScore);
        //console.log("Tied: ", 5-(humanScore+computerScore));
    }
    if (humanScore === computerScore) {
        console.log("TIED!");            
    }
    else if (humanScore > computerScore){
        console.log("YOU WIN!");
    }
    else {
        console.log("YOU LOSS!");
    }

}
playGame();
*/
// Events
$rock.addEventListener("click", () => {
    compSelection = getComputerChoice();
    humanSelection = "rock";
    playRound(humanSelection, compSelection);
    checkWinner(humanScore, computerScore);
});
$paper.addEventListener("click", () => {
    compSelection = getComputerChoice();
    humanSelection = "paper";
    playRound(humanSelection, compSelection);
    checkWinner(humanScore, computerScore);
});
$scissors.addEventListener("click", () => {
    compSelection = getComputerChoice();
    humanSelection = "scissros";
    playRound(humanSelection, compSelection);
    checkWinner(humanScore, computerScore);
})


