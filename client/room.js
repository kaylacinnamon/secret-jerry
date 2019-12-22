function createRoom() {

    let roomName = document.getElementById('roomInput').value;

    // Get WebSocket
    var socket = io();
    
    console.log(socket.id)
}

console.log('test');