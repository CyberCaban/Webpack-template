const express = require("express");
const router = express.Router();
const {
	register,
	login,
	getAllUsers,
	logout,
	getAllTracks,
	refresh,
} = require("../controllers/authController");
const { roleCheck } = require("../middleware/auth");
const { auth } = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/test", getAllTracks);
router.get("/refresh", refresh);
router.get("/users", auth, getAllUsers);

module.exports = router;
