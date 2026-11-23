directory = process.argv[2];
extension = process.argv[3];

const fs = require('fs');
fs.readdir(directory, (err, list) => {
    if (err) {
        console.error(err);
    }
    list.forEach(file => { // loop through each file in directory
        if (file.endsWith(`.${extension}`)) { // uses extension to filter files
            console.log(file);
        }
    });
});