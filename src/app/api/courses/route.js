import { connectDB } from "@/lib/mongoose";
import Course from "@/model/Course";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { AuthOptions } from "../auth/[...nextauth]/route";

// GET all courses
export async function GET() {
  await connectDB();
  const courses = await Course.find();
  return NextResponse.json(courses);
}

// POST create new course
export async function POST(request) {
  const session = await getServerSession(AuthOptions);
  if (!session || !["admin","instructor"].includes(session.user.role)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  await connectDB();
  let data;
  try { data = await request.json(); } 
  catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }

  try {
    const newCourse = await Course.create(data);
    return NextResponse.json(newCourse, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create course", details: error.message }, { status: 500 });
  }
}
