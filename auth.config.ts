import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login'
  },

  callbacks: {
    /* authorized({ auth, request: { nextUrl } }) {
      const isLogedIn = !!auth?.user;
      const isOnADD = nextUrl.pathname.startsWith('/add-task');

      if (isOnADD) {
        return isLogedIn;

      }
      return true;
    }, */

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
  providers: [],
} satisfies NextAuthConfig;