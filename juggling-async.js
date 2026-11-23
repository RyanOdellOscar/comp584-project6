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
            contents[i] = data; // store data from request in the array when done
            returned += 1; // signifies the end of the request
        })
    })
}

checkReturned = setInterval(() => { // checks if all request have returned every 100ms
    if (returned === urls.length) {
        clearInterval(checkReturned);
        for (let i = 0; i < contents.length; i++) {
            console.log(contents[i]); // prints the data if all request have returned
        }
    }
}, 100)