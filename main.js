// Task 1

// change these variables to test your code
let playerMove = "paper";
let computerMove = "scissors";

/*POSSIBLE COMBINATIONS:

PLAYER - COMPUTER - RESULT
rock - rock - DRAW
rock - scissors - PLAYER WINS
rock - paper - COMPUTER WINS
scissors - rock - COMPUTER WINS
scissors - scissors - DRAW
scissors - paper - PLAYER WINS
paper - rock - PLAYER WINS
paper - scissors - COMPUTER WINS
paper - paper - DRAW

*/

if ((playerMove === "rock" && computerMove === "rock") || (playerMove === "scissors" && computerMove === "scissors") || (playerMove === "paper" && computerMove === "paper")) {
    console.log("DRAW");
} else if ((playerMove === "rock" && computerMove === "scissors") || (playerMove === "scissors" && computerMove === "paper") || (playerMove === "paper" && computerMove === "rock")) {
    console.log("PLAYER WINS");
} else if ((playerMove === "rock" && computerMove === "paper") || (playerMove === "scissors" && computerMove === "rock") || (playerMove === "paper" && computerMove === "scissors")) {
    console.log("COMPUTER WINS");
}


// Task 2

function getWinner(playerMove, computerMove) {
    if ((playerMove === "rock" && computerMove === "rock") || (playerMove === "scissors" && computerMove === "scissors") || (playerMove === "paper" && computerMove === "paper")) {
        return 0;
    } else if ((playerMove === "rock" && computerMove === "scissors") || (playerMove === "scissors" && computerMove === "paper") || (playerMove === "paper" && computerMove === "rock")) {
        return 1;
    } else if ((playerMove === "rock" && computerMove === "paper") || (playerMove === "scissors" && computerMove === "rock") || (playerMove === "paper" && computerMove === "scissors")) {
        return -1;
    }
}

let result = getWinner("paper", "scissors");

console.log(result);


// Task 3

// playerMove = prompt("Name your move: rock, paper or scissors");

// result = getWinner(playerMove, "paper");

// alert(result);


// Task 4

function generateMove() {
    let intChoice = Math.floor(Math.random() * 3);
    if (intChoice === 0) {
      return computerMove = "rock";
    } else if (intChoice === 1) {
        return computerMove = "paper";
    } else if (intChoice === 2) {
        return computerMove = "scissors";
    }
}

// playerMove = prompt("Name your move: rock, paper or scissors");

// generateMove();

// result = getWinner(playerMove, computerMove);

// alert(result);


// Task 5

// while(true) {
//     playerMove = prompt("Name your move: rock, paper or scissors");
//     generateMove();
//     result = getWinner(playerMove, computerMove);
//     alert(result);
//     let playAgain = window.confirm("Play Again?");
//     if (playAgain !== true) {
//         break;
//     }
// }

// Task 6

let numberOfGames = 0;
let wins = 0;
let draws = 0;
let losses = 0;


// while(true) {
//     playerMove = prompt("Name your move: rock, paper or scissors");
//     generateMove();
//     result = getWinner(playerMove, computerMove);
//     alert(result);
//     numberOfGames++;
//     if (result === 0) {
//         draws++;
//     } else if (result === 1) {
//         wins++;
//     } else if (result === -1) {
//         losses++;
//     }
//     alert(`Games Played: ${numberOfGames}\nWins: ${wins}\nDraws: ${draws}\nLosses: ${losses}`);
//     let playAgain = window.confirm("Play Again?");
//     if (playAgain !== true) {
//         break;
//     }
// }

// Task 7

// let button = document.querySelectorAll("button");
// querySelectorAll wasn't working for me so had to come up with longer solution

let rockChoice = document.querySelector("#rock");
let paperChoice = document.querySelector("#paper");
let scissorsChoice = document.querySelector("#scissors");

let numberOfGamesSel = document.querySelector("#games-played");
let winsSel = document.querySelector("#wins");
let drawsSel = document.querySelector("#draws");
let lossesSel = document.querySelector("#losses");
let overlay = document.querySelector("#overlay");

let playAgainHeading = document.createElement("H2");
let yesButton = document.createElement("BUTTON");
let noButton = document.createElement("BUTTON");

function chooseRock() {
    playerMove = "rock"
}

function choosePaper() {
    playerMove = "paper"
}

function chooseScissors() {
    playerMove = "scissors"
}

function playAgainOverlay() {
    document.getElementById("#overlay").style.visibility = 'visible';
    playAgainHeading.innerHTML = "Play Again?";
    document.getElementById("#overlay").appendChild(playAgainHeading);
    yesButton.innerText = "Yes";
    document.getElementById("#overlay").appendChild(yesButton);
    noButton.innerText = "No";
    document.getElementById("#overlay").appendChild(noButton);
}

// Couldn't get the playAgainOverlay() function to work... error messages reference null values...

function playGame() {
    generateMove();
    result = getWinner(playerMove, computerMove);
    console.log(result);
    numberOfGames++;
    numberOfGamesSel.innerHTML = numberOfGames;
    if (result === 0) {
        draws++;
        drawsSel.innerHTML = draws
    } else if (result === 1) {
        wins++;
        winsSel.innerHTML = wins
    } else if (result === -1) {
        losses++;
        lossesSel.innerHTML = losses
    }
    playAgainOverlay();
    // console.log(`Games Played: ${numberOfGames}\nWins: ${wins}\nDraws: ${draws}\nLosses: ${losses}`);
    // let playAgain = window.confirm("Play Again?");
    // if (playAgain !== true) {
    //     break;
}

// button.addEventListener("click", playGame);


rockChoice.addEventListener("click", chooseRock);
rockChoice.addEventListener("click", playGame);
paperChoice.addEventListener("click", choosePaper);
paperChoice.addEventListener("click", playGame);
scissorsChoice.addEventListener("click", chooseScissors);
scissorsChoice.addEventListener("click", playGame);

// Task 8

let submitName = document.querySelector("#enter-name");
let nameEntered = document.querySelector("input");
let userName = document.createElement("H2");

function displayName () {
    userName.innerHTML = nameEntered.innerText;
    document.getElementById("#scores").appendChild(nameEntered);
}

submitName.addEventListener("click", displayName);