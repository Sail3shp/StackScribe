import express from 'express'
import verifyUser from '../middleware/verifyUser.js'
import { cacheMiddleware } from '../middleware/cacheReq.js'
import { createBlog,updateBlog,getBlogs, deleteBlog, likeBlog, unLikeBlog,getBlogsById,getBlogsByAuthor } from '../controller/blog.controller.js'
import { validate } from '../middleware/validateMiddleware.js'
import { getBlogSchema } from '../utils/validationSchema.js'
import { limiter,authLimiter } from '../utils/rateLimiter.js'

const router = express.Router()

router.post('/',verifyUser,authLimiter,createBlog)
router.patch('/:blogId',verifyUser,updateBlog)
router.delete('/:blogId',verifyUser,deleteBlog)

router.get('/',limiter,cacheMiddleware,validate(getBlogSchema),getBlogs)
router.get('/author/:authorId',getBlogsByAuthor)
router.get('/:blogId',limiter,getBlogsById)
router.post('/like/:blogId',verifyUser,likeBlog)
router.delete('/unlike/:blogId',verifyUser,unLikeBlog)
export default router