import jwt from 'jsonwebtoken'
function verifyUser(req,res,next){
    try {
        const accessToken = req.cookies.accessToken
        if(!accessToken){
            return res.status(400).json({message:'Please login first'})
        }
        const decoded = jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        console.log(error)
        return res.status(401).json({ message: "Unauthorized- Invalid access token" })
    } 

}

export default verifyUser