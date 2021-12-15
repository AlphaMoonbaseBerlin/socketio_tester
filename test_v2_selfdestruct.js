const server = require('http').createServer();
const io = require('socket-io2')(server);

io.on('connection', client => { 
    console.log("New Connection : ", client);
    client.on("installation_connection", message => console.log("Recevied Event :", message));
    client.on("disconnect", data => console.log("Lost connection:", data));
    setTimeout(() => client.disconnect(true), 
                10 * 1000 );
 });
console.log("Starting Server with Socket.IO V2. Listeing on Port 3002. Every client will be disconnected after 10 seconds");
server.listen(3002);