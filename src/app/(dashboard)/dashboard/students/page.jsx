"use client"
import React, { useState } from "react";
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";

const batches = ["Batch A", "Batch B", "Batch C"];

const studentsData = [
    { id: 1, name: "Alice Johnson", email: "alice@email.com", enrolled: "2024-05-10", batch: "Batch A" },
    { id: 2, name: "Bob Smith", email: "bob@email.com", enrolled: "2024-05-12", batch: "Batch B" },
    { id: 3, name: "Charlie Lee", email: "charlie@email.com", enrolled: "2024-05-15", batch: "Batch C" },
    { id: 4, name: "David Kim", email: "david@email.com", enrolled: "2024-05-18", batch: "Batch A" },
    { id: 5, name: "Eva Brown", email: "eva@email.com", enrolled: "2024-05-20", batch: "Batch B" },
    { id: 6, name: "Frank Green", email: "frank@email.com", enrolled: "2024-05-22", batch: "Batch C" },
    // Add more for pagination demo
];

const PAGE_SIZE = 4;

export default function StudentsPage() {
    const [search, setSearch] = useState("");
    const [students, setStudents] = useState(studentsData);
    const [batch, setBatch] = useState("");
    const [page, setPage] = useState(1);

    const filteredStudents = students.filter(
        (student) =>
            (student.name.toLowerCase().includes(search.toLowerCase()) ||
                student.email.toLowerCase().includes(search.toLowerCase())) &&
            (batch ? student.batch === batch : true)
    );

    const totalPages = Math.ceil(filteredStudents.length / PAGE_SIZE);
    const paginatedStudents = filteredStudents.slice(
        (page - 1) * PAGE_SIZE,
        page * PAGE_SIZE
    );

    const handleDelete = (id) => {
        setStudents(students.filter((s) => s.id !== id));
    };

    return (
        <div className="max-w-5xl mx-auto p-6 pt-10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                    Students
                </h1>
                <Button
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow"
                    onClick={() => alert("Add student modal (to implement)")}
                >
                    + Add Student
                </Button>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
                <Input
                    type="text"
                    placeholder="Search students..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(1);
                    }}
                    className="md:w-1/2"
                />
                <Select value={batch} onValueChange={(val) => { setBatch(val === "__all__" ? "" : val); setPage(1); }}>
                    <SelectTrigger className="md:w-1/4">
                        <SelectValue placeholder="Select batch" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="__all__">All Batches</SelectItem>
                        {batches.map((b) => (
                            <SelectItem key={b} value={b}>{b}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="overflow-x-auto rounded-lg shadow-lg bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Enrolled</TableHead>
                            <TableHead>Batch</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedStudents.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="py-4 text-center text-gray-500">
                                    No students found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            paginatedStudents.map((student) => (
                                <TableRow key={student.id} className="hover:bg-blue-50 transition">
                                    <TableCell>{student.name}</TableCell>
                                    <TableCell>{student.email}</TableCell>
                                    <TableCell>{student.enrolled}</TableCell>
                                    <TableCell>
                                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                                            student.batch === "Batch A"
                                                ? "bg-blue-100 text-blue-700"
                                                : student.batch === "Batch B"
                                                ? "bg-purple-100 text-purple-700"
                                                : "bg-pink-100 text-pink-700"
                                        }`}>
                                            {student.batch}
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-blue-600 hover:bg-blue-100 mr-2"
                                            onClick={() => alert(`Edit ${student.name}`)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-red-600 hover:bg-red-100"
                                            onClick={() => handleDelete(student.id)}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
            {totalPages > 1 && (
                <Pagination className="mt-6 flex justify-center">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationLink
                                onClick={() => setPage(page > 1 ? page - 1 : 1)}
                                disabled={page === 1}
                                className={page === 1 ? "opacity-50 cursor-not-allowed" : ""}
                            >
                                Prev
                            </PaginationLink>
                        </PaginationItem>
                        {[...Array(totalPages)].map((_, idx) => (
                            <PaginationItem key={idx}>
                                <PaginationLink
                                    isActive={page === idx + 1}
                                    onClick={() => setPage(idx + 1)}
                                    className={page === idx + 1 ? "bg-blue-500 text-white" : ""}
                                >
                                    {idx + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationLink
                                onClick={() => setPage(page < totalPages ? page + 1 : totalPages)}
                                disabled={page === totalPages}
                                className={page === totalPages ? "opacity-50 cursor-not-allowed" : ""}
                            >
                                Next
                            </PaginationLink>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
        </div>
    );
}