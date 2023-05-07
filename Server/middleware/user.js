
import CustomError from '../utils/customError.js'


export const isLoggedIn = async(req,res,next)=>{
    const token = req.cookies.token || req.header("Authorization").replace("Bearer ", " ")


    if(!token) return next(new CustomError("Login first to access this page", 401))

    const decoded = jwt.verify(token, process.env.JWT_SECRET)


    const thisIsThatUser = await User.findById(decoded.id)

    // injucting new field(user) in req
    req.user = thisIsThatUser

    next()
}