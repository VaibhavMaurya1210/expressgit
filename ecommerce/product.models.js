import mongoose from "mongoose"

const productSchema = mongoose.Schema
( 
    {
        description:
        {
            type: String,
            required: true,
        },
        name:
        {
            type: String,
            required:true,
        },
        productImage:
        {
            type : String,
        },
        price:
        {
            type: Number,
            default: 0,
        },
        stock:
        {
            type: Number,
            default: 0,
            required: true,
        },
        category:
        {
            type: [mongoose.Schema.Types.ObjectID],
            ref: "Category"
        }
    }
    ,{timestamps:true}

)

export const Product = mongoose.model("Product",productSchema)