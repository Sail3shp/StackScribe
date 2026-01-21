import Redis from 'ioredis'
import dotenv from 'dotenv'

dotenv.config()
export const redis = new Redis(process.env.UPSTASH_REDIS_URI,{
    tls:{},
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
    retryStrategy(times){
        return Math.min(times * 100, 2000)
    }
})
//to be safe from unwanted errors and connection termination
redis.on("error",(err) => {
    console.error("redis error:",err.message)
})
redis.on("connect",()=>{
    console.log("Redis connected")
})
redis.on("reconnecting",() => {
    console.log("Redis reconnecting...")
})
