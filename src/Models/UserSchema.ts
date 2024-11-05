import { Document, model, Schema } from "mongoose";

export interface IUser extends Document {
    email: string,
    name: string,
    password: string
    createdAt?: Date,
    updatedAt?: Date
};

const UserSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

const UserModel = model<IUser>("User", UserSchema)
export default UserModel

