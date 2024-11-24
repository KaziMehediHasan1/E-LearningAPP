import ConnectDB from "@/lib/Mongodb";
import UserModel, { IUser } from "@/Models/UserSchema";
import { NextResponse } from "next/server";




export async function PATCH(req: Request) {
    const { email, role }: IUser = await req.json();
    console.log(email, role)
    try {
        await ConnectDB();
        if (email && role) {
            const findUser = await UserModel.findOneAndUpdate(
                { email },
                { $set: { role } },
                { new: true, upsert: true })
            if (findUser) {
                return NextResponse.json({ data: true }, { status: 201 })
            }
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Role Not successfully updated" }, { status: 500 })
    }
}