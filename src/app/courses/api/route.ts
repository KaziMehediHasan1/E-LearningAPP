import ConnectDB from "@/lib/Mongodb";
import CourseModel from "@/Models/CourseSchema";
import { NextResponse } from "next/server";


// UPDATED NEW COUNTING VALUE WHEN A USER VIEW SOME BLOG
export async function PATCH(req: Request) {
    const { id } = await req.json();
    try {
        await ConnectDB();
        // Update or create a blog document with an incremented viewCount
        const res = await CourseModel.findByIdAndUpdate(
            id,
            { $inc: { viewCount: 1 } },
        );
        return NextResponse.json({ data: res }, { status: 200 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Not updating data" }, { status: 500 });
    }
}
