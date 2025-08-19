import { NextResponse } from "next/server"

export const successResponseHandler = (data,message) => {
    return NextResponse.json({success:true, data:data, message:message,  }, {status:200})
}

