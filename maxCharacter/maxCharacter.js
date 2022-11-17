// Given a String, find the character that is used the maximum
// number of times

// Example

// maxCharacter('aabbbccd') === 'b'
// maxCharacter('foo 111123') === '1'

// ----> Steps <----

// 1. Create a Char Map.
// 2.

// 80K Question.

// const maxCharacter = (str) => {
//   const charMap = {};
//   let max = 0;
//   let maxChar = "";

//   for (let char of str) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//  for(let char in charMap){

//    if (charMap[char] > max){
//     max= charMap[char]
//     maxChar = char;
//    }
//  }

//  return maxChar
// };

// console.log(maxCharacter("aaaaabe"));

// Top tech method.

// const str = "simplified !";

// const CharMap = new Map();

// for (const char of str) {
//   const count = CharMap.get(char);

//   CharMap.set(char, count + 1 || 1);
// }

// for (const [char, count] of CharMap) {
//   console.log(char, count);
// }

const maxCharacter = (str) => {
  const charMap = {};

  let max = 0;

  let maxChar = "";

  for (const char of str) {
    charMap.set(char, charMap.get(char) + 1 || 1);
  }

  for (const [char, count] of charMap) {
    if (count > max) {
      max = count;
      maxChar = char;
    }
  }

  return maxChar;
};

console.log(maxCharacter("gggggghw"));
