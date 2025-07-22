const User = require("../Models/userModel");
const AppError = require("../Utils/appError");
const { createOTP } = require("../Utils/appFeatures");
const catchAsync = require("../Utils/catchAsync");
const Email = require("../Utils/email");
const { verifyOTP } = require("./handlerFactory");

exports.userSignUp = catchAsync( async (req, res, next) => {
    const { userName, email, password, confirmPassword } = req.body;

    const checkUser = await User.findOne({ email });
    if(checkUser) return res.json({
        status: "false",
        message: "This email has already been used, Please use a different email"
    });

    const newUser = await User.create({
        name : userName, 
        email, 
        password, 
        passwordConfirm : confirmPassword
    });

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
        return next(new AppError("Something went wrong", err, 500));
    }
});

exports.userVerifyOTP = verifyOTP(User);