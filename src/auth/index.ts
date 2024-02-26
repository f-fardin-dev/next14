import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import {
  checkAndRegisterGithubUser,
  loginWithCredentials,
} from "@app/services/user";
import { Credentials } from "@app/types/user.interface";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub,
    CredentialsProvider({
      async authorize(credentials) {
        return await loginWithCredentials(
          credentials as unknown as Credentials
        );
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider !== "github") {
        return true;
      }
      return checkAndRegisterGithubUser(profile);
    },
  },
});
