const http = require('http');

const server = http.createServer((req, res) => {
    const map = require('through2-map'); // import through2-map module to transform data stream
    req.pipe(map((chunk) => {
        return chunk.toString().toUpperCase(); // uppercase the data 
    })).pipe(res); // pipes it to response
})
server.listen(process.argv[2]);