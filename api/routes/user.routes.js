import express from 'express'
import verifyUser from '../middleware/verifyUser.js'
import { register,login,logout,deleteUser, updateUser } from '../controller/user.controller.js'
const router = express.Router()
//auth flows
router.post('/login',login)
router.post('/register',register)
router.post('/logout',logout)
//user flows
router.delete('/:userId',verifyUser,deleteUser)
router.put('/:userId',verifyUser,updateUser)
export default router