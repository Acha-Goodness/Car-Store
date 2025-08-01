const { imageUploadUtill } = require("../../Helpers/cloudinary");
const Product = require("../../Models/productModel");
const AppError = require("../../Utils/appError");
const catchAsync = require("../../Utils/catchAsync");


// PRODUCT IMAGE UPLOAD 
exports.handleImageUpload = catchAsync( async (req, res, next) => {
    try{
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        const url = `data:${req.file.mimetype};base64,${b64}`;
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
exports.addProduct = catchAsync( async(req, res, next) => {
    try{
        const { image, title, description, category, brand, price, salePrice, totalStock } = req.body;

        const newProduct = new Product({
            image, title, description, category, brand, price, salePrice, totalStock 
        })

        await newProduct.save();
        res.status(201).json({
            success: true,
            data: newProduct,
            message: "Product successfully created"
        });
    }catch(err){
        console.log(err)
        return next(new AppError("Error Occured", 400, res))
    }
})

// FETCH ALL PRODUCTS
exports.fetchProducts = catchAsync( async (req, res, next) => {
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
        const { id } = req.params;
        const { image, title, description, category, brand, price, salePrice, totalStock } = req.body;

        let findProduct = await Product.findById(id);
        if(!findProduct) return next(new AppError("Product not found", 404, res))

        findProduct.image = image || findProduct.image;
        findProduct.title = title || findProduct.title;
        findProduct.description = description || findProduct.description;
        findProduct.category = category || findProduct.category;
        findProduct.brand = brand || findProduct.brand;
        findProduct.price = price === "" ? 0 : price || findProduct.price;
        findProduct.salePrice = salePrice === "" ? 0 : salePrice || findProduct.salePrice;
        findProduct.totalStock = totalStock || findProduct.totalStock;

        await findProduct.save();

        res.status(200).json({
            success: true,
            message: "Product updated sucessfully"
        })

    }catch(err){
        console.log(err);
        return next(new AppError("Error Occured", 400, res))
    }
})

// DELETE A PRODUCT
exports.deleteProduct = catchAsync( async (req, res, next) => {
    try{
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product) return next( new AppError("Product no found", 404, res))
        
        res.status(200).json({
            success : true,
            message : "Product deleted successfully"
        })
    }catch(err){
        console.log(err)
        return next(new AppError("Error Occured", 400, res))
    }
})