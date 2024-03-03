import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import { IUser } from "./user.interface";

declare module "next-auth" {
  interface User extends IUser {}

  interface Session {
    user: IUser & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    isAdmin?: boolean;
  }
}
