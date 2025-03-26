import mongoose from "mongoose"

import mongoose from "mongoose"

const orderItemSchema = mongoose.Schema
(
    {
        product:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Product",
        },
        quantity:
        {
            type : Number,
            required: true
        }
    },
    {timestamps:true}
)

const orderSchema = mongoose.Schema
(
    {
        orderprice:
        {
            type: Number,
            required: true,
        },
        customer:
        {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "UserData"
        }
    },
    {timestamps:true}
)

export const Order = mongoose.model("Order",orderSchema)