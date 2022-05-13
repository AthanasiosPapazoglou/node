const chalk = require('chalk')
const validator = require('validator')

const note = require('./notes.js')

const message = note()
console.log(message)

console.log(process.argv)

console.log(chalk.green.inverse('ligma'))
