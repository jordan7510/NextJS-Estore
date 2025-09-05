const { NextResponse } = require("next/server")

export const GET = async(request)=>{
    try {
        const resposne = NextResponse.json({success:true,message:"Logout success."},{status:200})
        //empty the cookie
        resposne.cookies.set("token", "",{httpOnly:true})
        return resposne
    } catch (error) {
        console.error(error)
        return NextResponse.json({message:error.message},{status:500 || "internal server error"})
    }
}