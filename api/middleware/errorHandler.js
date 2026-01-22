import AppError from "../utils/customError.js"

const castErroHandler = (err)=> {
    const msg = `Invalid value for ${err.path} : ${err.value}`
    return new AppError(400,msg)
} 

const prodErrors = (res,err) => {
    if(err.isOperational){
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        })
    }else {
        res.status(500).json({
            status:'error',
            message: 'something went wrong please try again later'
        })
    }
}

export const errorHandler = (err,req,res,next) => {
    console.log(err.name)
    const status = err.statusCode || 500
    const error = err.message || 'Internal Server Error'
    /*if(err.name === 'CastError'){
        err = castErroHandler(err)
    }
    prodErrors(res,err)
    */
    res.status(status).json({
        status:'error',
        message:error 
    })
    
}