const reverseString = (str) => {

    let reversed = ""

    for (let i = 0; i < str.length; i++) {
       
        reversed = str[i] + reversed
        
    }

    return reversed
}

console.log(reverseString("don"))


// The second Method


const ReverseString = (str) => {

let reversed = ""


for ( let char of str) {

    reversed = char + reversed
}

return reversed

}

console.log(ReverseString("Owen"))


// Using the array reverse Method.

const reversestrinG = (str) => {

// Here it is converting "David" ---> ['D','A','V','I','D']
const arr = str.split('')

const reversedArray = arr.reverse()

// Convert the new array back to a string 

 return reversedArray.join('')



}

console.log(reversestrinG("David"))