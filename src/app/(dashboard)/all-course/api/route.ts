import ConnectDB from "@/lib/Mongodb"
import CourseModel from "@/Models/CourseSchema";

// CREATE A COURSE
export async function POST(req: Request) {
    interface ICourse {
        image: string | null;
        title: string;
        price: number;
        tag: string;
        description: string;
        longDescription: string;
    }
    try {
        await ConnectDB();
        const { image, title, price, tag, description, longDescription }: ICourse = await req.json();
        const Courses = await new CourseModel({ image, title, price, tag, description, longDescription });
        const savedCourse = await Courses.save()
        return Response.json({ saved: savedCourse }, { status: 200 });
    } catch (error) {
        console.log(error)
        return Response.json({ saved: "Course not saving, server problem" }, { status: 500 });
    }
}

// READ ALL COURSES
export async function GET() {
    try {
        await ConnectDB();
        const findCourse = await CourseModel.find();
        return Response.json({ getCourses: findCourse }, { status: 201 })
    } catch (err) {
        console.log("courses not finding", err)
        return Response.json({ message: "course not finding" }, { status: 500 })
    }
}


