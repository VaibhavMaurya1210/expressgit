import mongoose from "mongoose"

const userSchema = new mongoose.Schema
(
    {
        user:
        {
            type:String,
            required:true,
            unique:true,
            lowercase:true,
        },
        email:
        {
            type:String,
            required:true,
            unique:true,
            lowercase:true,
        },
        password:
        {
            type: String,
            required: true,
            unique: true

        }
    }
);




export const UserData = mongoose.model("UserData",userSchema)