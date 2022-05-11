const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Thanos')
fs.appendFileSync('notes.txt', 'this was appended by node.js')