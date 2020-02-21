/*generating random integer*/
var generatedNumber = Math.floor(Math.random() * 20 + 1);

console.log(generatedNumber);

var numberOfTry = 1;



function usersGuess() {
  if (numberOfTry > 5) {
    alert('GAME OVER YOU HAVE USED UP YOUR 5 GUESSES PRESS F5 TO RESTART THE GAME');
    return;
  }
  // alert(generatedNumber);
  var inputGuess = document.getElementById('guessed-field').value;
  var userInput = parseInt(inputGuess);

  if (generatedNumber === userInput) {
    alert('CONGRATS!! YOU GUESSED IT RIGHT IN TRY NO' + ' ' + numberOfTry);
  } else if (generatedNumber > userInput) {
    console.log(numberOfTry);
    numberOfTry += 1;
    alert('UH OH!!! YOU GUESSED TOO LOW');
    document.getElementById('guessed-field').value ="";
  } else {
    numberOfTry += 1;
    console.log(numberOfTry);
    alert('UH OH!!! YOU GUESSED TOO HIGH');
    document.getElementById('guessed-field').value = "";
  }
}

var guess = document.getElementById('submit-guess');
guess.addEventListener('click', usersGuess);
