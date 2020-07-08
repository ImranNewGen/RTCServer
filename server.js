var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const RTCMultiConnectionServer = require('rtcmulticonnection-server');
const PORT = process.env.PORT || 4321

app.get('/', (req, res) => {
    res.send('<h1>RTCMultiConnectionServer is running ...</h1>');
});

io.on('connection', (socket) => {
    RTCMultiConnectionServer.addSocket(socket);
    const params = socket.handshake.query;
    console.log('=====>');
    console.log(params);
    console.log('<====');
});

http.listen(PORT, () => {
    console.log('listening on : '+ PORT);
});
