"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Table, TableRow, TableCell, TableBody, TableHeader } from "@/components/ui/table";
import { Plus, Edit, Trash2, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";

const courseTypes = ["All", "Frontend", "Backend", "Design"];
const pageSize = 5;

const typeColors = {
  Frontend: "bg-blue-100 text-blue-700 border-blue-300",
  Backend: "bg-green-100 text-green-700 border-green-300",
  Design: "bg-pink-100 text-pink-700 border-pink-300",
  All: "bg-gray-100 text-gray-700 border-gray-300",
};

export default function DashboardPage() {
  const { data: session } = useSession();
  const userRole = session?.user?.role || "student"; // default student if not set

  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("name");
  const [page, setPage] = useState(1);

  // Fetch courses
  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await axios.get("/api/courses");
        setCourses(res.data);
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    }
    fetchCourses();
  }, []);

  // Filtered, sorted
  const filtered = useMemo(() => {
    let result = courses.filter(
      c =>
        (type === "All" || c.category === type) &&
        c.title.toLowerCase().includes(search.toLowerCase())
    );
    result = [...result].sort((a, b) =>
      sort === "name"
        ? a.title.localeCompare(b.title)
        : (b.students || 0) - (a.students || 0)
    );
    return result;
  }, [courses, type, sort, search]);

  const totalPages = Math.ceil(filtered.length / pageSize);
  const pagedCourses = useMemo(() => filtered.slice((page - 1) * pageSize, page * pageSize), [filtered, page]);

  // Handlers
  const handleView = useCallback(id => {
    Swal.fire("View Course", `Course ID: ${id}`, "info");
  }, []);

  const handleEdit = useCallback(id => {
    if (!["admin", "instructor"].includes(userRole)) {
      Swal.fire("Forbidden", "You cannot edit this course.", "error");
      return;
    }
    Swal.fire("Edit Course", `Course ID: ${id}`, "info");
  }, [userRole]);

  const handleDelete = useCallback(async id => {
    if (!["admin", "instructor"].includes(userRole)) {
      Swal.fire("Forbidden", "You cannot delete this course.", "error");
      return;
    }

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the course!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`/api/courses/${id}`);
        setCourses(prev => prev.filter(c => c._id !== id));
        Swal.fire("Deleted!", "Course has been deleted.", "success");
      } catch (err) {
        Swal.fire("Error!", "Failed to delete course.", "error");
      }
    }
  }, [userRole]);

  const totalStudents = useMemo(() => courses.reduce((acc, c) => acc + (c.students || 0), 0), [courses]);

  return (
    <div className="p-5 bg-gradient-to-br from-blue-200 via-pink-100 to-green-100 min-h-screen">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-blue-700 drop-shadow">Course Management Dashboard</h1>
          <Link href="/dashboard/create-course">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow">
              <Plus className="mr-2 h-4 w-4" /> New Course
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-blue-300 shadow-lg bg-blue-50">
            <CardHeader><CardTitle className="text-blue-700">Total Courses</CardTitle></CardHeader>
            <CardContent>
              <span className="text-4xl font-bold text-blue-600">{courses.length}</span>
            </CardContent>
          </Card>
          <Card className="border-green-300 shadow-lg bg-green-50">
            <CardHeader><CardTitle className="text-green-700">Active Students</CardTitle></CardHeader>
            <CardContent>
              <span className="text-4xl font-bold text-green-600">{totalStudents}</span>
            </CardContent>
          </Card>
          <Card className="border-pink-300 shadow-lg bg-pink-50">
            <CardHeader><CardTitle className="text-pink-700">Pending Requests</CardTitle></CardHeader>
            <CardContent>
              <span className="text-4xl font-bold text-pink-600">7</span>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="mb-6 w-full flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex gap-2 w-full">
            <Input
              placeholder="Search courses..."
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
              className="max-w-xs bg-white border-pink-300 focus:ring-pink-400"
            />
          </div>
          <div className="flex gap-2 w-full md:justify-end">
            <Select value={type} onValueChange={v => { setType(v); setPage(1); }}>
              <SelectTrigger className="max-w-xs bg-white border-blue-400 focus:ring-blue-400">
                <SelectValue placeholder="Filter by Type" />
              </SelectTrigger>
              <SelectContent>{courseTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
            </Select>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="max-w-xs bg-white border-green-400 focus:ring-green-400">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Sort by Name</SelectItem>
                <SelectItem value="students">Sort by Students</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Course Table */}
        <Card className="shadow-lg border-blue-200">
          <CardHeader><CardTitle className="text-blue-700">All Courses</CardTitle></CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-blue-100 via-pink-100 to-green-100">
                  <TableCell className="font-bold text-blue-700">Name</TableCell>
                  <TableCell className="font-bold text-green-700">Category</TableCell>
                  <TableCell className="font-bold text-pink-700">Students</TableCell>
                  <TableCell className="text-right font-bold text-gray-700">Actions</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pagedCourses.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center">No courses found.</TableCell>
                  </TableRow>
                ) : (
                  pagedCourses.map(c => (
                    <TableRow key={c._id} className="hover:bg-blue-50 transition">
                      <TableCell>{c.title}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full border text-xs font-semibold ${typeColors[c.category] || "bg-gray-100 text-gray-600"}`}>
                          {c.category}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded bg-pink-100 text-pink-700 font-semibold">{c.students || 0}</span>
                      </TableCell>
                      <TableCell className="flex gap-2 justify-end">
                        <Button variant="outline" size="sm" className="border-blue-400 text-blue-600 hover:bg-blue-100" onClick={() => handleView(c._id)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                       <Link href={`/dashboard/edit-course/${c._id}`}>
                        <Button variant="outline" size="sm" className="border-green-400 text-green-600 hover:bg-green-100">
                          <Edit className="h-4 w-4" />
                        </Button>
                       </Link>
                        <Button variant="destructive" size="sm" className="border-pink-400 text-white hover:bg-red-400" onClick={() => handleDelete(c._id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className={`flex items-center justify-center rounded-full px-3 py-2 transition ${page === 1 ? "text-gray-400 cursor-not-allowed bg-gray-100" : "hover:bg-blue-100 text-blue-600 bg-white shadow"}`}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => {
                  const pageNumber = i + 1;
                  const isActive = page === pageNumber;
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => setPage(pageNumber)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-blue-100 text-blue-600 bg-white shadow"}`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
              </div>

              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className={`flex items-center justify-center rounded-full px-3 py-2 transition ${page === totalPages ? "text-gray-400 cursor-not-allowed bg-gray-100" : "hover:bg-blue-100 text-blue-600 bg-white shadow"}`}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
