const { imageUploadUtill } = require("../../Helpers/cloudinary");
const Product = require("../../Models/productModel");
const AppError = require("../../Utils/appError");
const catchAsync = require("../../Utils/catchAsync");


// PRODUCT IMAGE UPLOAD 
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

// ADD NEW PRODUCT 
exports.addProduct = catchAsync( async(rep, res, nest) => {
    try{
        const { image, title, description, category, brand, price, salePrice, totalStock } = req.body;

        const newProduct = new Product({
            image, title, description, category, brand, price, salePrice, totalStock 
        })

        await newProduct.save();
        res.status(201).json({
            success: true,
            data: newProduct
        });
    }catch(err){
        console.log(err)
        return next(new AppError("Error Occured", 400, res))
    }
})

// FETCH ALL PRODUCTS
exports.editProduct = catchAsync( async (req, res, next) => {
    try{
        const listOfProducts = await Product.find({});
        res.status(200).json({
            success: true,
            data: listOfProducts
        })
    }catch(err){
        console.log(err)
        return next(new AppError("Error Occured", 400, res))
    }

})


// EDIT A PRODUCT

exports.editProduct = catchAsync( async (req, res, next) => {
    try{

    }catch(err){
        console.log(err);
        return next(new AppError("Error Occured", 400, res))
    }
})

// DELETE A PRODUCT
exports.deleteProduct = catchAsync( async (req, res, next) => {
    try{

    }catch(err){
        console.log(err)
        return next(new AppError("Error Occured", 400, res))
    }
})