let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let roundCount = 0;

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

function setHumanChoice(input) {
    humanChoice = input;
}

const results = document.querySelector("#results");
const btnR = document.querySelector("#btnR");
const btnP = document.querySelector("#btnP");
const btnS = document.querySelector("#btnS");
const instruct = document.querySelector("#instruct");
const pChoice = document.querySelector("#pChoice");
const cChoice = document.querySelector("#cChoice");
const roundCt = document.querySelector("#roundCt");
const humScore = document.querySelector("#humScore");
const comScore = document.querySelector("#comScore");

btnR.addEventListener("click", () => {
    setHumanChoice("rock");
    playRound(humanChoice, getComputerChoice())
});

btnP.addEventListener("click", () => {
    setHumanChoice("paper");
    playRound(humanChoice, getComputerChoice())
})

btnS.addEventListener("click", () => {
    setHumanChoice("scissors");
    playRound(humanChoice, getComputerChoice())
})

function playRound(humanChoice, computerChoice) {
    instruct.style.color = "white";
    if (roundCount < 5) {
        switch(computerChoice){ 
            case "rock":
                if (humanChoice === "paper") {
                    humanScore++; 
                    instruct.textContent = "You won the round, choose again!";
                } else if (humanChoice === "scissors") {
                    computerScore++; 
                    instruct.textContent = "You lost the round, choose again"; 
                } else {
                    instruct.textContent = "You tied, choose again!";
                }
                break;
            case "paper":
                if (humanChoice === "rock") {
                    computerScore++; 
                    instruct.textContent = "You lost the round, choose again";
                } else if (humanChoice === "scissors") {
                    humanScore++; 
                    instruct.textContent = "You won the round, choose again!";
                } else {
                    instruct.textContent = "You tied, choose again!";
                }
                break;
            case "scissors":
                if (humanChoice === "paper") {
                    computerScore++; 
                    instruct.textContent = "You lost the round, choose again";
                } else if (humanChoice === "rock") {
                    humanScore++; 
                    instruct.textContent = "You won the round, choose again!";
                } else {
                    instruct.textContent = "You tied, choose again!";
                }
                break;    
        } 

        roundCount++;
        roundCt.textContent = "Round: " + roundCount;
        humScore.textContent = "Human: " + humanScore;
        comScore.textContent = "Computer: " + computerScore;
        pChoice.textContent = humanChoice;
        cChoice.textContent = computerChoice;
    }

    if (roundCount == 5) {
        if (humanScore > computerScore) {
            instruct.style.color = "rgb(0, 195, 255)"
            instruct.textContent = "You won the game! Select another to play again!"
        } else {
            instruct.style.color = "red";
            instruct.textContent = "You lost the game! Select another to play again!"
        }

        roundCount = 0;
        humanScore = 0;
        computerScore = 0;
    }
}


