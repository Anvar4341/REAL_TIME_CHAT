const { addMessage, getMessages } = require("../controller/MessageCtrl");
const router = require("express").Router();

router.post("/addmessage", addMessage);
router.post("/getmessage", getMessages);

module.exports = router;
