/*import AppError from "../utils/customError.js";

const devErrors = (res,error) => {
    res.status(error.status).json({
        status:error.statusCode,
        message:error.message,
        stackTrace: error.stack,
        error:error
    })
}

const prodErrors = (res,error) => {
    if(error.isOperational){
        res.status(error.statusCode).json({
            status:error.statusCode,
            message:error.message
        })
    }else{
        res.status(500).json({
            status:'error',
            message:'Something went wrong! Please try again later'
        })
    }
}
export const errorHandler = (err,req,res,next) => {
    const status = err.statusCode || 500
    const error = err.message || 'Internal Server Error'
    console.log(status,error)
    if(process.env.NODE_ENV === 'development'){
        devErrors(res,err)
    }else if(process.env.NODE_ENV === 'production'){
        prodErrors(res,err)

    }
    res.status(status).json({
        status:'error',
        message:error 
    })
}*/