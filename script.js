
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var generatePassword = function (promptLength, promptCase, promptNumber, promptCharacter) {

  var passString = "";

  var password = "";

  if (promptCase === "LOWERCASE" || promptCase === "lowercase") {
    passString = "abcdefghijklmnopqrstuvwxyz";
  }
  else if (promptCase === "UPPERCASE" || promptCase === "uppercase") {
    passString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  else {
    passString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (promptNumber === "YES" || promptNumber === "yes") {
    passString += "0123456789";
  }
  // would this be an if "no" or and else
  if (promptCharacter === "YES" || promptCharacter === "yes") {
    passString += "!@#$%^&*()/";
  }
  // if (promptAll === "YES" || promptAll === "yes") {
  //   passString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
  // }
  for (var i = 0; i < promptLength; i++) {
    var ranNum = Math.floor(Math.random() * passString.length);
    password += passString.substring(ranNum, ranNum + 1);
  }
  return password;
};
var passwordLength = function () {
  var promptLength = prompt("How long would you like your password to be? Enter a value from 8 to 128.");
  if (promptLength >= 8 && promptLength <= 128) {
    return promptLength;
  }
  else {
    alert("Please choose value between 8 and 128 to proceed,");
  }
};
// var prompt = window.alert('Choose your criteria');
var passwordCase = function () {
  var promptCase = window.prompt("Would you like to use lowercase, uppercase or both? Enter LOWERCASE, UPPERCASE OR BOTH to proceed.");
  if (promptCase === "LOWERCASE" || promptCase === "lowercase", promptCase === "UPPERCASE" || promptCase === "uppercase") {
    return promptCase;
  }
  else {
    alert("Please choose LOWERCASE, UPPERCASE, or BOTH to proceed.");
    passwordCase();
  }
};
function passwordNumber() {
  var promptNumber = window.prompt("Would you like to use numeric data? Enter YES or NO to proceed.");

  if (promptNumber === "YES" || promptNumber === "yes", promptNumber === "NO" || promptNumber === "no") {
    return promptNumber;
  }
  else {
    alert("Please choose YES or NO to proceed.");
    passwordNumber();
  }
}
var passwordCharacter = function () {
  var promptCharacter = window.prompt("Would you like to use special characters? Enter YES or NO to proceed.");
  if (promptCharacter === "YES" || promptCharacter === "yes", promptCharacter === "NO" || promptCharacter === "no") {
    return promptCharacter;
  }
  else {
    alert("Please choose YES or NO to proceed.");
    passCharacter();
  }
};
// var promptAll = window.prompt('Would you like to use all the criteria? Enter "YES" or "NO" to proceed.')

// var passwordLength = function () {
//   var promptLength = prompt("How long would you like your password to be? Enter value from 8 to 128.");
//   if (promptLength >= 8 && promptLength <= 128) {
//     return promptLength;
//   }
//   else {
//     alert("Please choose value between 8 and 128 to proceed,");
//   }
// };

function writePassword() {
  var promptCase = passwordCase();
  var promptNumber = passwordNumber();
  var promptCharacter = passwordCharacter();
  var promptLength = passwordLength();



  var password = generatePassword(promptLength, promptCase, promptNumber, promptCharacter);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// generateBtn.addEventListener("click", chooseNow);

