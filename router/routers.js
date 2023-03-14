const routers = require("express").Router();

router.use("/auth", require("./authRoute"));

module.exports = routers