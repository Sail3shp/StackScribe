import { redis } from "../lib/redis.js"
export const cacheMiddleware = async(req,res,next) => {
    if(redis.status !== "ready"){
        return next()
    }
    try {
        const cacheKey = req.originalUrl
        const data = await redis.get(cacheKey)
        if(data) {
            return res.status(200).json({message:'blogs fetched from cache',allBlogs:JSON.parse(data)})
        }
        next()
    } catch (error) {
        console.error("cache failed",error.message)
        next()
        
    }
    
} 