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
2. Define an array that holds string values of "Rock", "Paper", "Scissors" and store it in a variable.
3. Initiate an onclick event handler so that each time a button is clicked, a JS function is ran.
4. Define a function called Function playGame ()
5. Lable the 3 buttons Rock, Paper, Scissors
6. Each time a button is clicked by the user, display the winner (user or computer)
7. After each display, reset the game.
8. Use if else conditions.

*/

const choices = ["Rock", "Paper", "Scissors"]; //creating an array of values to be selected from
let randomChoice = Math.floor(Math.random() * choices.length); //generating one of the array elements randomly when the webpage loads
console.log(choices[randomChoice]); //displaying the picked value by computer, the index is set to randomChoice variable that is randomly
// picking one of the index values within the array of choices

function playGame (choiceId) {

    document.getElementById(choiceId); //getting the id of clicked element
    console.log(choiceId); //displaying the id of the clicked element

    if (choiceId === "Rock" && choices[randomChoice] === "Rock") {
        alert ("Tie!");
        resetGame();
        alert ("The game has been reset.");
    }

    else if (choiceId === "Paper" && choices[randomChoice] === "Paper") {
        alert ("Tie!");
        resetGame();
        alert ("The game has been reset.");
    }

    else if (choiceId === "Scissors" && choices[randomChoice] === "Scissors") {
        alert ("Tie!");
        resetGame();
        alert ("The game has been reset.");
    }

   else if (choiceId === "Rock" && choices[randomChoice] === "Paper") {
        alert ("You lose. Paper covers rock.");
        resetGame();
        alert ("The game has been reset.");
    }

    else if (choiceId === "Rock" && choices[randomChoice] === "Scissors") {
        alert ("You win! Rock smashes scissors.");
        resetGame();
        alert ("The game has been reset.");
    }

    else if (choiceId === "Paper" && choices[randomChoice] === "Rock") {
        alert ("You win! Paper covers rock.");
        resetGame();
        alert ("The game has been reset.");
    }

    else if (choiceId === "Paper" && choices[randomChoice] === "Scissors") {
        alert ("You lose! Scissors cuts paper.");
        resetGame();
        alert ("The game has been reset.");
    }

    else if (choiceId === "Scissors" && choices[randomChoice] === "Rock") {
        alert ("You lose! Rock smashes scissors.");
        resetGame();
        alert ("The game has been reset.");
    }

    else if (choiceId === "Scissors" && choices[randomChoice] === "Paper") {
        alert ("You win! Scissors cuts paper.");
        resetGame();
        alert ("The game has been reset.");
    }
}

function resetGame () {
    randomChoice = Math.floor(Math.random() * choices.length); //computer picks between rock, paper, or scissors randomly again
    console.log(choices[randomChoice]); //displays random pick again
}