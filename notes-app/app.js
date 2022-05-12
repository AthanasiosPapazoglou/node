const validator = require('validator')
const note = require('./notes.js')

const message = note()
console.log(message)

console.log(validator.isEmail('example.com'))
console.log(validator.isEmail('nasos@example.com'))

console.log(validator.isURL('sgadsg'))
console.log(validator.isURL('https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728848?start=90#overview'))


