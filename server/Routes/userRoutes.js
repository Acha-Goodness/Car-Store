const express = require("express");
const { userSignUp, userVerifyOTP, userLogin, userForgetPassword } = require("../Controllers/userController");



const router = express.Router();

router.post("/userSignUp", userSignUp);
router.post("/userVerifyOTP", userVerifyOTP);
router.post("/userLogin", userLogin);
router.post("/userForgotPassword", userForgetPassword);

module.exports = router;