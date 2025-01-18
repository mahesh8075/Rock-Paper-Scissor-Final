const choices = ["rock", "paper", "scissors"];
const PlayerDisplay = document.getElementById("PlayerDisplay");
const ComputerDisplay = document.getElementById("ComputerDisplay");
const roundDisplay=document.getElementById("rounds");
const ResultDisplay = document.getElementById("ResultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const gameStatusDisplay = document.getElementById("gameStatusDisplay"); // Add a new display element
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

function playGame(playerChoice) {
    if (roundsPlayed >= maxRounds) {
        gameStatusDisplay.textContent = "Game Over! Refresh to play again.";
        return;
    }
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                roundsPlayed++;
                roundDisplay.textContent=roundsPlayed;
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                roundsPlayed++;
                roundDisplay.textContent=roundsPlayed;
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                roundsPlayed++;
                roundDisplay.textContent=roundsPlayed;
                break;
        }
    }
    PlayerDisplay.textContent = `PLAYER: ${playerChoice}`;
    ComputerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    ResultDisplay.textContent = result;

    ResultDisplay.classList.remove("greenText", "redText");

    switch (result) {
        case "YOU WIN!":
            ResultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            ResultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
    
   
    if (roundsPlayed === maxRounds) {
        if (playerScore > computerScore) {
            gameStatusDisplay.textContent = "Game Over: You are the overall winner!";
        } else if (playerScore < computerScore) {
            gameStatusDisplay.textContent = "Game Over: Computer wins the game!";
        } else {
            gameStatusDisplay.textContent = "Game Over: It's a draw!";
        }
    }
}
