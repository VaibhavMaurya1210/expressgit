import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express()

app.use((cors({
    origin:process.env.CORS_ORIGN,
    credentials:true
})))

app.use(express.json({limit:"22kb"}))
app.use(express.urlencoded({extended:true, limit:"22kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// import routers
import userRouter from "./routes/user.routers.js";

// routes declaration
app.use("/api/v1/users",userRouter)

// http://localhost:6000/api/v1/users/register

export {app}