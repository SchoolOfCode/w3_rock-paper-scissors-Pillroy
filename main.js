// change these variables to test your code
let playerMove = "rock";
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

