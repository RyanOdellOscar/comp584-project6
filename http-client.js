const url = process.argv[2];
const http = require('http');
http.get(url, (response) => { // Get request to the URL for data
    response.setEncoding('utf8');
    let data = '';
    response.on('data', function (data) { // event listener for data chunks
        console.log(data);
    })
})