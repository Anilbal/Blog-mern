import mongoose from "mongoose";

const categoryScheme=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
},{timestamps:true})

export const categoryModel=mongoose.model("Category",categoryScheme)