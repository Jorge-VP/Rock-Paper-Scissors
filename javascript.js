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
console.log(getComputerChoice());

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
console.log(getHumanChoice());
