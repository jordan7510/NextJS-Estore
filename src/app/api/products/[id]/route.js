import { connectDB } from "@/dbConfig/dbConfig";
import Product from "@/models/productsModel";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const {id} = await params
    try {
        await connectDB();
        const product = await Product.findOne({id:id});
        if (!product) {
            return NextResponse.json({ message: "No Products found." }, { status: 404 })
        }
        return NextResponse.json({ success: true, message: "Product found successfully.", data: product }, { status: 200 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({success:false, message:"Error getting product"},{status:500 || "Internal server error."})
    }

}