function createRoom() {

    let roomName = document.getElementById('roomInput').value;

    // Get WebSocket
    var socket = io();
    
    console.log(socket.id)
}



socket.on("image", function (image) {
    output.src = image;
});