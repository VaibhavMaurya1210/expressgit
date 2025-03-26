import mongoose from "mongoose"

const categorySchema = new mongoose.categorySchema({},{timestamps:true});

export const Category = mongoose.model("Category", categorySchema)