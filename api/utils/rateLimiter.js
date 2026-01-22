import {rateLimit} from 'express-rate-limit'
//can create auth,createblog,
export const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: {
        error: 'Too manny requests try again later',
        retryAfter: '15 minutes'
    },
    standardHeaders: true,
    legacyHeaders:false
})

export const authLimiter = rateLimit({
    windowMs: 10 * 60 *1000,
    max:5,
    message:{
        error:'Too many authentication attempts',
        retryAfter: '10 minutes'
    },
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests: true,
})