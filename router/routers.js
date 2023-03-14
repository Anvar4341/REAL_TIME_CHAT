const routers = require("express").Router();

routers.use("/auth", require("./authRoute"));
routers.use("/message", require("./MessageRoute"));

module.exports = routers