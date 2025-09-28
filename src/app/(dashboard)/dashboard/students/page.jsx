"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableRow, TableCell, TableBody, TableHeader } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2, Check, X } from "lucide-react";
import axios from "axios";
import Swal from "sweetalert2";
import { useSession } from "next-auth/react";

export default function StudentsDashboard() {
  const { data: session } = useSession();
  const userRole = session?.user?.role || "student"; // current user role

  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 5;

  // Fetch students
  useEffect(() => {
    async function fetchStudents() {
      try {
        const res = await axios.get("/api/users?role=student");
        setStudents(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchStudents();
  }, []);

  const totalPages = Math.ceil(students.length / pageSize);
  const pagedStudents = useMemo(
    () => students.slice((page - 1) * pageSize, page * pageSize),
    [students, page]
  );

  // Handlers
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the student!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      await axios.delete("/api/users", { data: { userId: id } });
      setStudents(prev => prev.filter(s => s._id !== id));
      Swal.fire("Deleted!", "Student has been deleted.", "success");
    }
  };

  const handleStatusChange = async (studentId, newStatus) => {
    try {
      await axios.patch("/api/users", { userId: studentId, status: newStatus });
      setStudents(prev =>
        prev.map(s => (s._id === studentId ? { ...s, status: newStatus } : s))
      );
      Swal.fire("Updated!", `Status changed to ${newStatus}`, "success");
    } catch (err) {
      Swal.fire("Error!", "Failed to update status.", "error");
    }
  };

  const canModify = ["admin", "instructor"].includes(userRole);

  return (
    <div className="p-5 min-h-screen bg-gradient-to-br from-blue-200 via-pink-100 to-green-100">
      <h1 className="text-3xl font-bold mb-6">Students Management Dashboard</h1>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>All Students</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Status</TableCell>
                {canModify && <TableCell className="text-right">Actions</TableCell>}
              </TableRow>
            </TableHeader>
            <TableBody>
              {pagedStudents.map(student => (
                <TableRow key={student._id} className="hover:bg-gray-50 transition">
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.status}</TableCell>
                  {canModify && (
                    <TableCell className="flex gap-2 justify-end">
                      {student.status === "pending" && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-green-400"
                          onClick={() => handleStatusChange(student._id, "approved")}
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                      )}
                      {student.status === "approved" && (
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleStatusChange(student._id, "disabled")}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                      {student.status === "disabled" && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-green-400"
                          onClick={() => handleStatusChange(student._id, "approved")}
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(student._id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              ))}
              {pagedStudents.length === 0 && (
                <TableRow>
                  <TableCell colSpan={canModify ? 4 : 3} className="text-center">
                    No students found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-4">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-3 py-1 rounded bg-white border shadow disabled:opacity-50"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  page === i + 1 ? "bg-blue-600 text-white" : "bg-white border"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-3 py-1 rounded bg-white border shadow disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
