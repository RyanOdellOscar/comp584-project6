const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.createReadStream(process.argv[3]).pipe(res); // create a readable stream from the file and pipe it to the response
})
server.listen(process.argv[2]); // listen for connections on the port