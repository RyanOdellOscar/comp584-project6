const http = require('http');

const server = http.createServer((req, res) => {
    const map = require('through2-map');
    req.pipe(map((chunk) => {
        return chunk.toString().toUpperCase();
    })).pipe(res);
})
server.listen(process.argv[2]);