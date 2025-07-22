const catchAsync = require("../Utils/catchAsync");
const crypto = require("crypto");
const AppError = require("../Utils/appError");
const { sendJWTToken } = require("../Utils/appFeatures")

exports.verifyOTP = Model => catchAsync( async (req, res, next) => {
    const hashedOtp = crypto.createHash("sha256").update(req.body.otp).digest("hex");
    const doc = await Model.findOne({$and: [{otpToken: hashedOtp}, {otpExpires: {$gt: new Date()}}]});

    if(!doc) return next(new AppError("OTP is invalid or has expired", 400));

    doc.active = true;
    doc.otpToken = undefined;
    doc.otpExpires = undefined;
    await doc.save({ validateBeforeSave: false})

    sendJWTToken(doc, 201, res);
});