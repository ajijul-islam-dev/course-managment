import { connectDB } from "@/lib/mongoose";
import Course from "@/model/Course";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { AuthOptions } from "../../auth/[...nextauth]/route";


// GET, PUT, DELETE course by id
export async function GET(request, { params }) {
  await connectDB();
  const course = await Course.findById(params.id);
  if (!course) return NextResponse.json({ error: "Course not found" }, { status: 404 });
  return NextResponse.json(course);
}

export async function PUT(request, { params }) {
  await connectDB();
  const session = await getServerSession(AuthOptions);
  if (!session || !["admin","instructor"].includes(session.user.role)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const data = await request.json();
  const updatedCourse = await Course.findByIdAndUpdate(params.id, data, { new: true });
  if (!updatedCourse) return NextResponse.json({ error: "Course not found" }, { status: 404 });
  return NextResponse.json(updatedCourse);
}

export async function DELETE(request, { params }) {
  await connectDB();
  console.log(params.id);
  const session = await getServerSession(AuthOptions);
  if (!session || !["admin","instructor"].includes(session.user.role)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const deletedCourse = await Course.findByIdAndDelete(params.id);
  if (!deletedCourse) return NextResponse.json({ error: "Course not found" }, { status: 404 });
  return NextResponse.json(deletedCourse);
}
