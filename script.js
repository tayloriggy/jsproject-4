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

From index.html lines 10-12, (this.id) literally gets the id of clicked element

*/

const choices = ["Rock", "Paper", "Scissors"]; //creating an array of values to be selected from
let randomChoice = Math.floor(Math.random() * choices.length); //generating one of the array elements randomly when the webpage loads
console.log(choices[randomChoice]); //displaying the picked value by computer, the index is set to randomChoice variable that is randomly
// picking one of the index values within the array of choices

function playGame (choiceId) {

    document.getElementById(choiceId); //getting the id of clicked element
    console.log(choiceId); //displaying the id of the clicked element

    if (choiceId === choices[randomChoice]) //if user choice is same as computer choice
    {
        cleanUp("Tie!");
    }

   else if (choiceId === "Rock" && choices[randomChoice] === "Paper") {
        cleanUp("You lose. Paper covers rock.");
    }

    else if (choiceId === "Rock" && choices[randomChoice] === "Scissors") {
        cleanUp("You win! Rock smashes scissors.");
    }

    else if (choiceId === "Paper" && choices[randomChoice] === "Rock") {
        cleanUp("You win! Paper covers rock.");
    }

    else if (choiceId === "Paper" && choices[randomChoice] === "Scissors") {
        cleanUp("You lose! Scissors cuts paper.");
    }

    else if (choiceId === "Scissors" && choices[randomChoice] === "Rock") {
        cleanUp("You lose! Rock smashes scissors.");
    }

    else if (choiceId === "Scissors" && choices[randomChoice] === "Paper") {
        cleanUp("You win! Scissors cuts paper.");
    }
}

function resetGame () {
    randomChoice = Math.floor(Math.random() * choices.length); //computer picks between rock, paper, or scissors randomly again
    console.log(choices[randomChoice]); //displays random pick again
}

function cleanUp (alertText) {
    alert(alertText);
    resetGame();
    alert("The game has been reset");
}