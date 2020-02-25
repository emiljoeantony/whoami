/*generating random integer*/
var generatedNumber = Math.floor(Math.random() * 30 + 1);

var numberOfTry = 5;

function displayInnerHtml(id, message) {
  document.getElementById(id).innerHTML = message;
}

function usersGuess() {
  // alert(generatedNumber);
  var inputGuess = document.getElementById('guessed-field').value;
  var userInput = parseInt(inputGuess);

  if (isNaN(userInput) || userInput < 1 || userInput > 30) {
    document.getElementById('guessed-field').value = '';
    displayInnerHtml('alert-text', 'Please enter a number between 1 & 30');
    return;
  }

  if (generatedNumber === userInput) {
    displayInnerHtml(
      'alert-text',
      'CONGRATS!! You guessed it right in try no' + ' ' + (6 - numberOfTry)
    );
    displayInnerHtml('chance-alert', 'Restart the game');

    document.getElementById('submit-guess').disabled = true;
  } else if (generatedNumber > userInput) {
    numberOfTry -= 1;
    if (numberOfTry === 0) {
      document.getElementById('submit-guess').disabled = true;
      displayInnerHtml(
        'alert-text',
        'GAME OVER!!!! The number is' +
          '  ' +
          generatedNumber +
          '. Restart the game.'
      );
      displayInnerHtml(
        'chance-alert',
        'You have' + ' ' + numberOfTry + ' ' + 'chances left'
      );

      return;
    }

    displayInnerHtml(
      'chance-alert',
      'You have' + ' ' + numberOfTry + ' ' + 'chances left'
    );
    displayInnerHtml(
      'alert-text',
      'UH OH!!! Enter a value higher than' + ' ' + userInput
    );

    document.getElementById('guessed-field').value = '';
  } else {
    numberOfTry -= 1;

    if (numberOfTry === 0) {
      displayInnerHtml(
        'alert-text',
        'GAME OVER!!!! The number is' +
          '  ' +
          generatedNumber +
          '. Restart the game.'
      );
      displayInnerHtml(
        'chance-alert',
        'You have' + ' ' + numberOfTry + ' ' + 'chances left'
      );

      return;
    }

    displayInnerHtml(
      'chance-alert',
      'You have' + ' ' + numberOfTry + ' ' + 'chances left'
    );
    displayInnerHtml(
      'alert-text',
      'UH OH!!! Enter a value lower than' + ' ' + userInput
    );

    document.getElementById('guessed-field').value = '';
  }
}

var guess = document.getElementById('submit-guess');
guess.addEventListener('click', usersGuess);

// Get the input field
var input = document.getElementById('guessed-field');
// Execute a function when the user releases a key on the keyboard
input.addEventListener('keyup', function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById('submit-guess').click();
  }
});

function newGame() {
  window.location.reload();
}
document.getElementById('new-game-button').addEventListener('click', newGame);
