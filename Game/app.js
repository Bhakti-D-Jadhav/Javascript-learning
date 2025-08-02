let computerGuess = Math.floor(Math.random() * 100 + 1);
correctNum = computerGuess;
let attempt = 0;
let userNum = 0;

while (userNum != computerGuess) {
    let userNum = prompt("Enter any number between 1 to 100: ");
    attempt++;

    if (userNum > 100 || userNum < 0) {
        console.log("Incorrect input");
    }
    else if (userNum > computerGuess) {
        console.log("Too High");
    }
    else if (userNum < computerGuess) {
        console.log("To Low");
    }
    else if (isNaN(userNum)){
        console.log("Invalid Input");
    
    }
    else {
        console.log("correct Guess. congratulations!!!")
        console.log(`You have guessed correct in ${attempt} attempts.`);
        break;
    }

}