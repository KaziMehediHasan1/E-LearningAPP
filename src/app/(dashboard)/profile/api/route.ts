import ConnectDB from "@/lib/Mongodb";
import UserModel from "@/Models/UserSchema";
import { NextResponse } from "next/server";


// UPDATE USER PROFILE DATA
export interface FormData {
    firstName: string;
    lastName: string;
    PEmail: string;
    SEmail: string;
    image: string | null;
    gender: string;
    address: string;
    role?: string
}
export async function PATCH(req: Request) {
    try {
        await ConnectDB();
        const { formData, queryData }: FormData = await req.json();
        // console.log(formData, queryData)
        const res = await UserModel.findOneAndUpdate({ email: queryData }, { $set: formData }, { new: true })
        if (res) {
            return NextResponse.json({ data: true }, { status: 201 })
        }
    } catch (err) {
        console.log(err)
        return NextResponse.json({ data: "Update field" }, { status: 500 })
    }
}