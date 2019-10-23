function isPalindromic(str){
  // Create empty object 
  let letterCount = {}
  // Loop through every letter in the string
  for(let i = 0; i < str.length; i++){
    // If the letter is a key inside the object
    if (letterCount[str[i]]){
      // Add 1 to the counter
      letterCount[str[i]] += 1
    } else {
      // Otherwise, create a new counter for that new letter
      letterCount[str[i]] = 1
    }
  }
  // initialize counter
  let oddCounter = 0
   
  //Loop through every key in our object
  for(let letter in letterCount){
    // If the counter is an odd number
    if (letterCount[letter] % 2 === 1){
      // Add one to the counter
      oddCounter++  
    }    
  }

  //Return true if there is one or zero odd number of letters
  return oddCounter <= 1
}

