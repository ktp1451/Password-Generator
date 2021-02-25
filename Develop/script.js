// get references for #generate element
var generateBtn = document.querySelector("#generate");

// add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Array of special characters to be included in password
var specialCharacters = '`~!@#$%^&*(){}[]+<>/,.-_=+:;';
var specialArr = specialCharacters.split("");
console.log();

// Array of numeric characters to be included in password
var numericCharacters = "0123456789";
var numericArr = numericCharacters.split("");
console.log();

// Array of lowercase characters to be included in password
var lowerCasedCharacters = "abcdefghijklmnopqrstuvwxyz";
var lowercaseArr = lowerCasedCharacters.split("");
console.log();

// Array of uppercase characters to be included in password
var uppercaseArr = lowerCasedCharacters.toUpperCase().split("");
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

// Conditional statement to check if password length is at least 8 characters long and no longer than 128. Prompts end if this evaluates false
while (passLength <8 || passLength >128) {
  alert('Your password must be at least 8 characters but no longer than 128');
  var passLength = (prompt('Password Character Length?'));
  }
  alert('Your password will be ' + passLength + ' characters long.');

// Variable to store boolean regarding the inclusion of special characters
 var specialCharactersConfirm = (confirm('Include special characters? Ok = Yes or Cancel = No'));

// Variable to store boolean regarding the inclusion of numeric characters
  var numericCharactersConfirm = (confirm('Include numbers characters? Ok = Yes or Cancel = No'));

// Variable to store boolean regarding the inclusion of lowercase characters
  var lowerCasedCharactersConfirm = (confirm('Include lowercase characters? Ok = Yes or Cancel = No'));
 
// Variable to store boolean regarding the inclusion of uppercase characters
  var upperCasedCharactersConfirm = (confirm('Include uppercase characters? Ok = Yes or Cancel = No'));

// Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
while (specialCharacters === false && numericCharactersConfirm === false && upperCasedCharactersConfirm === false) {
  alert('Must select at least one character type');
  var specialCharactersConfirm = (confirm('Include special characters? Ok = Yes or Cancel = No'));
  var numericCharactersConfirm = (confirm('Include numbers characters? Ok = Yes or Cancel = No'));
  var lowerCasedCharactersConfirm = (confirm('Include lowercase characters? Ok = Yes or Cancel = No'));
  var upperCasedCharactersConfirm = (confirm('Include uppercase characters? Ok = Yes or Cancel = No'));
}

// Object to store user input variables
 var passwordOptions = {
   passLength, specialCharactersConfirm, numericCharactersConfirm, lowerCasedCharactersConfirm, upperCasedCharactersConfirm
 };

 // Return the options object as the exported value of this function
 return passwordOptions;
}

// Function for getting a random element from an array
function getRandomElement(arr) {
  // Get a random number based on the length of the array parameter
  var randIndex = Math.floor(Math.random() * arr.length);
  // Use the random number made to get an element out of the array
  var randElement = arr[randIndex];
  // Return the element
  return randElement;
}

// Function to generate password with user input
function generatePassword() {
  // Running the function to trigger the prompts and get the users answers back as an object
  var options = getPasswordOptions();
  // Array to store password as it's being concatenated from conditional statements below
  var result = [];

  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters to make at least one of the value is always included 
  if (options.specialCharactersConfirm === true) {
    result = result.concat(specialArr)
  }

  // Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters to make at least one of the value is always included 
  if (options.numericCharactersConfirm === true) {
    result = result.concat(numericArr)
  }

  // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // Push new random lower-cased character to guaranteedCharacters to make at least one of the value is always included 
  if (options.lowerCasedCharactersConfirm === true) {
    result = result.concat(lowercaseArr)
  }

  // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // Push new random upper-cased character to guaranteedCharacters to make at least one of the value is always included 
  if (options.upperCasedCharactersConfirm === true) {
    result = result.concat(uppercaseArr)
  }
  // For loop to iterate over the password length provided from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  var randomPasword = ""
  for (var i = 0; i < options.passLength; i++) {
    var randomPasword = randomPasword + getRandomElement(result);
    //var possibleCharacter = getRandomElement(possibleCharacters);
  }

// For loop to iterate the guarenteed characters to overwrite the generated characters


// Join the array to make it a singular string to return 
  return randomPasword
}

// Get references to the #generate element
//var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  // Runs the function that will generate the password
  var password = generatePassword();
  // Selects on the HTML where the password is shown
  var passwordText = document.querySelector('#password');
  // Makes the value of the element the string generated from the generatePassword function
  passwordText.value = password;
};