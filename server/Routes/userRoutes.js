const express = require("express");
const { userSignUp, userVerifyOTP, userLogin } = require("../Controllers/userController");



const router = express.Router();

router.post("/userSignUp", userSignUp);
router.post("/userVerifyOTP", userVerifyOTP);
router.post("/userLogin", userLogin);

module.exports = router;