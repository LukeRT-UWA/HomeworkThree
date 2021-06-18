// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//--------




const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

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
