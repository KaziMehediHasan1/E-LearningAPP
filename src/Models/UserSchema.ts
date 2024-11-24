
import { FormData } from "@/app/(dashboard)/profile/api/route";
import mongoose, { Document, model, Schema } from "mongoose";

export interface IUser extends Document, FormData {
    email?: string,
    name?: string,
    password?: string
    createdAt?: Date,
    updatedAt?: Date
};

const UserSchema = new Schema<IUser>({
    email: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
    },
    password: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    PEmail: {
        type: String,
    },
    SEmail: {
        type: String,
    },
    gender: {
        type: String,
    },
    address: {
        type: String,
    },
    role: { type: String, default: "normal" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

const UserModel = mongoose.models.User || model<IUser>("User", UserSchema)
export default UserModel

