// Assignment Code
let passwordLength;

let confirmUpper;
let confirmLower;
let confirmSpecial;
let confirmNumbers;

let charsUpper = [
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
let charsLower = [
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
let charsSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
let charsNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let characters = [];

let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  passwordLength = prompt("Choose password length 8-128");
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
    alert("Must enter a value between set range 8-128");
    return;
  } else {
    confirmUpper = confirm("Do you want to use uppercase characters?");
    confirmLower = confirm("Do you want to use lowercase characters?");
    confirmSpecial = confirm("Do you want to use special characters?");
    confirmNumbers = confirm("Do you want to use Numbers?");
  }

  if (!confirmUpper && !confirmLower && !confirmSpecial && !confirmNumbers) {
    alert("please select one of the options");
    return;
  }
  let generatedpassword = [];
  if (confirmUpper) {
    characters = characters.concat(charsUpper);
    // let element = charsUpper[Math.floor(Math.random() * charsUpper.length)];
    // generatedpassword.push(element);
  }
  console.log(characters);
  if (confirmLower) {
    characters = characters.concat(charsLower);
  }
  console.log(characters);
  if (confirmSpecial) {
    characters = characters.concat(charsSpecial);
  }
  console.log(characters);
  if (confirmNumbers) {
    characters = characters.concat(charsNumbers);
  }
  console.log(characters);
  
  for (let i = 0; i < passwordLength; i++) {
    let element = characters[Math.floor(Math.random() * characters.length)];
    generatedpassword.push(element);
  }
  
  var displayedpasssword = generatedpassword.join("");
  
  return displayedpasssword;
}
