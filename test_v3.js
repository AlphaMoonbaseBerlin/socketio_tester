
const server = require('http').createServer();
const io = require('socket-io3')(server);

io.on('connection', client => { 
    console.log("New Connection : ", client);
    client.on("installation_connection", message => console.log("Recevied Event :", message));
    client.on("*", event => console.log(event));
    client.on("disconnect", data => console.log("Lost connection:", data));
 });
console.log("Starting Server with Socket.IO V2. Listeing on Port 3001");
server.listen(3001);