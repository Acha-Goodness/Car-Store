const Cart = require("../../Models/cartModel");
const Product = require("../../Models/productModel");
const AppError = require("../../Utils/appError");
const catchAsync = require("../../Utils/catchAsync");


exports.addToCart = catchAsync(async (req, res, next) => {
    try{
        const { userId, productId, quantity } = req.body;
        if(!userId || !productId || quantity <= 0) return next(new AppError("Invalid data provided!", 400, res))

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
        const { userId } = req.params;
        if(userId) return next(new AppError("User Id is required", 400, res));

        const cart = await Cart.findOne({userId}).populate({
            path: "item.productId",
            select: "image title price salePrice"
        })

        if(!cart) return next(new AppError("Cart not found", 404, res))
        const validItems = cart.items.filter(productItem => productItem.productId);

        if(validItems.length < cart.items.length){
            cart.items = validItems
            await cart.save()
        }

        const populateCartItems = validItems.map(item => ({
            productId: item.productId._id,
            image: item.productId.image,
            title: item.productId.title,
            price: item.productId.price,
            salePrice: item.productId.salePrice,
            quantity: item.quantity
        }))

        res.status(200).json({
            success: true,
            data: {
                ...cart._doc,
                items: populateCartItems
            }
        })

    }catch(err){
        console.log(err);
        return next(new AppError("Error", 500, res))
    }
})

exports.updateCartItemQty = catchAsync(async (req, res, next) => {
    try{
        const { userId, productId, quantity } = req.body;

        if(!userId || !productId || quantity <= 0){
            return next(new AppError("Invalid data provided!", 400,res))
        } 

        const cart = await Cart.findOne({userId})
        if(!cart) return next(new AppError("Cart not found!", 404, res));

        const findCurrentProductIndex = cart.items.findIndex(item => item.productId.toString() === productId);

        if(findCurrentProductIndex === -1) return next(new AppError("Cart item not present", 404, res));

        cart.items[findCurrentProductIndex].quantity = quantity;
        await cart.save();

        await cart.populate({
            path: "items.productId",
            select: "image title price salePrice"
        })

        const populateCartItems = cart.items.map(item => ({
            productId: item.productId ? item.productId._id : null,
            image: item.productId ? item.productId.image : null,
            title: item.productId ? item.productId.title : "Product not found",
            price: item.productId ? item.productId.price : null,
            salePrice: item.productId ? item.productId.salePrice : null,
            quantity: item.quantity
        }));

        res.status(200).json({
            success: true,
            data: {
                ...cart._doc,
                items: populateCartItems,
            }
        })
        
    }catch(err){
        console.log(err);
        return next(new AppError("Error", 500, res))
    }
})

exports.deleteCartItem = catchAsync(async (req, res, next) => {
    try{
        const { userId, productId } = req.body;
        if(!userId || !productId ) return next(new AppError("Invalid data provided!", 400, res));

        const cart = await Cart.findOne({userId}).populate({
            path: "items.productId",
            select: "image title price salePrice"
        });

        if(!cart) return next(new AppError("cart not found", 404, res));
        cart.items = cart.items.filter( item => item.productId._id.toString() !== productId)

        await cart.save();

        await Cart.populate({
            path: "items.productId",
            select: "image title price salePrice"
        });

        const populateCartItems = cart.items.map(item => ({
            productId: item.productId ? item.productId._id : null,
            image: item.productId ? item.productId.image : null,
            title: item.productId ? item.productId.title : "Product not found",
            price: item.productId ? item.productId.price : null,
            salePrice: item.productId ? item.productId.salePrice : null,
            quantity: item.quantity
        }));

        res.status(200).json({
            success: true,
            data: {
                ...cart._doc,
                items: populateCartItems,
            }
        })

    }catch(err){
        console.log(err);
        return next(new AppError("Error", 500, res))
    }
})