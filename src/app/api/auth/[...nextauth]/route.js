// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@/lib/mongoose";
import User from "@/model/User";
import  bcrypt  from 'bcryptjs';



export const AuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    // Email/Password Login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error("All fields are required");
        }

        await connectDB();
        const dbUser = await User.findOne({ email });

        if (!dbUser) {
          throw new Error("No user found with this email");
        }

        const isValid = await bcrypt.compare(password, dbUser.password);
        if (!isValid) {
          throw new Error("Invalid password");
        }

        // return minimal safe object (not full mongoose doc)
        return {
          id: dbUser._id.toString(),
          name: dbUser.name,
          email: dbUser.email,
        };
      },
    }),

    // Google OAuth
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  pages: {
    signIn: "/login", // custom login page
  },

  callbacks: {
    async signIn({ user, account, profile }) {
        await connectDB();
      if (account.provider === "google") {
        // Handle Google sign-in
        const email = user.email;
        let dbUser = await User.findOne({ email });

        if (!dbUser) {
          // If user doesn't exist, create a new one
          dbUser = new User({
            name: user.name,
            email: user.email,
            image: user.image,
          });
          await dbUser.save();
        }

        // Return user object
        return {
          id: dbUser._id.toString(),
          name: dbUser.name,
          email: dbUser.email,
        };
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
}
const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };
