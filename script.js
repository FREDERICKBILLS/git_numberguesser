let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//step 3  This function generates a random number for the target number
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}


//step 4 This function compares the distance from the target number with the human guess and the computer guess
/*const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess);
  const computerDifference = Math.abs(targetGuess - computerGuess);
  return humanDifference <= computerDifference;
}*/

//step 5 This funciton updates the score based on the winner of the round.
const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

//step 6 This function updates the round number the game is currently on
const advanceRound = () => {
  currentRoundNumber++;
}

// step 8 This function takes in two numbers and return the distance.
const getAbsoluteDistance = (numberA, numberB) => {
  let numberC = numberA - numberB;
  if (numberC < 0) {
    return numberC *= -1;
  } else {
    return numberC;
  }
};
// This function compares the distance from the target number with the human guess and the computer guess
const compareGuesses = (humanGuess, computerGuess, targetGuess) =>  {
    if (humanGuess < 0 || humanGuess > 9) {
      window.alert('Your number is out of range.  Please select a number between 0 and 9');
    }
    return getAbsoluteDistance(humanGuess, targetGuess) <= getAbsoluteDistance(computerGuess, targetGuess) ? true : false ;
};
