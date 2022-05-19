const express = require("express");
const socket = require("socket.io");
const http = require("http");
const { userInfo } = require("os");

const app = express();
const PORT = 3000 || process.env.PORT;
const server = http.createServer(app);


// Set static folder
app.use(express.static("public"));
process.on('uncaughtException', function (err) {
    console.log(err);
});
// Socket setup
const io = socket(server);

// Players array
let users = [];
let nextEnemyId = 0;
io.on("connection", (socket) => {
  // console.log("Made socket connection", socket.id);
  socket.on("join", (data) => {
    console.log(data);
    users.push(data);
    io.sockets.emit("join", data);
  });
  socket.on("joined", () => {

    socket.emit("joined", users);
  });
  socket.on("playerUpdate", (data) => {

    users[data.playerObject.id].playerObject = data.playerObject;
    io.sockets.emit("playerUpdate", users);
  });
  //General Enemy calls
  socket.on("spawnEnemy", (data) => {
    console.log("spawnEnemy", data);
    data.id = nextEnemyId;
    io.sockets.emit("spawnEnemy", data);
    nextEnemyId++;
  });
  socket.on("enemyIsDying", (data) => {
    console.log("enemyIsDying", data);
    io.sockets.emit("enemyIsDying", data);
  });
  socket.on("enemyDied", (data) => {
    console.log("enemyDied", data);
    io.sockets.emit("enemyDied", data);
  });


  socket.on("stop", () => {
    console.log("stop");
    io.sockets.emit("stop");
    users = [];
    nextEnemyId = 0;
  });

});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));