// Assignment Code
var lowerChr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbersChr = [0,1,2,3,4,5,6,7,8,9]
var specialChr = ["!","@","#","$","%","^","&","*","(",")","_","-","+","/"];
var result = [];
var generateBtn = document.querySelector("#generate");

function generatePassword(){
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
  
  //if statement is bad , for is good
  if (lowerCase === true) {
    for (i = 0; i <= passwordLength; i = i + 1) {
      var index = Math.floor(Math.random() * lowerChr.length);
      result[i] = lowerChr[index]
      

      // result[i] =(lowerCase[index]);
      // result = result.concat(result[i]);
      
      // var result = result.push(computerChoice);
      console.log(index);
      // console.log(result[i]);
      // console.log(result);


    }
  }

  return(result.join(""));

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
