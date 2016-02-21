var socket = io();

socket.on('connect', function () {
    console.log('Connnected to socket.io server!');
});