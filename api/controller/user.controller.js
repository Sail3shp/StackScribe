import User from "../model/user.model.js"
import bcrypt from 'bcryptjs'
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js"
export const register = async (req, res) => {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'please fill in the details' })
    }
    try {
        const user = await User.findOne({ email })
        console.log(user)
        if (user) {
            return res.status(404).json({ message: 'User already exists', user })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({
            email,
            name: username,
            password: hashedPassword
        })
        generateTokenAndSetCookie(newUser._id, res)

        res.status(201).json({
            user: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }, message: 'Registeration completed successfully'
        })

    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
        console.log('error in register controller', error)
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(401).json({ message: 'Please fill in the details' })
    }
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' })
        }
        const matchedPassword = await bcrypt.compare(password, user.password)
        if (!matchedPassword) {
            return res.status(400).json({ message: "Invalid email or password" })
        }
        generateTokenAndSetCookie(user._id, res)
        res.status(200)
            .json({
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                },
                message: "Logged in successfully"
            }
            )

    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
        console.log('error in register controller', error)
    }
}

export const logout = async (req, res) => {
    try {
        const accessToken = req.cookies?.accessToken
        if (!accessToken) {
            return res.status(404).json({ message: 'Please login first' })
        }
        res.clearCookie("accessToken")
        res.status(200).json({ message: 'logged out successfully' })
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
        console.log('error in logout controller', error)
    }

    //res.clearCookie('accessToken')
    //res.status(200).json({message:'Logged out '})
}


export const deleteUser = async(req,res) => {
    try {
        console.log(req.user.userId)
        if(req.params.userId !== req.user.userId){
            return res.status(400).json({message:'You can only delete your account'})
        }
        await User.findByIdAndDelete(req.params.userId)
        res.status(200).json({message:'your account was deleted'})
    } catch (error) {
       res.status(500).json({ message: 'Internal Server Error',error })
        console.log('error in delete controller', error)
    }
}

export const updateUser = async(req,res) => {
    try {
        if(req.params.userId !== req.user.userId) {
            return res.status(401).json({message:'unauthorized'})
        }
        const {username,email,password} = req.body
        const hashedPassword = await bcrypt.hash(password,10)
        const updatedUser = await User.findByIdAndUpdate(req.params.userId,{
            name:username,
            email,
            password:hashedPassword
        },
    {new:true}).select('-password')
    res.status(201).json({message:'User updated successfully',updatedUser})
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error',error })
        console.log('error in update controller', error)
    }
}