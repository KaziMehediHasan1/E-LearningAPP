import ConnectDB from "@/lib/Mongodb";
import UserModel from "@/Models/UserSchema";

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

