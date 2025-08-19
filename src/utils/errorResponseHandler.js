import { NextResponse } from "next/server"

export const errorResponseHandler = (error) => {
    return NextResponse.json({success:false,message:error.message || "Internal server error" }, {status:500})
}