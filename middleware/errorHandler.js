const errorHandler = (err , req , res , next) =>{

    const statusCode = res.statusCode ? res.statusCode : 500;
    res.json({ title : "Not Found!" , message : err.message  , stackTrace : err.stackTrace})
    
};

module.exports = errorHandler;