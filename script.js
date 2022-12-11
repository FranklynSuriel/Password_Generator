// Assignment Code
var lowerChr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbersChr = [0,1,2,3,4,5,6,7,8,9]
var specialChr = ["!","@","#","$","%","^","&","*","(",")","_","-","+","/"];



function generatePassword(){
  var result = [];

  var count = 0
  var allChr = []
  var passwordLength = window.prompt(" Enter password lenght (Between 8 and 128 Characters): ");
  console.log(passwordLength);

  if (passwordLength > 7 && passwordLength < 129) {
    var lowerCase = window.confirm("Do you want to include lowercase?");
    var upperCase = window.confirm("Do you want to include uppercase?");
    var numbers = window.confirm("Do you want to include numbers?");
    var special = window.confirm("Do you want to include special characters?");
  } else if (!passwordLength) {
    return;
  }else {
    window.alert(" You need to choose a password between 8 to 128 characters");
    generatePassword();
  }
  var lower = [];
  var upper = [];
  num = [];
  specials = [];
  // Create if statment for each requirement that is true
  //if statement is bad , for is good
  if (lowerCase) {
    for (i = 0; i < 1; i = i + 1) {
      var index = Math.floor(Math.random() * lowerChr.length);
      lower = lower.concat(lowerChr[index]);
      allChr = allChr.concat(lowerChr);
      count++;
     
    }
    result = result.concat(lower);
  }

  if (upperCase) {
    for (i = 0; i < 1; i = i + 1) {
      var index = Math.floor(Math.random() * upperChr.length);
      upper = upper.concat(upperChr[index]);
      allChr = allChr.concat(upperChr);
      count++;
    }
    result = result.concat(upper);
  }

  if (numbers) {
    for (i = 0; i < 1; i = i + 1) {
      var index = Math.floor(Math.random() * numbersChr.length);
      num = num.concat(numbersChr[index]);
      allChr = allChr.concat(numbersChr);
      count++;
    }
    result = result.concat(num);
  }

  if (special) {
    for (i = 0; i < 1; i = i + 1) {
      var index = Math.floor(Math.random() * specialChr.length);
      specials = specials.concat(specialChr[index]);
      allChr = allChr.concat(specialChr);
      count++;
      
    }
    result = result.concat(specials);
  }

  if (result.length <= passwordLength) {
    for (i = count; i <= passwordLength; i++){
      var index = Math.floor(Math.random() * allChr.length);
      result = result.concat(allChr[index]);
      console.log(result);

    }
  }

  // console.log(count);
  // console.log(result);
  // console.log(allChr);

  // result.sort();
  return(result.join(""));

}

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
