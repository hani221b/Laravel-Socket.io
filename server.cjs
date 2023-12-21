const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const { createServer } = require("http");
const server = http.createServer(app);
const httpServer = createServer(app);

const io = require('socket.io')(server, {
     cors: { origin: "*"} });

     io.on('connection', (socket) => {
        socket.on('chat message', (msg) => {
            io.emit('chat message', msg);
        });
    });

server.listen(3000, () => {
     console.log('Server is running');
});
