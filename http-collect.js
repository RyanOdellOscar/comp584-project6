const url = process.argv[2];
const http = require('http');
http.get(url, (response) => {
    response.setEncoding('utf8');
    let body = '';
    response.on('data', (chunk) => {
        body += chunk; // concatenate the data chunks into a single string
    });
    response.on('error', console.error);
    response.on('end', () => {
        console.log(body.length); // print the number of characters in the rrsponse body before the data
        console.log(body);
    });
});