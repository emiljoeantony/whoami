//to check total number of attempts
var numberOfTry = 4;
var generatedNumber = 0;

// generating random integer
function generateNumber() {
  return Math.floor(Math.random() * 45 + 1); 
}
window.onload = function() {
  generatedNumber = generateNumber();
  document.getElementById('guessed-field').focus();
};
/**
 * function to display message using id
 * @param {element id} id
 * @param {message to display} message
 */
function displayInnerHtml(id, message) {
  document.getElementById(id).innerHTML = message;
}


function clearValue(){
  document.getElementById('guessed-field').value = '';
  document.getElementById('guessed-field').focus();
}
function textBlink(){
  document.getElementById('popup-text').className = 'blink';
}


/**
 * function to check the user guess and the generated values are the same
 */
function usersGuess() {
  // to get the value entered by the user
  var inputGuess = document.getElementById('guessed-field').value;
  // to parse the user input
  var userInput = parseInt(inputGuess);
  
  
  // to check if the user input is an integer which is a value above 1 and below 45
  if (isNaN(userInput) || userInput < 1 || userInput > 45) {
    clearValue();
    
    // to display a text alert if the conditions are not met
    textBlink();
    displayInnerHtml('alert-text', 'Please enter a number between 1 & 45');
    return;
  }


  // to check if the user input is equal to the generated number
  if (generatedNumber === userInput) {
    // message display as animation
    textBlink();
    document.getElementById('background').style.background = "url('../mind-game/images/youwon.png')";
    document.getElementById('end-game').click();
    displayInnerHtml(
      'popup-text',
      'CONGRATS!! You guessed it right in try no' + ' ' + (5 - numberOfTry)
    ); 
    
   
  }



  // to check if the user input is lesser than the generated number
  else if (generatedNumber > userInput) {
    numberOfTry -= 1;
    // to check if the number of guesses is equal to zero
    if (numberOfTry === 0) {
      // message display as animation
      textBlink();
      
      
      document.getElementById('end-game').click();
      displayInnerHtml(
        'popup-text',
        'The number was' +
          '  ' +
          generatedNumber +
          '.'
      );
     
      
      return;
    }
     // to display the number of chances left
    displayInnerHtml(
      'chance-alert',
      'You have' + ' ' + numberOfTry + ' ' + 'chances left'
    );
    displayInnerHtml(
      'alert-text',
      'UH OH!!! Enter a value higher than' + ' ' + userInput
    );
    // to return the textinput value to emptyfield
    clearValue();
    
  } else {
    numberOfTry -= 1;
    if (numberOfTry === 0) {
      textBlink();
      displayInnerHtml(
        'alert-text',
        'The number was' +
          '  ' +
          generatedNumber +
          '.'
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
    // to return the textinput value to emptyfield
    clearValue();
    
  }
}
// to execute the function once the guess button is pressed
var guess = document.getElementById('submit-guess');
guess.addEventListener('click', usersGuess);

// Get the input field
var keyinput = document.getElementById('guessed-field');
// Execute a function when the user releases a key on the keyboard
keyinput.addEventListener('keyup', function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById('submit-guess').click();
  } else if (event.keyCode > 58 && event.keyCode < 95) {
    event.preventDefault();
  }
});
// to start a new game
function newGame() {
  var oldLocation = location.href;
  var newLocation = oldLocation.split("#")[0];
  console.log(newLocation);
  location.replace(newLocation);
  console.log(location);
}
document.getElementById('new-game-button').addEventListener('click', newGame);
