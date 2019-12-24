const io = require("socket.io")();

const port = process.env.PORT || 4001;
let gameMasterSocketID = null;
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
    socket.on("disconnect", () => {
        delete players[socket.id];
        console.log('Deleted player');
        console.dir(players);
        io.to(gameMasterSocketID).emit('playerChange',  players);
    });

    socket.on("gameMaster", () => {
        console.log('Game Master joined!');
        gameMasterSocketID = socket.id
    });

    socket.on("playerJoin", playerName => {
        console.log(`Player ${playerName} joined!`)
        console.log(`Sending notification to master at ${gameMasterSocketID}`)
        players[socket.id] = playerName;
        io.to(gameMasterSocketID).emit('playerChange',  players);
    });

    socket.on("gameStart", handleGameStart);
});

io.listen(port);
console.log(`Listening on port ${port}`)