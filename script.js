// Assignment Code
let passwordLength;

let confirmUpper;
let confirmLower;
let confirmSpecial;
let confirmNumbers;

let charsUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
let charsLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let charsSpecial = ['!','@','#','$','%','^','&','*', '(',')'];
let charsNumbers = ['0','1','2','3','4','5','6','7','8','9'];

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
  if (!passwordLength) {
    alert("No value entered");
  }
  else if(passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Must enter a value between set range 8-128");
  }
  else {
    confirmUpper = confirm("Do you want to use uppercase characters?");
    confirmLower = confirm("Do you want to use lowercase characters?");
    confirmSpecial = confirm("Do you want to use special characters?");
    confirmNumbers = confirm("Do you want to use Numbers?");
  }

  if (!(confirmUpper && confirmLower && confirmSpecial && confirmNumbers)) {
    alert("please select one of the options")
  }

  if (confirmLower){
    characters = charsLower;
    console.log(characters);
  }

  if (confirmUpper){
    characters = charsUpper;
  }

  if (confirmNumbers){
    characters = charsNumbers;
  }
  
  if (confirmSpecial){
    characters = charsSpecial;
  }

  if (confirmUpper && confirmLower){
    characters = charsLower.concat(charsUpper);
  }

  if (confirmNumbers && confirmLower){
    characters = charsLower.concat(charsNumbers);
  }

  if (confirmUpper && confirmNumbers){
    characters = charsNumbers.concat(charsUpper);
  }

  if (confirmSpecial && confirmLower){
    characters = charsLower.concat(charsSpecial);
  }

  if (confirmUpper && confirmSpecial){
    characters = charsSpecial.concat(charsUpper);
  }

  if (confirmNumbers && confirmSpecial){
    characters = charsSpecial.concat(charsNumbers);
  }

  if (confirmLower && confirmUpper && confirmNumbers){
    characters = charsLower.concat(charsUpper, charsNumbers);
  }

  if (confirmLower && confirmUpper && confirmSpecial){
    characters = charsLower.concat(charsUpper, charsSpecial);
  }

  if (confirmLower && confirmNumbers && confirmSpecial){
    characters = charsLower.concat(charsNumbers, charsSpecial);
  }
  
  if (confirmUpper && confirmNumbers && confirmSpecial){
    characters = charsUpper.concat(charsNumbers, charsSpecial);
  }

  if (confirmUpper && confirmNumbers && confirmSpecial && charsLower){
    characters = charsUpper.concat(charsNumbers, charsSpecial, charsLower);
    console.log(characters);
  }
}
