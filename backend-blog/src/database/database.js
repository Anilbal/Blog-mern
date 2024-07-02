import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`MongoDB connected !! DB host :${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDb error",error)
    }
}

export default connectDB