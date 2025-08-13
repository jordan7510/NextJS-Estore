import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if(!MONGODB_URI){
    throw new Error("Please add Mongodb URI in .env.")
}

export const connection = async()=>{
    try {
        const connection = mongoose.connect(MONGODB_URI);
        connection.on("connected", ()=>{
            console.log("Connected to Mongodb successfully.");
        })
        connection.on("error",(error)=>{
            console.log("Error connecting to MongoDb", error);
            process.exit();
        });
        
    } catch (error) {
        console.error("Error connecting to MongoDB",error);
        
    }
}   