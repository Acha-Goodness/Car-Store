const express = require("express");
const { userSignUp, userVerifyOTP } = require("../Controllers/userController");



const router = express.Router();

router.post("/userSignUp", userSignUp);
router.post("/userVerifyOTP", userVerifyOTP)

module.exports = router;