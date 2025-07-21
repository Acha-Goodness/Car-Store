const User = require("../Models/userModel");
const catchAsync = require("../Utils/catchAsync");
const Email = require("../Utils/email");

exports.userSignUp = catchAsync( async (req, res, next) => {
    const newUser = await User.create(req.body)

    const OTPToken = await createOTP(newUser);
    await newUser.save({ validateBeforeSave: false });

    try{
        await new Email(newUser, OTPToken).sendOTPEmail();

        res.status(200).json({
            status:"success",
            message: "OTP sent to email"
        })
    }catch(err){
        newUser.otpToken = undefined;
        newUser.otpExpires = undefined;
        newUser.save({ validateBeforeSave: false });
        console.log(err);
    }
});