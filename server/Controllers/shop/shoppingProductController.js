const AppError = require("../../Utils/appError");
const catchAsync = require("../../Utils/catchAsync");
const Product = require("../../Models/productModel");

exports.getFilterProducts = catchAsync (async(req, res, next) => {
    try{
        const products = await Product.find({});
        res.status(200).json({
            success: true,
            data: products
        })
    }catch(e){
        console.log(e);
        return next(new AppError("Some error occured",500, res))
    }
});