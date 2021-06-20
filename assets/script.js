//Character sets
var passwordBlank =[];
var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbersvar = '0123456789';
var symbol = '!@#$%^&*=-_';

// Points to generate password button on page
var generateBtn = document.querySelector("#generate");

// Write password to #password
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

  if (passLength > 128) {
		window.alert('You must create a password that is less than 128 characters long.');
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
//--------------------- 1
  if (isLower && isUpper && isNumber && isSymbol) {
    userChoices = lower.concat(upper, numbersvar, symbol);
  }

  if (isLower && isUpper && isNumber && !isSymbol) {
    userChoices = lower.concat(upper, numbersvar);
  }

  if (isLower && isUpper && !isNumber && !isSymbol) {
    userChoices = lower.concat(upper);
  }

  if (isLower && !isUpper && isNumber && !isSymbol) {
    userChoices = lower.concat(numbersvar);
  }

  if (isLower && !isUpper && !isNumber && !isSymbol) {
    userChoices = lower;
  }
  //--------------------- 2
  if (isUpper && isLower && isNumber && !isSymbol) {
    userChoices = upper.concat(lower, numbersvar);
  }
  if (isUpper && isLower && !isNumber && !isSymbol) {
    userChoices = upper.concat(lower);
  }
  if (isUpper && !isLower && isNumber && !isSymbol) {
    userChoices = upper.concat(numbersvar);
   }
  if (isUpper && !isLower && !isNumber && !isSymbol) {
    userChoices = upper;
   }
  //--------------------- 3

  if (isLower && isUpper && isNumber && !isSymbol) {
    userChoices = numbersvar.concat(upper, lower);
   }
  if (!isLower && isUpper && isNumber && !isSymbol) {
    userChoices = numbersvar.concat(upper);
  }
  if (isLower && !isUpper && isNumber && !isSymbol) {
    userChoices = numbersvar.concat(lower);
  }
  if (!isLower && !isUpper && isNumber && !isSymbol) {
    userChoices = numbersvar;
  }
  //--------------------- 4
  if (!isLower && isUpper && isNumber && isSymbol) {
    userChoices = symbol.concat(upper, numbersvar);
  }
  if (!isLower && isUpper && !isNumber && isSymbol) {
    userChoices = symbol.concat(upper);
  }
  if (isLower && !isUpper && !isNumber && isSymbol) {
    userChoices = symbol.concat(lower);
  }
  if (!isLower && !isUpper && !isNumber && isSymbol) {
    userChoices = symbol;
   }
   var passwordBlank =[];
//Creates password 
  for (var i = 0; i < passLength; i++) {
    var passwordstring = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(passwordstring);
  }
//Joins password generated onto password variable (without commas) then returns it to deisplay on line 14 and 15
  var password1 = passwordBlank.join("");
  return password1;
}