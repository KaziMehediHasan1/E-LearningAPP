import ConnectDB from "@/lib/Mongodb";
import UserModel from "@/Models/UserSchema";



//CREATE USERS USING DB
export async function POST(req: Request) {
    interface UserData {
        email: string,
        name: string,
        password: string
    }
    try {
        await ConnectDB();
        const { email, name, password }: UserData = await req.json();
        console.log(email, name, password, "7 no line");
        const userData = await new UserModel({ email, name, password });
        const savedUser = await userData.save();
        return Response.json({ saved: savedUser }, { status: 200 });
    } catch (error) {
        console.error("Error saving user:", error);
        return Response.json({ message: 'Internal Server Error', error: error }, { status: 500 });
    }
}

//GET ALL USERS IN DB
export async function GET() {
    try {
        await ConnectDB();
        const getUsers = await UserModel.find();
        return Response.json({ getUser: getUsers }, { status: 201 })
    } catch (error) {
        console.log(error)
        return Response.json({ message: "not get the user properly " }, { status: 500 })
    }
}

