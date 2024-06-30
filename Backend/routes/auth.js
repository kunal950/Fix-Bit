const {
  login,
  register,
  getAllUsers,
  setAvatar,
  logOut,
  getAlladmin,
} = require("../controller/userController");

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.get("/allusers/:id", getAllUsers);
router.get("/alladmin/:id", getAlladmin);
router.post("/setavatar/:id", setAvatar);
router.get("/logout/:id", logOut);

module.exports = router;