// Assignment code here
// Define global variables as array
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "=",
  "+",
  "_",
  "'",
];

// create a function that generates password

var generatePassword = function () {
  // ask user questions
  // asks user How long password length should be and store it within the a variable
  var passwordLength = window.prompt(
    "How long do you want your password to be?"
  );
  // converts "" to integer(number)
  passwordLength = parseInt(passwordLength);
  // make an if statement!! if its between 8 and 128, make an alert "Must be between 8 and 128" Then start fun over again
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === NaN) {
    alert("Password needs to be between 8 and 128 characters");
    return;
  }
  // create an empty array and store it in userChoices variable
  var userChoices = [];
  // ask user yes or no; would you like password to have nums
  var includeNumbers = window.confirm(
    "Would you like your password to include numbers?"
  );
    // if its true add to userChoices
    // concat adds to existing userChoices (num,case, spec char, etc)
  if (includeNumbers) {
    userChoices = userChoices.concat(numbers);
  }
  var includeLowerCase = window.confirm(
    "Would you like your password to include lowercase characters?"
    );
    // if its true add to userChoices 
  if (includeLowerCase) {
    userChoices = userChoices.concat(lowerCase);
  }
  var includeUpperCase = window.confirm(
    "Would you like your password to include uppercase characters?"
    );
    
    // if its true add to userChoices 
  if (includeUpperCase) {
    userChoices = userChoices.concat(upperCase);
  }

  var includeSpecialCharacters = window.confirm(
    "Would you like your password to include special characters?"
  );
  if (includeSpecialCharacters) {
    userChoices = userChoices.concat(special);
  }

  // if user didn't put any characters, throw alert
  if(userChoices.length === 0){
    window.alert("Enter Something!");
    return;
  }
  // create(declare) a new variable so that the result is a string
  var result = "";
// create a loop that picks at random from userchoices * the password length
  for (var i = 0; i < passwordLength; i++) {
    var randomChoice =
      userChoices[Math.floor(Math.random() * userChoices.length)];
      // assinging randomChoice into result
    result += randomChoice;
  }
  return result;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
