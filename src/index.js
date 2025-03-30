import mongoose  from "mongoose";

import dotenv from "dotenv"
import connectDb from "./db/index.js";

dotenv.config({
    path:   './env'
})

connectDb();


























// import express from "express";
// import { DB_NAME } from "./constant";
// const app = express();

// ( async () =>{
//     try {
//        await app.on(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error) =>{
//             console.log('ERROR', error);
//             throw error;
//         } )
//         app.listen(process.env.PORT, () => {
//             console.log(`App is Listen on the Port ${process.env.PORT}`)
//         })

//     } catch (error) {
//         console.log("ERROR",error)
//         throw error
//     }
// })









/*

import express from "express";
const app = express()


( async () => {
    try {
         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
            app.on("error", (error) => {
                console.log("ERR",error);
                throw error
            })
            app.listen(process.env.PORT, () =>{
                console.log(`App is listen on the Port ${process.env.PORT}`)
            })
    }catch (error) {
        console.log("ERROR", error)
        throw error
    }
})

*/