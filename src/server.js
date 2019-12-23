const io = require("socket.io")();

const port = process.env.PORT || 4001;

io.on("connection", socket => {
    console.log("New client connected");
    socket.on("disconnect", () => console.log("Client disconnected"));
});

io.listen(port);
console.log(`Listening on port ${port}`)