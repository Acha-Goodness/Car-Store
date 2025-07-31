const { imageUploadUtill } = require("../../Helpers/cloudinary");
const AppError = require("../../Utils/appError");
const catchAsync = require("../../Utils/catchAsync");

exports.handleImageUpload = catchAsync( async (req, res, next) => {
    try{
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        const url = "data:" + req.file.mimetype + ";base64" + b64;
        const result = await imageUploadUtill(url);
        res.status(200).json({
            status: true,
            result: result
        })
    }catch(err){
        console.log(err);
        return next(new AppError("Error Occured", 400, res));
    }
});