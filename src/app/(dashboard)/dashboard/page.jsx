"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Table, TableHead, TableRow, TableCell, TableBody, TableHeader } from "@/components/ui/table";
import { Pagination, PaginationItem } from "@/components/ui/pagination";
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
    // Implement delete logic here
    alert(`Delete course ${id}`);
  };
  const handleEdit = (id) => {
    // Implement edit logic here
    alert(`Edit course ${id}`);
  };
  const handleView = (id) => {
    // Implement view logic here
    alert(`View course ${id}`);
  };

  return (
    <div>
      <div className="p-8 min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-blue-700">Course Management Dashboard</h1>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="mr-2 h-4 w-4" />
            New Course
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Total Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">{allCourses.length}</span>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Active Students</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">
                {allCourses.reduce((acc, c) => acc + c.students, 0)}
              </span>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pending Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">7</span>
            </CardContent>
          </Card>
        </div>
        <div className=" mb-6 w-full flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex gap-2 w-full  ">
            <Input
              placeholder="Search courses..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="max-w-xs bg-white"
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
              <SelectTrigger className="max-w-xs bg-white border-blue-500 focus:ring-blue-500">
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
              <SelectTrigger className="max-w-xs bg-white border-blue-500 focus:ring-blue-500">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Sort by Name</SelectItem>
                <SelectItem value="students">Sort by Students</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>All Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Students</TableCell>
                  <TableCell className="text-right">Actions</TableCell>
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
                    <TableRow key={course.id}>
                      <TableCell>{course.name}</TableCell>
                      <TableCell>{course.type}</TableCell>
                      <TableCell>{course.students}</TableCell>
                      <TableCell className="flex gap-2 justify-end">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleView(course.id)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(course.id)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
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
          <Card>
            <CardHeader>
              <CardTitle>Recent Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {allCourses.slice(0, 3).map((course) => (
                  <li key={course.id} className="flex items-center justify-between">
                    <span>{course.name}</span>
                    <Button variant="outline" size="sm" onClick={() => handleView(course.id)}>
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
