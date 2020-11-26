const app = require('express')();
const server = require('http').createServer(app);
const options = { /* ... */ };
const io = require('socket.io')(server, options);


io.on("connection", (socket) => {
  console.log(socket.id)
  io.emit("hello", "world");
});
server.listen(3000);