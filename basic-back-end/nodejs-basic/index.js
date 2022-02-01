const moment = require("moment")

const sayHi = (jeneng) => {
    console.log(`Hello my name is ${jeneng}`)
}

sayHi("Johar")

const cpuInformation = process.memoryUsage().heapUsed

console.info(cpuInformation)

const firstName = process.argv[2]
const lastName = process.argv[3]

console.info(`Hello ${firstName} ${lastName}`)

const date = moment().format('MMM Do YY')

console.info(date)