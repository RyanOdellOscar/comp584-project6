let urls = process.argv.slice(2);
const http = require('http')
let contents = new Array(urls.length);
let returned = 0;
for (let i = 0; i < urls.length; i++) {
    http.get(urls[i], (response) => {
        response.setEncoding('utf8');
        let data = '';
        response.on('data', function (chunk) {
            data += chunk;
        })
        response.on('error', console.error);
        response.on('end', () => {
            contents[i] = data;
            returned += 1;
        })
    })
}

checkReturned = setInterval(() => {
    if (returned === urls.length) {
        clearInterval(checkReturned);
        for (let i = 0; i < contents.length; i++) {
            console.log(contents[i]);
        }
    }
}, 100)