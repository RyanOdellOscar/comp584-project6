const http = require('http');

const server = http.createServer((req, res) => {
    fullURL = new URL(req.url, `http://${req.headers.host}`)
    path = fullURL.pathname;
    if (path === '/api/parsetime') {
        const time = new Date(fullURL.searchParams.get('iso'));
        const response = {
            "hour": time.getHours(),
            "minute": time.getMinutes(),
            "second": time.getSeconds()
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response));
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
        res.writeHead(404);
        res.end();
    }
})
server.listen(process.argv[2]);