directory = process.argv[2];
extension = process.argv[3];

const fs = require('fs');
fs.readdir(directory, (err, list) => {
    if (err) {
        console.error(err);
    }
    list.forEach(file => {
        if (file.endsWith(`.${extension}`)) {
            console.log(file);
        }
    });
});