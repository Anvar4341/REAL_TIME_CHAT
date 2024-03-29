const express = require("express");
const cors = require("cors");
const app = express();
const socket = require("socket.io");
const db_connection = require("./config/dbConfig");
const routers = require("./router/routers");
require("dotenv").config();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(cors());
app.use(express.json());

db_connection();

app.use("/api", routers);

const server = app.listen(process.env.PORT || 5000, () => {
  console.log("Sever listen on 5000 port");
});

const io = socket(server, {
  cors: {
    origin: "*",
    credentials: true,
  }
});

global.onlineUser = new Map();
io.on("connection", (socket) => {
  socket.on("newuser", (username) => {
    onlineUser.set(username, socket.io);
  });

  socket.on("send-message", (message) => {
    const sendMessage = onlineUser.get(message.to);
    if (sendMessage) {
      socket.to(sendMessage).emit("msg-recieve", message.msg);
    }
  });
});
