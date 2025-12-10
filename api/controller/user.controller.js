import User from "../model/user.model.js"
import bcrypt from 'bcryptjs'
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js"
export const register = async(req,res) => {
    const {username,email,password} = req.body

    if(!username || !email || !password ){
        return res.status(400).json({message:'please fill in the details'})
    }
    try {
        const user = await User.findOne({email})
        console.log(user)
        if(user){
            return res.status(404).json({message:'User already exists',user})
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = await User.create({
            email,
            name:username,
            password:hashedPassword
        })

        res.status(201).json({message:'Registeration completed successfully'})

    } catch (error) {
        res.status(500).json({message:'Internal Server Error'})
        console.log('error in register controller',error)
    }
}

export const login = async(req,res) => {
    const {email,password} = req.body
    if(!email || !password) {
        return res.status(401).json({message:'Please fill in the details'})
    }
    try {
        const user = await User.findOne({email}).select(-password)
        if(!user){
            return res.status(400).json({message:'Invalid email or password'})
        }
        const matchedPassword = await bcrypt.compare(password,user.password)
        if(!matchedPassword) {
            return res.status(400).json({message:"Invalid email or password"})
        }
        const accessToken = generateTokenAndSetCookie(user._id)
        res
        .cookie('accessToken',accessToken,{
        httpOnly: true,
        sameSite: "strict",
        maxAge: 15*60*1000,
        })
        .status(200)
        .json({message:"Logged in successfully",user})

    } catch (error) {
        res.status(500).json({message:'Internal Server Error'})
        console.log('error in register controller',error) 
    }
}