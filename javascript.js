let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const seed = Math.random();
    if (seed >= 0.66) {
        return "rock";
    } else if (seed >= 0.33) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() { 
    const choice = String(prompt("Choose rock, paper, or scissors"));    
    return choice;
}

/*
    9 RPS cominations:
    3 Equal
    2 P > R, R < P
    2 R > S, S < R
    2 S > P, P < S

*/


function playGame() {
    let humanSelection;
    let computerSelection;

    function playRound(humanChoice, computerChoice) {
    switch(computerChoice){
        case "rock":
            if (humanChoice === "paper") humanScore++;
            if (humanChoice === "scissors") computerScore++;
            break;
        case "paper":
            if (humanChoice === "rock") computerScore++;
            if (humanChoice === "scissors") humanScore++;
            break;
        case "scissors":
            if (humanChoice === "paper") computerScore++;
            if (humanChoice === "rock") humanScore++;
            break;    
    }    
    }

    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        console.log("Human chose: " + humanSelection + ", computer chose: " + computerSelection);
        console.log("Human: " + humanScore + " Computer: " + computerScore);
    }

}

playGame();