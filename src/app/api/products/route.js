import Product from "@/models/productsModel.js";
import { connectDB } from "@/lib/dbConfig";
import { successResponseHandler } from "@/utils/successResponseHandler";
import { errorResponseHandler } from "@/utils/errorResponseHandler";
import { NextResponse } from "next/server";
import redisClient from "@/lib/redis";

export const GET = async () => {
    try {
        //attempt to get products from redis first
        const cachedProducts = await redisClient.get("products");
        if (cachedProducts) {
            return successResponseHandler(JSON.parse(cachedProducts), "Products found successfully.")
        }
        connectDB();
        const product = await Product.find();
        if (!product || product.length === 0) {
            return errorResponseHandler(new Error("No products found.", 404))
        }
        //cache products to redis client
        await redisClient.set("products", JSON.stringify(product), "EX", 3600)
        return successResponseHandler(product, "Products found successfully.")
    } catch (error) {
        return errorResponseHandler(error)
    }
}

export const POST = async (req) => {
    try {
        connectDB();
        const reqBody = await req.json();
        const { id } = reqBody;
        //  Create new product
        const newProduct = new Product(reqBody)
        // Check if product already exists
        const existingProduct = await Product.findOne({ id });
        if (existingProduct) {
            console.log("Product already exists.")
            return NextResponse.json({ error: "Product already exists" }, { status: 400 })
        }
        //Save new product to Database
        const savedProduct = await newProduct.save()
        return NextResponse.json({ success: true, message: "Product created successfully.", savedProduct }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ success: false, message: "Error creating product." }, { status: 500 || "Internal server error." })
    }
}