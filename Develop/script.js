// get references for #generate element
var generateBtn = document.querySelector("#generate");

// add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Array of special characters to be included in password
var specialCharacters = '`~!@#$%^&*(){}[]+<>/,.-_=+:;';
var specialArr = specialCharacters.split("");
console.log();

// Array of numeric characters to be included in password
var numericCharacters = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
var numericArr = specialCharacters.split("");
console.log();

// Array of lowercase characters to be included in password
var lowerCasedCharacters = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
var lowerArr = specialCharacters.split("");
console.log();

// Array of uppercase characters to be included in password
var upperCasedCharacters = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
console.log();

// Function to prompt user for password options
function getPasswordOptions() {
// Variable to store length of password from user input
var passLength = (prompt('Password Character Length?'));

// Conditional statement to check if password length is a number. Prompts end if this evaluates false
if (isNaN(passLength) === true) {
  alert('Password length must be provided as a number');
  return;
  }

// Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  while (passLength <8 || passLength >128) {
    alert('Your password must be at least 8 characters but no longer than 128');
    var passLength = (prompt('Password Character Length?'));
  }
  alert('Your password will be ' + passLength +)

//DOM elements

const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numbersEL = document.getElementById('numbers');
const symbolsEL = document.getElementById('symbols');
const generateEL = document.getElementById('generate');
const clipboardEL = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

//generate event listen

generateEL.addEventListener('click', () => {
  const length = +lengthEL.value;
  const hasLower = lowercaseEL.checked;
  const hasUpper = uppercaseEL.checked;
  const hasNumber = numbersEL.checked;
  const hasSymbol = symbolsEL.checked;

  resultEl.innerText = generatePassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSymbol);
  console.log(typeof length);
});

//copy password to clipboard
clipboardEL.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEL.innerText;

  if(!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard');
});

//generate password function
function generatePassword(lower, uppper, number, symbol, length){
  //1. Init pw var
  //2. filter out unchecked types
  //3. loop over the length call generateor function for each type
  //4. add final pw to the pw var adn return

  let generatePassword = '';

  const typesCount = lower + uppper + number + symbol;

  console.log('typesCount: ', typesCount);

  const typesArr = [{ lower }, { uppper }, { number }, { symbol }].filter
  (
    item => Object.values(item)[0]
    );

  console.log('typesArr: ', typesArr);

  if(typesCount === 0){
    return '';
  }

  for(let i = 0; i < length; i += typesCount){
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      console.log('funcName; ', funcName);

      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatePassword.slice(0, length);

  return finalPassword;
}

//generator functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLower());

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUpper());

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNumber());

function getRandomSymbol() {
  const symbols = '`~!@#$%^&*(){}[]+<>/,.-_=+:;';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbol());