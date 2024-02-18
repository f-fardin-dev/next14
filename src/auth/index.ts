import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { checkAndRegisterGithubUser } from "@app/services/user";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider !== "github") {
        return true;
      }
      return checkAndRegisterGithubUser(profile);
    },
  },
});
