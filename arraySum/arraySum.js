numbers = [3,4,5,6,4]


const sum = numbers.reduce((accumulator, currentValue) => {

return accumulator + currentValue

}, 0)

console.log(sum)