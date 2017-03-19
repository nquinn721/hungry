module.exports = function (server) {
    var io = require('socket.io')(server);
    // io.on('connection');


    return io;
}

