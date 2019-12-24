const io = require("socket.io")();

const port = process.env.PORT || 4001;
const gameMasterSocketID = null;
const players = {}; // players[socketID] = playerName

/**
 * Called when the client presses 'Start Game'
 */
function handleGameStart() {}

/**
 * Assigns roles to all players
 */
function assignRoles() {
    playerCount = len(players.keys());  
}

io.on("connection", socket => {
    console.log(`New client connected with client id ${socket.id}`);
    socket.on("disconnect", () => console.log("Client disconnected"));

    socket.on("gameMaster", () => {gameMasterSocketID = socket.id});
    socket.on("playerJoin", playerName => {
        players[socket.id] = playerName;
        console.dir(players);
    });
    socket.on("gameStart", handleGameStart);
});

io.listen(port);
console.log(`Listening on port ${port}`)