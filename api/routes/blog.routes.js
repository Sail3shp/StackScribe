import express from 'express'
import verifyUser from '../middleware/verifyUser.js'
import { createBlog,updateBlog,getBlogs, deleteBlog, likeBlog, unLikeBlog } from '../controller/blog.controller.js'

const router = express.Router()

router.post('/',verifyUser,createBlog)
router.patch('/:blogId',verifyUser,updateBlog)
router.delete('/:blogId',verifyUser,deleteBlog)

router.get('/',getBlogs)
router.patch('/like/:blogId',verifyUser,likeBlog)
router.patch('/unlike/:blogId',verifyUser,unLikeBlog)
export default router