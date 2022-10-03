const reverseInt = (int) => {


let reversed = parseInt(int.toString().split("").reverse().join(""))

return int < 0? reversed * -1 : reversed;

}

console.log(reverseInt(-902))