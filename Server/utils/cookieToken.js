export const cookieToken = async(res,user)=>{
    // generate JWT token for user
    const token = user.getJwtToken() // this return an JWT token from user model

    const options = {
        expires : new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly : true,
    }
    // This will send the cookie as response to frontend when user will login or signup
    res.status(200).cookie('token',token,options).json({
        success : true,
        token,
        user
    })
}