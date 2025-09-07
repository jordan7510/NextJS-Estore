import { getIdFromToken } from "@/lib/products";
import User from "@/models/usersModel";
import { NextResponse } from "next/server";

export default function GET(request) {
    try {
        const userId = getIdFromToken(request);
        const user = User.findOne({_id:userId}).select("-password")
        return NextResponse.json({message:"User found",success:true, data:user})
    } catch (error) {
        return NextResponse.json({message:error.message}, {status:400})
    }
}
