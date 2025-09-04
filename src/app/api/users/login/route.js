import User from "@/models/usersModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
    try {
        const reqBody = await req.json();
        const { email, password } = reqBody;
        //Find existing user
        const existing = await User.findOne({ email });
        if (!existing) return NextResponse.json({ error: "User do not exist." }, { status: 404 })
        // check password
        const matchPassword = await bcrypt.compare(password, existing.password)
        if (!matchPassword) return NextResponse.json({ error: "Invalid Credentials." }, { status: 400 })
        //create token data
        const tokenData = {
            id: existing._id,
            userName: existing.userName,
            email: existing.email
        };
        //Create token
        const jwtToken = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: "1d" });
        //create response
        const response = NextResponse.json({
            success: true,
            message: "Login success."
        });
        // Set the cookies in the response
        response.cookies.set(
            "token",
            jwtToken,
            {
                httpOnly: true
            }
        );
        return response
    } catch (error) {
        console.log("error", error)
        return NextResponse.json({ error: error.message }, { status: 500 || "Internal server error" })
    }
}