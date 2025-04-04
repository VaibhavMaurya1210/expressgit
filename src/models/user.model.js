import mongoose, {Schema} from "mongoose";
import { JsonWebTokenError } from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userSchema = new Schema
(
    {
        username:
        {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            inndex: true,
        },
        email:
        {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullName:
        {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar:
        {
            type: String,       // Cloudinary url
            required: true
        },
        coverImages:
        {
            types: String       // Cloundinary url
        },
        watchHistory:
        [
            {
                type: Schema.Types.ObjectId,
                ref: "Vedio",
            }
        ],
        password: 
        {
            type: String,
            required: [true, "Pawword is require"],
        },
        refreshToken:
        {
            types: String,
            
        },

    },
    {
        timestamps:true
    }
)

    userSchema.pre("save",async function (next){
        if(!this.ismodified("password")) return next()
        this.password = bcrypt.hash(this.password, 10)
        next()
    })

    userSchema.methods.isPasswordCorrect = async function (password) {
        return await bcrypt.compare(password, this.password)
        
    }
    userSchema.methods.generateRefreshToken = async function(){
       return jwt.sign(
            {
                _id: this._id,
                username: this.username,
                email: this.email,
                fullName: this.fullName
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expirseIn: process.env.ACCESS_TOKEN_EXPIRY
            }
        )
    }
    userSchema.methods.generateAccessToken = async function(){
        return jwt.sign(
            {
                _id: this._id
            },
            process.env.REFRESH_TOKEN_SECRET,
            {
                expirseIn: process.env.REFRESH_TOKEN_EXPIRY
            }
        )
    }

export const User = mongoose.model("User",userSchema)