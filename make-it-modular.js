directory = process.argv[2];
extension = process.argv[3];
const mymodule = require('./mymodule.js')
const fs = require('fs');
list = mymodule(directory, extension, (err, list) => {
    if (err) {
        console.log(err);
    }
    list.forEach(file => {
        console.log(file);
    });
});
