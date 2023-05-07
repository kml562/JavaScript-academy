import User from '../model/user.js'
import BigPromise from '../middleware/bigPromise.js'
import CustomError from '../utils/customError.js'
import { cookieToken } from '../utils/cookieToken.js'
import * as dotenv from 'dotenv'
dotenv.config()





export const signUp = BigPromise(async(req,res,next)=>{
    const { name, email, password} = req.body;

    if(!email || !name || !password ){
        return next(new CustomError('Name Email & Password are required fields', 400))
    }

    const user = await User.create({name,email,password})

    cookieToken(res,user)
})


export const login = BigPromise(async(req,res,next)=>{
    const { email, password } = req.body;

    if(!email || !password) return next(new CustomError('Please Provide Email & Password', 400))

    const user = await User.findOne({email}).select('+password')

    if(!user) return next(new CustomError('You are not registered', 400))

    const isUserValidated = user.isValidatedPassword(password)

    
    if(!isUserValidated) return next(new CustomError('Invailed Password', 400))

    cookieToken(res,user)
})


export const logout = BigPromise(async(req,res,next)=>{
    res.cookie('token',null,{
        expires : new Date(Date.now()),
        httpOnly : true
    })

    res.status(200).json({success:true, message : "Logout Success"})
})


export const getAllUsers = BigPromise(async(req,res,next)=>{
    const allUsers = await User.find()

    res.status(200).json({success:true, users : allUsers})
})


