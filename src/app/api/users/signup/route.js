import { NextResponse } from "next/server";
import { connectDB } from "@/lib/dbConfig";
import User from "@/models/usersModel";
import bcrypt from "bcryptjs";
connectDB();

export async function POST(req) {
    try {
        const reqBody = await req.json();
        const { userName, email, password } = reqBody
        //Check existing user.
        const existing = await User.findOne({ email });
        if (existing) return NextResponse.json({ error: "User already exists." }, { status: 400 })
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        //create user
        const newUser = new User({ userName, email, password: hashedPassword });
        //save new user to database
        const savedUser = await newUser.save();
        return NextResponse.json({ success: true, savedUser, message: "Signup success" }, { status: 201 })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 || "Internal server error." })
    }
}