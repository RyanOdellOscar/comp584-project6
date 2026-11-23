const net = require('net');
const server = net.createServer((socket) => { // create TCP server to listen to connections
    const date = new Date();
    // format the date and time in a strict format
    const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    socket.end(formattedDate + '\n'); // send the time and close connection
})
server.listen(process.argv[2]); // listen for connections on the port