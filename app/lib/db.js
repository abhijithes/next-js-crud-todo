import mongoose from "mongoose";

let isConnected = false; 
export async function connectToDB() {
    if (isConnected) {
        console.log("DB is already connected");
        
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected");
        isConnected = true;
    } catch (error) {
        console.log("Error connecting to DB", error);
    }
}