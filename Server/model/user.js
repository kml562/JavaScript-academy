import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

dotenv.config()
const { JWT_SECRET,JWT_EXPIRY } = process.env;

const {
    Schema,
    model
} = mongoose


const userSchema = new Schema({
    name : {
        type : String,
        required : [true, 'Please enter your full name'],
        maxLength : [40, 'Name should be less than 40 characters'],
    },

    email : {
        type : String,
        required : [true, 'Please enter your email address'],
        validators : [validator.isEmail, "Please enter email in correct format"],
        unique : true,
    },

    password : {
        type: String,
        required : [true, 'Please enter your password'],
        minLength : [7,'Password length should be greater than 7 characters'],
        select : false,        
    },

    socialmedia : {
        type : String,
    },

}, {timestamps: true})



const {methods} = userSchema

//HOOKS - saving encrypt password before save -> Pre and post lifecycle  mongoose
userSchema.pre('save', async function(next){
    //now function will run only when password is modified
    if(!this.isModified('password')) return next
    this.password = await bcrypt.hash(this.password,10)
})


//METHODS
//Validate the password that user has given
methods.isValidatedPassword = async function(userSendPassword){
    return await bcrypt.compare(userSendPassword, this.password)
}

// create and return JWT token method
methods.getJwtToken = function(){
    return jwt.sign({id : this._id}, JWT_SECRET,{
        expiresIn : JWT_EXPIRY
    })
}


const User = model("User", userSchema)
export default User