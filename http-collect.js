const url = process.argv[2];
const http = require('http');
http.get(url, (response) => {
    response.setEncoding('utf8');
    let body = '';
    response.on('data', (chunk) => {
        body += chunk;
    });
    response.on('error', console.error);
    response.on('end', () => {
        console.log(body.length);
        console.log(body);
    });
});