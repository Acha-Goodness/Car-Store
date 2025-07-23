const catchAsync = require("../Utils/catchAsync");
const crypto = require("crypto");
const AppError = require("../Utils/appError");
const { sendJWTToken, correctPassword, createOTP } = require("../Utils/appFeatures");
const Email = require("../Utils/email");

exports.verifyOTP = Model => catchAsync( async (req, res, next) => {
    
    const hashedOtp = crypto.createHash("sha256").update(req.body.otp).digest("hex");
    const doc = await Model.findOne({$and: [{otpToken: hashedOtp}, {otpExpires: {$gt: new Date()}}]});

    if(!doc) return next(new AppError("OTP is invalid or has expired", 401, res)) 
    
    doc.active = true;
    doc.otpToken = undefined;
    doc.otpExpires = undefined;
    await doc.save({ validateBeforeSave: false})

    sendJWTToken(doc, 201, res);
});

exports.login = Model => catchAsync( async (req, res, next) => {
    const { email, password } = req.body;

    // CHECK IF USER EXISTS AND PASSWORD IS CORRECT
    if(!email || !password) return next(new AppError("Please provide email and password", 401, res))

    const doc = await Model.findOne({email: email}).select("+password");
    if(!doc || !(await correctPassword(password, doc.password))){
        return next(new AppError("Incorrect email or password", 401, res))
    }

    // IF EVERYTHING IS OK, SEND TOKEN TO CLIENT
    sendJWTToken(doc, 201, res);
});

exports.forgotPassword = Model => catchAsync( async (req, res, next) => {
    // GET USER BASED ON USER EMAIL
    const doc = await Model.findOne({email: req.body.email});

    // CHECK IF USER EXIST
    if(!doc) return next(new AppError("There is no user with this email", 404, res))

    // GENERATE RESET TOKEN
    const resetToken = await createOTP(doc);
    await doc.save({ validateBeforeSave: false });
    
    // SEND GENERATED TOKEN TO USER EMAIL
    try{
        await new Email(doc, resetToken).sendPasswordResetEmail();

        res.status(200).json({
            status: "success",
            message: "Password reset token sent to email"
        })
    }catch (err) {
       doc.otpToken = undefined;
       doc.otpExpires = undefined;
       await doc.save({ validateBeforeSave: false });

       return next(new AppError("There was an error sending the email. Try again later!", 500, res))
    }
});