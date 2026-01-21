export const errorHandler = (err,req,res,next) => {
    console.log(err)
    const status = err.status || 500
    const error = err.message || 'Internal Server Error'
    res.status(status).json({
        status:'error',
        message:error 
    })
}