import express from 'express'
import verifyUser from '../middleware/verifyUser.js'
import { cacheMiddleware } from '../middleware/cacheReq.js'
import { createBlog,updateBlog,getBlogs, deleteBlog, likeBlog, unLikeBlog,getBlogsById,getBlogsByAuthor } from '../controller/blog.controller.js'
import { validate } from '../middleware/validateMiddleware.js'
import { getBlogSchema } from '../utils/validationSchema.js'

const router = express.Router()

router.post('/',verifyUser,createBlog)
router.patch('/:blogId',verifyUser,updateBlog)
router.delete('/:blogId',verifyUser,deleteBlog)

router.get('/',cacheMiddleware,validate(getBlogSchema),getBlogs)
router.get('/author/:authorId',getBlogsByAuthor)
router.get('/:blogId',getBlogsById)
router.post('/like/:blogId',verifyUser,likeBlog)
router.delete('/unlike/:blogId',verifyUser,unLikeBlog)
export default router