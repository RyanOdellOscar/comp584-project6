const fs = require('fs')
fs.readFile(process.argv[2], (err, file) => { // read the file asynchronously
    if (err) {
        console.error(err)
        return
    }
    const lines = file.toString().split('\n').length - 1 // count the lines like the last file
    console.log(lines)
})