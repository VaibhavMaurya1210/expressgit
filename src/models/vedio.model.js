import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const vedioSchmea = new Schema
(
    {
        vedioFile:
        {
            type: String,               // Cloudinary url
            required: true
        },
        thumbnail:
        {
            type: String,                   // Cloudinary url
            required: true,
        },
        title:
        {
            type: String,
            required: true
        },
        description:
        {
            type: String,
            required: true,
        },
        duration:
        {
            type: Number,           //Cloudinary url
            required: true,         
        },
        format:
        {
            type: String,

        },
        uplodedBy:
        {
            type: String,
            required: true,
        },
        uplodedAt:
        {
            type: Date,
            default: Date.now
        },
        views:
        {
            type: Number,
            default: 0,
        },
        isPublished:
        {
            type: Boolean,
            default: true,
        },
        vedioOwner:
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }


    },
    {timestamps: true}
)
vedioSchmea.plugin(mongooseAggregatePaginate)

export const Vedio = mongoose.model("Vedio", vedioSchmea)