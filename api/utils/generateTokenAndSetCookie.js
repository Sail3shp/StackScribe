import jwt from 'jsonwebtoken'

export const generateTokenAndSetCookie = (userId,res) => {
    const accessToken = jwt.sign({userId},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'15m'})
    console.log(accessToken)
    res.cookie("accessToken",accessToken,{
        httpOnly: true,
        sameSite: "strict",
        maxAge: 15*60*1000,
    })
} 