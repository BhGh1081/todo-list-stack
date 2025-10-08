import NextAuth from "next-auth";
import { auth } from "@/app/auth";
import { authConfig } from "@/app/auth.config";

const handler = NextAuth({
    ...auth,
    ...authConfig,
    secret: process.env.NEXTAUTH_SECRET
})

export {handler as GET, handler as POST};