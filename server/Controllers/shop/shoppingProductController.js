const AppError = require("../../Utils/appError");
const catchAsync = require("../../Utils/catchAsync");
const Product = require("../../Models/productModel");

exports.getFilterProducts = catchAsync (async(req, res, next) => {
    try{
        const { category = [], brand = [], sortBy="price-lowtohigh" } = req.query;
        let filters = {};
        
        if(category.length){
            filters.category = {$in: category.split(",")}
        }

        if(brand.length){
            filters.brand = {$in: brand.split(",")}
        }

        let sort = {}

        switch (sortBy){
            case "price-lowtohigh":
                sort.price = 1
                
            break;
                case "price-hightolow":
                sort.price = -1

            break;
                case "title-atoz":
                sort.title = 1

            break;
                case "title-ztoa":
                sort.title = -1

            break;

            default:
                sort.price = 1
                break;
        }

        const products = await Product.find(filters).sort(sort);
        res.status(200).json({
            success: true,
            data: products 
        })
    }catch(e){
        console.log(e);
        return next(new AppError("Some error occured", 500, res))
    }
});

exports.getProductDetails = catchAsync (async(req, res, next) => {
    try{
        const { id } = req.params;
        const product = await Product.findById(id);

        if(!product) return next(new AppError("Product not found", 400, res))

        res.status(200).json({
            success: true,
            data: product,
        });
    }catch(e){
        console.log(e)
        return next(new AppError("Some error occured", 500, res))
    }
})