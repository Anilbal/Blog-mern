import dotenv from "dotenv"
import connectDB from "./database/database.js"
import { app } from "./app.js"

dotenv.config()
const port=process.env.PORT || 8000

connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server started at http://localhost:${port}`)
    })
})
.catch((error)=>{
    console.log('MongoDB failed',error)
})