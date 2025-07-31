const AppError = require("../../Utils/appError");
const catchAsync = require("../../Utils/catchAsync");

exports.handleImageUpload = catchAsync( async (req, res, next) => {
    try{
        const b64 = Buffer.from(req.file.buffer).toString("base64");
    }catch(err){
        console.log(err);
        return next(new AppError("Error Occured", 400, res));
    }
})