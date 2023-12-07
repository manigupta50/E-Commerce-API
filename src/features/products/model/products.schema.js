import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [1, "Name should be greater than 1 character."]
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required."],
        min: [0, "Quantity cannot be less than 0."]
    }
});

export const ProductsModel = mongoose.model('Products', productsSchema);