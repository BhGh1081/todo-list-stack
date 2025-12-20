import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import z from "zod";
import bcrypt from 'bcrypt';
import { getUserWithEmail } from "./app/lib/action";


export const { auth, signIn, signOut, handlers } = NextAuth({

  providers: [Credentials({
    async authorize(credentials) {
      const parsedCredential = z.
        object({ email: z.string().email(), password: z.string() })
        .safeParse(credentials);

      if (parsedCredential.success) {
        const { email, password } = parsedCredential.data;
        const user = await getUserWithEmail(email);

        if (!user) return null;

        const passwordMatch = await bcrypt.compare(password, user.password)
        if (passwordMatch) {
          return user;
        }
      }
      return null;
    }
  })],

  callbacks: {

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      if (token.id) {
        session.user.id = token.id as string;
      }
      return session;
    }
  },

})
