const fs = require('fs')
const file = fs.readFileSync(process.argv[2])
const lines = file.toString().split('\n').length - 1 // count the number of lines and subtract 1 for the last empty line
console.log(lines)