import { redis } from "../lib/redis.js"
export const cacheMiddleware = (req,res,next) => {
    const cacheKey = req.originalUrl
    redis.get(cacheKey,(err,data) => {
        if(err) throw err

        if(data !== null){
            console.log('cache hit')
            return res.status(200).json({message:'blogs fetched from cache',allBlogs:JSON.parse(data)})

        }else{
            next()
        }
    })
} 