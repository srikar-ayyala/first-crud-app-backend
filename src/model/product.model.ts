import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Enter product name"],
        },
        quantity: {
            type: Number,
            required: [true, "Enter product quantity"],
            default: 0,
        },
        price: {
            type: Number,
            required: [true, "Enter product price"],
            default: 0,
        },
        image: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

export const Product = mongoose.model("Product", ProductSchema);