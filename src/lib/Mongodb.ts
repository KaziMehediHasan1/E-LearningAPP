import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}
const ConnectDB = async ():Promise<void> => {
    try {
        await mongoose.connect(process.env.NEXT_MONGODB_URI!);
        console.log("Mongo connected");

    } catch (error) {
        console.log("not connected", error);
    }
}
export default ConnectDB;