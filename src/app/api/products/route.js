import Product from "@/models/productsModel.js";
import { connectDB } from "@/dbConfig/dbConfig";
import { successResponseHandler } from "@/utils/successResponseHandler";
import { errorResponseHandler } from "@/utils/errorResponseHandler";
import { NextResponse } from "next/server";


export const GET = async () => {
    try {
        connectDB();
        const product = await Product.find();
        if (!product || product.length === 0) {
            return errorResponseHandler(new Error("No products found.", 404))
        }
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
        console.log("id", id);
        //Check id product already exists
        const existingProduct = await Product.findOne({ id });
        console.log("existingProduct", existingProduct);
        if (!existingProduct) {
            //  Create new product
            const newProduct = new Product(reqBody)
            //Save new product to Database
            const savedProduct = await newProduct.save()
            return NextResponse.json({ success: true, message: "Product created successfully.", savedProduct }, { status: 201 })
        }
        console.log("Product already exists.")
        return NextResponse.json({ error: "Product already exists" }, { status: 400 })
    } catch (error) {
        return NextResponse.json({ success: false, message: "Error creating product." }, { status: 500 || "Internal server error." })
    }
}