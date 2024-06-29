import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import { getDb } from "@/app/utils/connectDB";
import bcrypt from 'bcrypt'
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialProvider({
            id: "credentials",
            name: "credentials",
            async authorize(credentials) {
                const db = await getDb();
                try {
                    
                    const user = await db.collection("users").findOne({ email: credentials.email });
                    if (!user) {
                        throw new Error('user not found ')
                    }
                    // check password 
                    const isPasswordCorrect = await bcrypt.compare(credentials.password,user.password)
                    if (!isPasswordCorrect) {
                        throw new Error('Invalid password')
                    }
                    return user;
                } catch (error) {
                    throw new Error(error.message);
                }
            },
        }),
    ],
    pages: {
        signIn: '/auth/signIn',
        signOut: '/auth/signOut',
        error: '/dashboard/error',
    },
});

export { handler as GET, handler as POST };
