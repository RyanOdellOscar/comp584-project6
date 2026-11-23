const url = process.argv[2];
const http = require('http');
http.get(url, (response) => {
    response.setEncoding('utf8');
    let data = '';
    response.on('data', function (data) {
        console.log(data);
    })
})