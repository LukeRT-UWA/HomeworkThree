//Character sets

var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbersvar = '0123456789';
var symbol = '!@#$%^&*=-_';
var pass;

// Points to generate password button on page
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password1;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Set length and toggle character types (user input)
function generatePassword() {

  var passLength = window.prompt('How many characters long will your password be?');

  if (!passLength) {
		return;
	}

  if(isNaN(passLength)) {
    window.alert('You can only input numbers.')
    return;
  }
  if (passLength < 8) {
		window.alert('You must create a password that is at least 8 characters long.');
		return;
	}
    isLower = window.confirm('Do you want to use lower case characters in your password?');
  
    isUpper = window.confirm('Do you want to use upper case characters in your password?');
  
    isNumber = window.confirm('Do you want to use numbers in your password?')
  
    isSymbol = window.confirm('Do you want to use symbols in your password?');
  
  if (!isLower && !isUpper && !isNumber && !isSymbol) {
     window.alert('You must select at least one character type for your password.')
    return;
   }
  console.log(passLength, isLower, isUpper, isNumber, isSymbol);

//--------------------- 1

  if (isLower && isUpper && isNumber && isSymbol) {
    userChoices = lower.concat(upper, numbersvar, symbol);
    console.log(userChoices);
 
  }

  if (isLower && isUpper && isNumber && !isSymbol) {
    userChoices = lower.concat(upper, numbersvar);
    console.log(userChoices);
 
  }

  if (isLower && isUpper && !isNumber && !isSymbol) {
    userChoices = lower.concat(upper);
    console.log(userChoices);
 
  }

  if (isLower && !isUpper && !isNumber && !isSymbol) {
    userChoices = lower;
    console.log(userChoices);
 
  }

  //--------------------- 2

  if (isUpper && isLower && isNumber && isSymbol) {
    userChoices = upper.concat(lower, numbersvar, symbol);
    console.log(userChoices);
 
  }

  if (isUpper && isLower && isNumber && !isSymbol) {
    userChoices = upper.concat(lower, numbersvar);
    console.log(userChoices);
 
  }

  if (isUpper && isLower && !isNumber && !isSymbol) {
    userChoices = upper.concat(lower);
    console.log(userChoices);
 
  }

  if (isUpper && !isLower && !isNumber && !isSymbol) {
    userChoices = upper;
    console.log(userChoices);
 
  }


  //--------------------- 3

  if (isLower && isUpper && isNumber && isSymbol) {
    userChoices = lower.concat(upper, numbersvar, symbol);
    console.log(userChoices);
 
  }

  if (isLower && isUpper && isNumber && !isSymbol) {
    userChoices = lower.concat(upper, numbersvar);
    console.log(userChoices);
 
  }

  if (isLower && isUpper && !isNumber && !isSymbol) {
    userChoices = lower.concat(upper);
    console.log(userChoices);
 
  }

  if (isLower && !isUpper && !isNumber && !isSymbol) {
    userChoices = lower;
    console.log(userChoices);
 
  }

  //--------------------- 4

  if (isLower && isUpper && isNumber && isSymbol) {
    userChoices = lower.concat(upper, numbersvar, symbol);
    console.log(userChoices);
 
  }

  if (isLower && isUpper && isNumber && !isSymbol) {
    userChoices = lower.concat(upper, numbersvar);
    console.log(userChoices);
 
  }

  if (isLower && isUpper && !isNumber && !isSymbol) {
    userChoices = lower.concat(upper);
    console.log(userChoices);
 
  }

  if (isLower && !isUpper && !isNumber && !isSymbol) {
    userChoices = lower;
    console.log(userChoices);
 
  }

  // ---------
  var passwordBlank =[];

  for (var i = 0; i < passLength; i++) {
    var passwordstring = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(passwordstring);
  }

  var password1 = passwordBlank.join("");
  return password1;
}