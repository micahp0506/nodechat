'use strict';


const express = require('express');
const app = express();
const server = require('http').createServer(app);
// const io = require('socket.io')(server);

const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Yo!!');
});

server.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});


