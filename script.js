// Assignment code here

let lowerCase = [
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
let upperCase = [
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
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let special = [
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

let generatePassword = function () {
  // ask user questions
  let passwordLength = window.prompt(
    "How long do you want your password to be?"
  );
  passwordLength = parseInt(passwordLength);
  console.log(typeof passwordLength);
  // make an if statement!! if its between 8 and 128, make an alert "Must be between 8 and 128" Then start fun over again
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === NaN) {
    alert("Password needs to be between 8 and 28 characters");
    return;
  }

  let userChoices = [];

  let includeNumbers = window.confirm(
    "Would you like your password to include numbers?"
  );

  if (includeNumbers) {
    userChoices = userChoices.concat(numbers);
  }

  let includeLowerCase = window.confirm(
    "Would you like your password to include lowercase characters?"
  );

  if (includeLowerCase) {
    userChoices = userChoices.concat(lowerCase);
  }
  let includeUpperCase = window.confirm(
    "Would you like your password to include uppercase characters?"
  );

  if (includeUpperCase) {
    userChoices = userChoices.concat(upperCase);
  }

  let includeSpecialCharacters = window.confirm(
    "Would you like your password to include special characters?"
  );
  if (includeSpecialCharacters) {
    userChoices = userChoices.concat(special);
  }
  console.log(userChoices);

  let result = "";
  // now that you have all the usewrs options, write a for loop that will run for the amount of times the password length is.
  for (let i = 0; i < passwordLength; i++) {
    let index = userChoices[Math.floor(Math.random() * userChoices.length)];
    result += index;
  return result;
};



// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Get references to the #generate element
let generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
