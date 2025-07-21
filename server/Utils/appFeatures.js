const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.createOTP = async ( operator ) => {
    const OTP = crypto.randomBytes(2).toString("hex");
    operator.otpToken = crypto.createHash("sha256").update(OTP).digest("hex");

    operator.otpExpires = Date.now() + 10 * 60 * 60;
    return OTP
};