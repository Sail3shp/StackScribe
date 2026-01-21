import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/dbconfig.js'
import userRouter from './routes/user.routes.js'
import blogRouter from './routes/blog.routes.js'
import cookieParser from 'cookie-parser'
import { errorHandler } from './middleware/errorHandler.js'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(cors(
    {
    origin:'http://localhost:5173',
    credentials:true
    }
))
const PORT = process.env.PORT || 9999
app.use(express.json())
app.use(cookieParser())

app.use('/api/v1/auth',userRouter)
app.use('/api/v1/blog',blogRouter)
app.use(errorHandler)

connectDB().then(() => {
    app.listen(PORT,() => {
    console.log("Server Started on port",PORT)
})
})