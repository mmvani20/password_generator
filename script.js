var generatePasswordButton = document.getElementById("generate");
var copyToClipBoardButton = document.getElementById("copytoclipboard");

// Special characters 
var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Numeric characters
var numberCharacter = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Alphabetical characters
var lowerCaseCharacgter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseCharacter = ["A",   "B",   "C",   "D",  "E",   "F",   "G",   "H",   "I",   "J",   "K",   "L",   "M",   "N",   "O",  "P",   "Q",   "R",   "S",   "T",   "U",   "V",   "W",   "X",   "Y",   "Z"
]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//generate the password
function generatePassword(){
  var option = getpasswordoptions();
}

function getpasswordoptions(){
  var length = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"))
  console.log("length is: "+ length)
  password = ""
  //run a loop for length anoumt of time  
  if (length >= 8 && length <=128 ){
    alert("you Have chosen a password of " + length + " character")
  }
  else {
    alert("characters needs to be Between 8 and 128." );
    generatePassword()
  }
  var specialCharacter = confirm("would you like to use a special character?")
  console.log(specialCharacter);
  var numberCharacter = confirm("would you like to use a number character?")
  console.log(numberCharacter);
  var lowerCaseCharacter = confirm("would you like to use a lowercase character?")
  console.log(lowerCaseCharacter);
  var upperCaseCharacter = confirm("would you like to use a uppercase character?")
  console.log(upperCaseCharacter);

  if (specialCharacter == false && numberCharacter == false && lowerCaseCharacter ==false && upperCaseCharacter == false){
    alert("Your password must contain at least one special, numeric, lowercase, or uppercase character")
    return;
  }
  var Options = {
    length: length,
    specialCharacter: specialCharacter,
    numberCharacter: numberCharacter,
    lowerCaseCharacter: lowerCaseCharacter,
    upperCaseCharacter: upperCaseCharacter
  }
  generatePassword()

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
