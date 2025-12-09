import User from "../model/user.model.js"
import bcrypt from 'bcryptjs'
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