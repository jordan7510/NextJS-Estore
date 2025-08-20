import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    id:{
        type:Number,
        unique:true
    },
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
        rate: Number,
        count: Number
    }

}, { timstamps: true });

const Product = mongoose.models.Product || mongoose.model("Product", productsSchema);

export default Product;