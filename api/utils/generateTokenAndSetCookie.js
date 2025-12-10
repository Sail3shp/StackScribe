import jwt from 'jsonwebtoken'

export const generateTokenAndSetCookie = (userId) => {
    const accessToken = jwt.sign({userId},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'15m'})
    console.log(accessToken)
    return accessToken
    /*res.Cookie("accesstoken",accessToken,{
        httpOnly: true,
        sameSite: "strict",
        maxAge: 15*60*1000,
    })
        */

} 