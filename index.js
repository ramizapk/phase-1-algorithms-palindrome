function isPalindrome(word) {
  // Write your algorithm here
  let reverse = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }

  let result = word == reverse ? true : false;
  return result;
}

/*
  Add your pseudocode here

  SET reverse , result

  FOR each character of the input word in reverse order
    reverse+=word[i]
  END FOR

  IF word == reverse 
    result= true
  ELSE
    result= false
  END IF

  Return result


*/

/*
   *Initialize a variable to store the reversed word

   *Loop through each character of the input word in reverse order
      -Append each character to the reverse variable

    *Check if the input word is equal to the reversed word
      -If reverse equal word 
        --result= true
      -If reverse not equa word
        -- result = false
    
    *return result
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ali"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ahmed"));


}

module.exports = isPalindrome;
