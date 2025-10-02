// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@/lib/mongoose";
import User from "@/model/User";
import bcrypt from "bcryptjs";

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

        return {
          id: dbUser._id.toString(),
          name: dbUser.name,
          email: dbUser.email,
          role: dbUser.role, 
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
    signIn: "/login",
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        await connectDB();
        const email = user.email;
        let dbUser = await User.findOne({ email });

        if (!dbUser) {
          dbUser = new User({
            name: user.name,
            email: user.email,
            image: user.image,
            role: "student", // default role
            status: "pending",
          });
          await dbUser.save();
        }

        // ✅ Attach the role to the user object that will be passed to JWT callback
        user.id = dbUser._id.toString();
        user.role = dbUser.role;
      }
      return true;
    },

    async jwt({ token, user, account }) {
      // ✅ For Google OAuth, user object is available during signIn
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      
      // ✅ Alternative: Fetch user from DB if role is missing
      if (account?.provider === "google" && !token.role) {
        await connectDB();
        const dbUser = await User.findOne({ email: token.email });
        if (dbUser) {
          token.id = dbUser._id.toString();
          token.role = dbUser.role;
        }
      }
      
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };