const express = require("express");
const { userSignUp } = require("../Controllers/userController");



const router = express.Router();

router.post("/userSignUp", userSignUp);

module.exports = router;