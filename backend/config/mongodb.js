import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("❌ MONGODB_URI is missing in the environment variables.");
        }

        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "e-commerce", // Define DB name
        });

        console.log("✅ MongoDB Connected Successfully");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error.message);
        process.exit(1);
    }
};

export default connectDB;
