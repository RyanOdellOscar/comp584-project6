const http = require('http');

const server = http.createServer((req, res) => {
    fullURL = new URL(req.url, `http://${req.headers.host}`) // create a new URL object
    path = fullURL.pathname; // get path from object
    if (path === '/api/parsetime') { // discern endpoints
        const time = new Date(fullURL.searchParams.get('iso'));
        const response = { // create response in JSON
            "hour": time.getHours(),
            "minute": time.getMinutes(),
            "second": time.getSeconds()
        }
        res.writeHead(200, { 'Content-Type': 'application/json' }); // set response head
        res.end(JSON.stringify(response)); // send response
    }
    else if (path === '/api/unixtime') {
        const time = new Date(fullURL.searchParams.get('iso'));
        const response = {
            "unixtime": time.getTime()
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response));
    }
    else {
        res.writeHead(404); // in case other paths go through
        res.end();
    }
})
server.listen(process.argv[2]);