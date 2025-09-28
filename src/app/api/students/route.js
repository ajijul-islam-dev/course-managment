import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoose";
import User from "@/model/User";
import bcrypt from "bcryptjs";

// GET users with optional role filter
export const GET = async (req) => {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const roles = searchParams.get("role")?.split(",") || []; // role query param: student,admin,instructor

    let filter = {};
    if (roles.length > 0) {
      filter.role = { $in: roles };
    }

    const users = await User.find(filter).sort({ createdAt: -1 });
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("GET /users error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
};

// POST a new user
export const POST = async (req) => {
  try {
    await connectDB();
    const { name, email, password, role } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 422 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, role: role || "student", status: "pending" });
    await newUser.save();

    return NextResponse.json({ message: "User created successfully", user: newUser }, { status: 201 });
  } catch (error) {
    console.error("POST /users error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
};

// PATCH: update role/status
export const PATCH = async (req) => {
  try {
    await connectDB();
    const { userId, role, status } = await req.json();

    const user = await User.findById(userId);
    if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });

    if (role) user.role = role;
    if (status) user.status = status;

    await user.save();
    return NextResponse.json({ message: "User updated successfully", user }, { status: 200 });
  } catch (error) {
    console.error("PATCH /users error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
};

// DELETE a user
export const DELETE = async (req) => {
  try {
    await connectDB();
    const { userId } = await req.json();
    await User.findByIdAndDelete(userId);
    return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("DELETE /users error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
};
