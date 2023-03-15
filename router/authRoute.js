const {
    login,
    register,
    getAllUsers,
    getOneUser,
    logOut,
  } = require("../controller/AuthCtrl");
  
  const router = require("express").Router();
  
  router.post("/login", login);
  router.post("/register", register);
  router.get("/allusers/", getAllUsers);
  router.get("/:id", getOneUser)
  router.get("/logout/:id", logOut);
  
  module.exports = router;
  