import  { DefaultSession } from "next-auth";
declare module "next-auth" {
    interface Session {
        user: {
            id: string,
            email: string,
        } & DefaultSession["user"]
    }
    //jwt interface.
    interface JWT {
        id: string,
        email: string
    }
}



