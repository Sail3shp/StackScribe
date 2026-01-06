import express from 'express'
import verifyUser from '../middleware/verifyUser.js'
import { cacheMiddleware } from '../middleware/cacheReq.js'
import { createBlog,updateBlog,getBlogs, deleteBlog, likeBlog, unLikeBlog,getBlogsById, searchBlogs, getBlogsByAuthor } from '../controller/blog.controller.js'

const router = express.Router()

router.post('/',verifyUser,createBlog)
router.patch('/:blogId',verifyUser,updateBlog)
router.delete('/:blogId',verifyUser,deleteBlog)

router.get('/',cacheMiddleware,getBlogs)
router.get('/search',searchBlogs)
router.get('/:authorId',getBlogsByAuthor)
router.get('/:blogId',getBlogsById)
router.post('/like/:blogId',verifyUser,likeBlog)
router.delete('/unlike/:blogId',verifyUser,unLikeBlog)
export default router