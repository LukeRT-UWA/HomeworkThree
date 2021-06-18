// Points to generate password button on page
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

//Set length and toggle character types (user input)
function generatePassword() {

  var passLength = window.prompt('How many characters long will your password be?');

  if (!passLength) {
		return;
	}

  if (isNan(passlength)) {
		window.alert 
    return;
	}

  if (passLength < 8) {
		window.alert('You must create a password that is at least 8 characters long.');
		return;
	}

  var isLower = window.confirm('Do you want to use lower case characters in your password?');

  var isUpper = window.confirm('Do you want to use upper case characters in your password?');

  var isSymbol = window.confirm('Do you want to use symbols in your password?');

  console.log(passLength, isLower, isUpper, isSymbol);

  for(i = 0; i < passLength;);
}



const randomFunc = {
lower: getRandomLower,
upper: getRandomUpper,
number: getRandomNumber,
symbol: getRandomSymbol,
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate Characters
// Generate lower case
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// Generate upper case
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// Generate number
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// Generate symbol
function getRandomSymbol() {
  const symbols = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
