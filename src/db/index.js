import mongoose  from "mongoose";
import {DB_NAME} from  "../constant.js"



const connectDb = async() =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Connection successfullt  ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log("Connection error Faild",error)
        process.exit(1)
    }
}




























export default connectDb