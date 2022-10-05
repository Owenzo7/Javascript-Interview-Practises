// Given an array filled with objects ID's, return the list of 
// unique ID's in a string.


// -------Steps to Answer these Question---------//

// ! Convert the Array of Objects into an Array of ID's.
// ! Convert the Array of ID's into an Array of unique ID's
// ! Join the Array to create a string of ID'S separated by ","



// ! The Top tech method.
const stringifyId = (arr) => {

const IdArray = arr.map((obj) => obj.id)

const UniqueArray = [... new Set(IdArray)]


return UniqueArray.join(", ")

}


console.log(stringifyId([{'id':'73','foo':'bar'},{'id':'45','foo':'bar'},{'id':'45','foo':'bar'},{'id':'45','foo':'bar'}]))