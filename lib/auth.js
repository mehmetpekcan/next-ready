import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { database } from "@/lib/database";

export const authOptions = {
  session: {
    // When we use oauth providers, we need to use `jwt` as strategy
    // to be able to use middleware etc.
    // @see: https://next-auth.js.org/configuration/nextjs#caveats
    strategy: "jwt",
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  adapter: PrismaAdapter(database),
  secret: process.env.NEXTAUTH_SECRET,
  // @see: https://next-auth.js.org/configuration/nextjs#pages
  pages: {
    // Custom `login` page
    signIn: "/login",
  },
  callbacks: {
    // @see: https://next-auth.js.org/configuration/callbacks#session-callback
    async session({ session, token }) {
      // `token` is only truthy when user is logged in
      if (token) {
        session.user.bio = token.bio;
      }

      return session;
    },
    // @see: https://next-auth.js.org/configuration/callbacks#jwt-callback
    async jwt({ token, account, profile }) {
      // `account` is only available on sign in
      if (account) {
        token.bio = profile.bio;
      }

      return token;
    },
  },
};
