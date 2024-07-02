import mongoose from "mongoose"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userScheme=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:Number,
        default:0
    },
    isVerified:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

//hasing middleware
userScheme.pre("save",async function(next){
    if(this.isModified("password")){
         this.password= await bcrypt.hash(this.password,10)
         next()
    }else{
        return next()
    }
})

//method for comparing password
userScheme.methods.isPassWordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}

//method for generating access token
userSchema.methods.generatingAccessToken=function(){
    return jwt.sign({
        _id:this._id,
        username:this.username,
        email:this.email,
        fullName:this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET_KEY,
    {expiresIn:process.env.ACCESS_TOKEN_EXPIRY})
}

//method for generating Refresh token
userSchema.methods.generatingRefreshToken=async function(){
    return jwt.sign({
        _id:this._id,
    },
    process.env.REFRESH_TOKEN_SECRET_KEY,
    {expiresIn:process.env.REFRESH_TOKEN_EXPIRY})
}
export const userModel=mongoose.model("User",userScheme)