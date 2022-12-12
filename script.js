// These variables will store all characters for the password.
var lowerCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbersChraracters = [0,1,2,3,4,5,6,7,8,9]
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","_","-","+","/"];


//This function will generate a random password.
function generatePassword(){
 
  
  // These variables will save a random value of each type that is selected in the password criteria
  // to validate that at least one character type should be selected.
  var lowerCritera = [];
  var upperCritera = [];
  var numberChritera = [];
  var specialCriteria = [];

  var count = 0 // to count how many character types to include in the password.
  var charactersSelected = [] // Store all the character types to include in the password.
  var passwordResult = []; //Store the random password in the result variable.

  var passwordLength = window.prompt("Enter password length (Between 8 and 128 Characters): ");
  
  // If statement to make sure the password lenght is between 8 to 128 characters.
  if (passwordLength > 7 && passwordLength < 129) {
    //if password length is true then ask for character types to include in the password.
    var lowerCase = window.confirm("Do you want to include lowercase?");
    var upperCase = window.confirm("Do you want to include uppercase?");
    var numbers = window.confirm("Do you want to include numbers?");
    var special = window.confirm("Do you want to include special characters?");

  } else if (!passwordLength) {
    //if password length is false then return the value of result, at this point is empty.
    return result;
  }else {
    // if password length is less than 8 or more than 128 alert the user and call the function again.
    window.alert(" You need to choose a password between 8 to 128 characters");
    generatePassword();
  }
  
  // Create this function to validate the criteria for the password.
  // criteria will evaluate the prompts.
  //characterType is the type of character that will be included in the password.
  //validateChr to validate that criteria will be contained in the password.
  function requirement(criteria,characterType) {
    if (criteria) {                                                  // If the criteria value is true will execute the following.
      var index = Math.floor(Math.random() * characterType.length);  // this line create a random value for index.
      charactersSelected = charactersSelected.concat(characterType); // this will add the content of the selected character type to the end of the array of the variable charactersSelected.
      passwordResult = passwordResult.concat(characterType[index]);  // this will store one character to validate the criteria of the password.
      count++;                                                       // this will add 1 to var count. we will use this later to determine how many charaters left we need to complete the password length.
    }
  }

  //call the function for evaluation.
  requirement(lowerCase,lowerCharacters,lowerCritera);
  requirement(upperCase,upperCharacters,upperCritera);
  requirement(numbers,numbersChraracters,numberChritera);
  requirement(special,specialCharacters,specialCriteria);

  // compare the length of passwordResul and passwordLength to complete the length of the desire password.
  if (passwordResult.length < passwordLength) {   
    // Use this for loop to complete the length of the password.
    //We use count to define the start point in the array. 
    // Because the array start in 0, this for loop will work while i is less that passwordLengt.                      
    for (i = count; i < passwordLength; i++){ 
      var index = Math.floor(Math.random() * charactersSelected.length);
      passwordResult = passwordResult.concat(charactersSelected[index]);      
    }
  }

  return(passwordResult.join(""));
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
