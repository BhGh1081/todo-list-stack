import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import z from "zod";
import bcrypt from 'bcrypt';
import { authConfig } from "./auth.config";
import sql from "@/app/lib/db";


export async function getUser(email: string) {
   const user = await sql `SELECT * FROM users WHERE email = ${email} `;
   return user[0];
}

export const {auth, signIn, signOut} = NextAuth ({
    ...authConfig,
    providers: [Credentials({
        async authorize(credentials) {
            const parsedCredential = z.
            object({email : z.string(), password: z.string()})
            .safeParse(credentials);

            if(parsedCredential.success) {
                const {email, password} = parsedCredential.data;
                const user = await getUser(email);

                if(!user) return null;

                const passwordMatch = await bcrypt.compare(password, user.password)
                if(passwordMatch){
                    return user;
                }
            }

            console.log('Invalid data');
            return null;
        }
    })],
    
})