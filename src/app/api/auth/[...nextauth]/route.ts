import ConnectDB from "@/lib/Mongodb";
import UserModel from "@/Models/UserSchema";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                const { email, password } = credentials;
                if (!email || !password) {
                    return null
                }
                await ConnectDB();
                const user = await UserModel.findOne({ email: email })
                if (user) {
                    return user
                }
            }
        })
    ],
    pages: {
        signIn: "/Login",
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
            } return token
        },
        async session({ session, token }) {
            if (token) {
                session.user = {
                    ...session.user,
                    id: token.id as string,
                    email: token.email as string
                }
            }
            return session;
        }
    }
})

export { handler as GET, handler as POST }
