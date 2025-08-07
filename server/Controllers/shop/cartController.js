const Cart = require("../../Models/cartModel");
const Product = require("../../Models/productModel");
const AppError = require("../../Utils/appError");
const catchAsync = require("../../Utils/catchAsync");


exports.addToCart = catchAsync(async (req, res, next) => {
    try{
        
    }catch(err){
        console.log(err);
        return next(new AppError("Error", 500, res))
    }
})

exports.fetchCartItems = catchAsync(async (req, res, next) => {
    try{

    }catch(err){
        console.log(err);
        return next(new AppError("Error", 500, res))
    }
})

exports.updateCartItemQty = catchAsync(async (req, res, next) => {
    try{

    }catch(err){
        console.log(err);
        return next(new AppError("Error", 500, res))
    }
})

exports.deleteCartItem = catchAsync(async (req, res, next) => {
    try{

    }catch(err){
        console.log(err);
        return next(new AppError("Error", 500, res))
    }
})