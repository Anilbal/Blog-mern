import mongoose from "mongoose";

const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    comments:[
        { 
            comment:{
                type:String
            },
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"User"
            }
        }
    ]
},{timestamps:true})

export const postModel=mongoose.model("Post",postSchema)