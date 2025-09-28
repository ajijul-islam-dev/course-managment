"use client";

import { useState, useEffect, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableRow, TableCell, TableBody, TableHeader } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2, Check, X, UserCog } from "lucide-react";
import axios from "axios";
import Swal from "sweetalert2";
import { useSession } from "next-auth/react";

export default function UsersDashboard() {
  const { data: session } = useSession();
  const currentUserRole = session?.user?.role || "student";

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 5;

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await axios.get("/api/users");
        setUsers(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchUsers();
  }, []);

  const totalPages = Math.ceil(users.length / pageSize);
  const pagedUsers = useMemo(
    () => users.slice((page - 1) * pageSize, page * pageSize),
    [users, page]
  );

  const confirmAction = async (title, text, callback) => {
    const confirm = await Swal.fire({
      title,
      text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, proceed!",
    });
    if (confirm.isConfirmed) {
      await callback();
    }
  };

  const handleDelete = async (id) => {
    confirmAction("Are you sure?", "This will permanently delete the user!", async () => {
      await axios.delete("/api/users", { data: { userId: id } });
      setUsers((prev) => prev.filter((u) => u._id !== id));
      Swal.fire("Deleted!", "User has been deleted.", "success");
    });
  };

  const handleStatusChange = async (userId, newStatus) => {
    const user = users.find((u) => u._id === userId);
    confirmAction("Confirm Status Change", `Change status to ${newStatus}?`, async () => {
      await axios.patch("/api/users", { userId, status: newStatus, role: user.role });
      setUsers((prev) =>
        prev.map((u) => (u._id === userId ? { ...u, status: newStatus } : u))
      );
      Swal.fire("Updated!", `Status changed to ${newStatus}`, "success");
    });
  };

  const handleMakeRole = async (userId, newRole) => {
    confirmAction("Confirm Role Change", `Change role to ${newRole}?`, async () => {
      await axios.patch("/api/users", {
        userId,
        role: newRole,
        status: "approved",
      });
      setUsers((prev) =>
        prev.map((u) =>
          u._id === userId ? { ...u, role: newRole, status: "approved" } : u
        )
      );
      Swal.fire("Updated!", `Role changed to ${newRole}`, "success");
    });
  };

  return (
    <div className="p-5 min-h-screen bg-gradient-to-br from-blue-200 via-pink-100 to-green-100">
      <h1 className="text-3xl font-bold mb-6">User Management Dashboard</h1>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>All Users</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Status</TableCell>
                <TableCell className="text-right">Actions</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pagedUsers.map((user) => (
                <TableRow
                  key={user._id}
                  className="hover:bg-gray-50 transition"
                >
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.status}</TableCell>
                  <TableCell className="flex gap-2 justify-end">
                    {/* Requested → Approve/Disable */}
                    {user.status === "requested" && (
                      <>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-green-400"
                          onClick={() =>
                            handleStatusChange(user._id, "approved")
                          }
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() =>
                            handleStatusChange(user._id, "disabled")
                          }
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </>
                    )}

                    {/* Approved → Disable */}
                    {user.status === "approved" && user.role !== "admin" && (
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() =>
                          handleStatusChange(user._id, "disabled")
                        }
                      >
                        Disable
                      </Button>
                    )}

                    {/* Disabled → Approve */}
                    {user.status === "disabled" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-green-400"
                        onClick={() =>
                          handleStatusChange(user._id, "approved")
                        }
                      >
                        Approve
                      </Button>
                    )}

                    {/* Make Admin/Instructor (only for Admins) */}
                    {currentUserRole === "admin" && user.status === "approved" && (
                      <>
                        {user.role !== "admin" && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-blue-400"
                            onClick={() => handleMakeRole(user._id, "admin")}
                          >
                            Make Admin
                          </Button>
                        )}
                        {user.role !== "instructor" && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-pink-400"
                            onClick={() =>
                              handleMakeRole(user._id, "instructor")
                            }
                          >
                            Make Instructor
                          </Button>
                        )}
                      </>
                    )}

                    {/* Delete (only for Admins) */}
                    {currentUserRole === "admin" && (
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(user._id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              {pagedUsers.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center">
                    No users found.
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
                  page === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-white border"
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
