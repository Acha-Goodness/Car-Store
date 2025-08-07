const Cart = require("../../Models/cartModel");
const Product = require("../../Models/productModel");
const AppError = require("../../Utils/appError");
const catchAsync = require("../../Utils/catchAsync");


exports.addToCart = catchAsync(async (req, res, next) => {
    try{
        const { userId, productId, quantity } = req.body;

        if(!userId || !productId || quantity <= 0){
            return next(new AppError("Invalid data provided!", 400,res))
        } 

        const product = await Product.findById(productId);
        if(!product) return next(new AppError("Product not found", 404, res));

        let cart = Cart.findOne({ userId });
        if(!cart) cart = new Cart({userId, items : []});

        const findCurrentProductIndex = cart.items.findIndex(item => item.productId.toString() === productId);
        if(findCurrentProductIndex === -1) cart.items.push({ productId, quantity})
        else cart.items[findCurrentProductIndex].quantity += quantity;
    
        await cart.save();
        res.status(200).json({
            success: true,
            data: cart
        })
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