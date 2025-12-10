import jwt from 'jsonwebtoken'
function verifyUser(req,res,next){
    try {
        const accessToken = req.cookies.accessToken
        const decoded = jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET)
        req.user = decoded
        console.log(decoded)
        next()
    } catch (error) {
        console.log(error.message)
        return res.status(401).json({ message: "Unauthorized- Invalid access token" })
    } 

}

export default verifyUser