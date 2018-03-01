/*eslint-env browser*/
var userChoice = window.prompt("Do you choose rock, paper or scissors?");
if (!userChoice) {
    window.document.write("Dont be a coward and play");
} else {
    window.document.write(userChoice);
}
var computerChoice = Math.random();
if (computerChoice < 0.40) {
    computerChoice = "rock";
} else if (computerChoice < 0.70) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
window.document.write(computerChoice);
var compare = function (choice1, choice2) {
    "use strict";
    if (choice1 === choice2) {
        return "Its a tie";
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return " You Win";
        } else {
            return " You Loose Try Again";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return " You Win";
        } else {
            return " You lose! Try again.";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return " You Loose Try Again";
        } else {
            return " You Win";
        }
    }
};
var results = compare(userChoice, computerChoice);
window.document.write("<br><hr>" + " User Choice: " + userChoice + " Computer Choice: " + computerChoice + " " + results);