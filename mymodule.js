module.exports =  function (directory, extension, callback) {
    const fs = require('fs');
    fs.readdir(directory, (err, list) => {
        if (err) {
            return callback(err);
        }
        const filteredList = list.filter(file => file.endsWith(`.${extension}`));
        return callback(null, filteredList);
    });
}