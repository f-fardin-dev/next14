import { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  providers: [],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.id && token.isAdmin) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ request, auth }) {
      const user = auth?.user;
      const isOnAdminPage = request.nextUrl?.pathname?.startsWith("/admin");
      const isOnBlogPage = request.nextUrl?.pathname?.startsWith("/blog");
      const isOnLoginPage = request.nextUrl?.pathname?.startsWith("/login");

      if (isOnAdminPage && !user?.isAdmin) {
        return false;
      }
      if (isOnBlogPage && !user) {
        return false;
      }
      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }
      return true;
    },
  },
};
