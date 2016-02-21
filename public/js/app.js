var socket = io();

socket.on('connect', function () {
    console.log('Connnected to socket.io server!');
});

socket.on('message', function (message) {
    console.log('New message: ' + message.text);
});