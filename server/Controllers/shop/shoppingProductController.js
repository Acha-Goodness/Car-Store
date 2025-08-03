const AppError = require("../../Utils/appError");

const getFilterProducts = async(req, res, next) => {
    try{

    }catch(e){
        console.log(e);
        return next(new AppError("Some error occured",500, res))
    }
} 