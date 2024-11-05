import mongoose from "mongoose";

const uri = process.env.NEXT_MONGODB_URI;
try {
    const ConnectedDB = mongoose.connect(uri)
} catch (error) {

}