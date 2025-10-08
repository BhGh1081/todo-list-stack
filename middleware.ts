import { authConfig } from "./app/auth.config";
import NextAuth from "next-auth";

export default NextAuth(authConfig).auth;

export const config = {
    matcher: ['/add-task'],
    runtime: 'nodejs'
}