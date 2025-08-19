import { errorResponseHandler } from "@/utils/errorResponseHandler";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("Please add Mongodb URI in .env.")
}

export const connectDB = async () => {
    try {
        if(mongoose.connection.readyState >= 1){
            console.log("Reusing the existing DB connection.");
            return
        }
       const con = await mongoose.connect(process.env.MONGODB_URI);
       console.log("MongoDB Connected");
       
    } catch (error) {
        console.log("error connecting to MongoDB", error);
    }

    mongoose.connection.on('error', err => {
        logError(err);
    });

}