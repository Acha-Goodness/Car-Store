const AppError = require("../../Utils/appError");

const getFilterProducts = async(req, res, next) => {
    try{
        const products = await product.find({});
        res.status(200).json({
            success: true,
            data: products
        })
    }catch(e){
        console.log(e);
        return next(new AppError("Some error occured",500, res))
    }
} 