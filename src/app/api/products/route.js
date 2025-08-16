import Product from "@/models/productsModel.js";
import { connection } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

connection();
export const GET = async(request)=>{
    try {
         const product = await Product.find();
         return NextResponse.json({message:"Found product",success:true, data:product})
    } catch (error) {
        console.log(error);
        return NextResponse.json({error: error.message}, {status:500}) 
    }
}