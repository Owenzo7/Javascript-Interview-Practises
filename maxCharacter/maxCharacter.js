// Given a String, find the character that is used the maximum
// number of times

// Example

// maxCharacter('aabbbccd') === 'b'
// maxCharacter('foo 111123') === '1'

// ----> Steps <----

// 1. Create a Char Map.
// 2.

const maxCharacter = (str) => {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

 for(let char in charMap){

   if (charMap[char] > max){
    max= charMap[char]
    maxChar = char;
   }
 }

 return maxChar
};

console.log(maxCharacter("aaaaabe"));
