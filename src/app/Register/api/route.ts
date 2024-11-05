import { NextApiRequest } from "next"

export async function POST (req: NextApiRequest){
    const { email, name, password } = req.body;
    console.log(email, name, password);
    try {
        
    } catch (error) {
        
    }
}