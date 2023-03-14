const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
 

app.use(express.static(path.join(__dirname + "/public")));

const server = require("http").createServer(app);

const io = require("socket.io")(server);

io.on("connection", (socket) => {
  socket.on("newuser", (username) => {
    socket.brodcast.emit("update", username + " joined the conversation");
  });

  socket.on("exituser", (username) => {
    socket.brodcast.emit("update", username + " left the conversation");
  });

  socket.on("chat", (message) => {
    socket.brodcast.emit("chat", message);
  });
});

app.listen(5000, () => {
  console.log("Sever listen on 5000 port");
});
