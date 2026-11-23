module.exports =  function (directory, extension, callback) { // module that exports a function
    const fs = require('fs');// this function does most of the work
    fs.readdir(directory, (err, list) => {
        if (err) {
            return callback(err);
        }
        const filteredList = list.filter(file => file.endsWith(`.${extension}`));
        return callback(null, filteredList); // returns null for error and list if successful
    });
}