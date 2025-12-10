import express from 'express'
import { register,login } from '../controller/user.controller.js'
const router = express.Router()
router.post('/login',login)
router.post('/register',register)
//router.post('/logout',logout)

//router.delete('/:userId',deleteUser)

export default router