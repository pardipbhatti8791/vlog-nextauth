import axiosInstance, { BASE_URL, URI } from "@/services/service";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions: NextAuthOptions = {
  secret: "gpocders12345gpcoders12345",
  pages: {
    signIn: "/",
    error: "/",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials, _) {
        // login logic
        console.log(BASE_URL, URI.auth.signIn, credentials);
        try {
          const response = await axios.post(BASE_URL + URI.auth.signIn, {
            email: credentials!.email,
            password: credentials!.password,
          });
          const { data } = response;

          return {
            id: data.user.email,
            name: data.user.first_name + " " + data.user.last_name,
            email: data.user.email,
            username: data.user.email,
            token: data.access_token,
          };
        } catch (error: any) {
          throw new Error(error.response.data.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...user, ...token };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};
