"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Table, TableHead, TableRow, TableCell, TableBody, TableHeader } from "@/components/ui/table";
import { Plus, Edit, Trash2, Eye, ChevronLeft, ChevronRight } from "lucide-react";

// Dummy data
const allCourses = [
  { id: 1, name: "React Basics", type: "Frontend", students: 30 },
  { id: 2, name: "Next.js Advanced", type: "Frontend", students: 20 },
  { id: 3, name: "UI/UX Design", type: "Design", students: 15 },
  { id: 4, name: "Node.js API", type: "Backend", students: 25 },
  { id: 5, name: "Python Fundamentals", type: "Backend", students: 18 },
  { id: 6, name: "Figma Essentials", type: "Design", students: 10 },
  { id: 7, name: "Vue.js Starter", type: "Frontend", students: 12 },
  { id: 8, name: "Express.js", type: "Backend", students: 22 },
  { id: 9, name: "CSS Mastery", type: "Frontend", students: 17 },
  { id: 10, name: "Django Basics", type: "Backend", students: 14 },
  { id: 11, name: "Branding 101", type: "Design", students: 8 },
  { id: 12, name: "TypeScript", type: "Frontend", students: 19 },
];

const courseTypes = ["All", "Frontend", "Backend", "Design"];
const pageSize = 5;

const typeColors = {
  Frontend: "bg-blue-100 text-blue-700 border-blue-300",
  Backend: "bg-green-100 text-green-700 border-green-300",
  Design: "bg-pink-100 text-pink-700 border-pink-300",
  All: "bg-gray-100 text-gray-700 border-gray-300",
};

export default function DashboardPage() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("name");
  const [page, setPage] = useState(1);

  // Filter, search, sort
  let filtered = allCourses.filter(
    (c) =>
      (type === "All" || c.type === type) &&
      c.name.toLowerCase().includes(search.toLowerCase())
  );
  filtered = [...filtered].sort((a, b) =>
    sort === "name"
      ? a.name.localeCompare(b.name)
      : b.students - a.students
  );

  // Pagination
  const totalPages = Math.ceil(filtered.length / pageSize);
  const pagedCourses = filtered.slice((page - 1) * pageSize, page * pageSize);

  // Handlers
  const handleDelete = (id) => {
    alert(`Delete course ${id}`);
  };
  const handleEdit = (id) => {
    alert(`Edit course ${id}`);
  };
  const handleView = (id) => {
    alert(`View course ${id}`);
  };

  return (
    <div className="p-5 bg-gradient-to-br from-blue-200 via-pink-100 to-green-100 min-h-screen">
      <div>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-blue-700 drop-shadow">Course Management Dashboard</h1>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow">
            <Plus className="mr-2 h-4 w-4" />
            New Course
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-blue-300 shadow-lg bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-700">Total Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold text-blue-600">{allCourses.length}</span>
            </CardContent>
          </Card>
          <Card className="border-green-300 shadow-lg bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-700">Active Students</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold text-green-600">
                {allCourses.reduce((acc, c) => acc + c.students, 0)}
              </span>
            </CardContent>
          </Card>
          <Card className="border-pink-300 shadow-lg bg-pink-50">
            <CardHeader>
              <CardTitle className="text-pink-700">Pending Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold text-pink-600">7</span>
            </CardContent>
          </Card>
        </div>
        <div className="mb-6 w-full flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex gap-2 w-full">
            <Input
              placeholder="Search courses..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="max-w-xs bg-white border-pink-300 focus:ring-pink-400"
            />
          </div>
          <div className="flex gap-2 w-full md:justify-end">
            <Select
              value={type}
              onValueChange={(v) => {
                setType(v);
                setPage(1);
              }}
            >
              <SelectTrigger className="max-w-xs bg-white border-blue-400 focus:ring-blue-400">
                <SelectValue placeholder="Filter by Type" />
              </SelectTrigger>
              <SelectContent>
                {courseTypes.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={sort}
              onValueChange={setSort}
            >
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
        <Card className="shadow-lg border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-700">All Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-blue-100 via-pink-100 to-green-100">
                  <TableCell className="font-bold text-blue-700">Name</TableCell>
                  <TableCell className="font-bold text-green-700">Type</TableCell>
                  <TableCell className="font-bold text-pink-700">Students</TableCell>
                  <TableCell className="text-right font-bold text-gray-700">Actions</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pagedCourses.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center">
                      No courses found.
                    </TableCell>
                  </TableRow>
                ) : (
                  pagedCourses.map((course) => (
                    <TableRow key={course.id} className="hover:bg-blue-50 transition">
                      <TableCell>{course.name}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full border text-xs font-semibold ${typeColors[course.type]}`}>
                          {course.type}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded bg-pink-100 text-pink-700 font-semibold">{course.students}</span>
                      </TableCell>
                      <TableCell className="flex gap-2 justify-end">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-blue-400 text-blue-600 hover:bg-blue-100"
                          onClick={() => handleView(course.id)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-green-400 text-green-600 hover:bg-green-100"
                          onClick={() => handleEdit(course.id)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          className="border-pink-400 text-white hover:bg-red-400 "
                          onClick={() => handleDelete(course.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
            <div className="flex justify-center items-center gap-4 mt-6">
              {/* Prev */}
              <button
                disabled={page === 1}
                onClick={() => page > 1 && setPage(page - 1)}
                className={`flex items-center justify-center rounded-full px-3 py-2 transition 
                  ${page === 1 
                    ? "text-gray-400 cursor-not-allowed bg-gray-100" 
                    : "hover:bg-blue-100 text-blue-600 bg-white shadow"}`
                }
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              {/* Page Numbers */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => {
                  const pageNumber = i + 1
                  const isActive = page === pageNumber
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => setPage(pageNumber)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition
                        ${isActive 
                          ? "bg-blue-600 text-white shadow-md" 
                          : "hover:bg-blue-100 text-blue-600 bg-white shadow"}`
                      }
                    >
                      {pageNumber}
                    </button>
                  )
                })}
              </div>
              {/* Next */}
              <button
                disabled={page === totalPages}
                onClick={() => page < totalPages && setPage(page + 1)}
                className={`flex items-center justify-center rounded-full px-3 py-2 transition 
                  ${page === totalPages 
                    ? "text-gray-400 cursor-not-allowed bg-gray-100" 
                    : "hover:bg-blue-100 text-blue-600 bg-white shadow"}`
                }
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </CardContent>
        </Card>
        <div className="mt-10">
          <Card className="border-pink-200 shadow-lg bg-pink-50">
            <CardHeader>
              <CardTitle className="text-pink-700">Recent Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {allCourses.slice(0, 3).map((course) => (
                  <li key={course.id} className="flex items-center justify-between">
                    <span className="font-semibold text-blue-700">{course.name}</span>
                    <Button variant="outline" size="sm" className="border-blue-400 text-blue-600 hover:bg-blue-100" onClick={() => handleView(course.id)}>
                      View
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
