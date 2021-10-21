/*
Project 4: Build a rock, paper, scissors game.

Requirements:
-Create a Github repository for this project. 
-The user plays against the computer, so give them three buttons (rock, paper, scissors) to click
-Every time the user plays/clicks a button, display the winner
-A user can play as many times as they want 

Steps:
1. Define a variable that will select randomly from one of three string values (rock, paper, and scissors). This will occur as soon
as the webpage loads.
2. Define three variables named: Rock, Paper, Scissors
3. Initiate an onclick event handler so that each time a button is clicked, a JS function is ran.
4. Define a function called Function playGame ()
5. Lable the 3 buttons Rock, Paper, Scissors
6. Each time a button is clicked by the user, display the winner (user or computer)
7. After each display, reset the game.
8. Use if else conditions.

*/

const choices = ["Rock", "Paper", "Scissors"]; //creating an array of values to be selected from
const randomChoice = Math.floor(Math.random() * choices.length); //generating one of the array elements randomly when the webpage loads
console.log(randomChoice, choices[randomChoice]); 

function playGame () {

    let userChoice = document.getElementById("this.id");
    userChoice = parseInt(document.getElementById("this.id")); //converting userChoice to a number so it has same type as randomChoice

    if (userChoice === randomChoice) {
        alert (`You selected ${userChoice} and the computer selected ${randomChoice}. It is a tie!`);
        resetGame();
        alert ("The game has been reset.");
    }

    else if (userChoice === "Rock" && randomChoice === "Paper") {
        alert (`You lose! ${userChoice} gets covered up by ${randomChoice}`);
        resetGame();
        alert ("The game has been reset.");
    }

    else if (userChoice === "Rock" && randomChoice === "Scissors") {
        alert (`You win! ${userChoice} smashes ${randomChoice}`);
        resetGame();
        alert ("The game has been reset.");
    }

    else if (userChoice === "Paper" && randomChoice === "Rock") {
        alert (`You win! ${userChoice} covers up ${randomChoice}`);
        resetGame();
        alert ("The game has been reset.");
    }

    else if (userChoice === "Paper" && randomChoice === "Scissors") {
        alert (`You lose! ${userChoice} gets cut by ${randomChoice}`);
        resetGame();
        alert ("The game has been reset.");
    }

    else if (userChoice === "Scissors" && randomChoice === "Rock") {
        alert (`You lose! ${userChoice} gets smashed by ${randomChoice}`);
        resetGame();
        alert ("The game has been reset.");
    }

    else if (userChoice === "Scissors" && randomChoice === "Paper") {
        alert (`You win! ${userChoice} cuts ${randomChoice}`);
        resetGame();
        alert ("The game has been reset.");
    }
}

function resetGame () {
    randomChoice = Math.floor(Math.random() * choices.length);
    userChoice = document.getElementById("button").value;
}