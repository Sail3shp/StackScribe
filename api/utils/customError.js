class AppError extends Error{
    constructor(statusCode,message){
        super(message) 

        this.statusCode = statusCode
        this.message = message
        this.status = statusCode >=400 && statusCode <500? 'fail':'error'

        console.log(this.statusCode,this.status)
        this.isOperational = true

        Error.captureStackTrace(this,this.constructor)
    }

}
export default AppError