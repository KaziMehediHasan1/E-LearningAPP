import ConnectDB from "@/lib/Mongodb";
import BlogModel from "@/Models/BlogSchema";


//BLOGS POSTING ROUTE
export async function POST(req: Request) {
    interface FormData {
        title: string,
        description: string,
        tag: string[],
        image: string
    }
    try {
        await ConnectDB();
        const { title, image, description, tag }: FormData = await req.json();
        const FormData = await new BlogModel({ title, image, description, tag });
        const savedBlog = await FormData.save();
        return Response.json({ saved: savedBlog }, { status: 200 });
    } catch (error) {
        console.error("Error saving user:", error);
        return Response.json({ message: 'Internal Server Error', error: error }, { status: 500 });
    }
}



//BLOG READING ROUTE
export async function GET() {
    try {
        await ConnectDB();
        const findBLogs = await BlogModel.find();
        return Response.json({ allBlogs: findBLogs }, { status: 201 })
    } catch (error) {
        console.log(error)
        return Response.json({ message: "Blog are not found" }, { status: 500 })
    }
}

// SPECIFIC BLOG DATA DELETE USING _id...
export async function DELETE(req: Request) {
    try {
        const { id } = await req.json();
        await ConnectDB();
        const result = await BlogModel.deleteOne({ _id: id })
        if (result.deletedCount > 0) {

            return Response.json({ message: "deleted blog" }, { status: 201 })
        }
    } catch (error) {
        console.log(error, "data is not deleting");
        return Response.json({ result: true }, { status: 500 })
    }
}

