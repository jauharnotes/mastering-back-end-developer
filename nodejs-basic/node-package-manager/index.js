const _ = require('lodash')

const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2)

let myArray = [1, 2, 3, 4, 5, 6]

let newArray = []
let newArray2 = []

for (let i = 1; i <= myArray.length; i++) {
    if (myArray[i] % 2 == 0) {
        newArray.push(i)
    } else {
        newArray2.push(i)
    }
}

console.info(myOddEvenArray)

console.info(newArray)
console.info(newArray2)