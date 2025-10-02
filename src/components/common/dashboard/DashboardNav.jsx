// src/components/common/dashboard/DashboardNav.jsx
"use client";

import { useSession, signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutDashboard, LogOut, User } from "lucide-react";
import { useRouter } from "next/navigation"; // client compatible
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardNav() {
  const session = useSession();
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="flex items-center justify-between px-5 py-3">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <Input placeholder="Search..." />
      </div>
      {!session.data?.user ? (
        <Link href="/login">
          <Button
            className="text-lg rounded-full text-blue-500 bg-blue-100 hover:bg-blue-200"
            size="lg"
            variant="outline"
          >
            Login
          </Button>
        </Link>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 rounded-full px-3 py-2  hover:bg-gray-100 transition mt-2">
              <img
                src={session.data?.user.image || "/images/avatar.png"}
                alt="Profile"
                className="h-8 w-8 rounded-full border"
              />
              <span className="text-gray-700 font-medium">
                {session.data?.user.name?.split(" ")[0]}
              </span>
              <User className="w-4 h-4 text-gray-500 ml-1" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <span className="font-semibold">{session.data.user.name}</span>
                <span className="text-xs text-gray-500">
                  {session.data.user.email}
                </span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                setMobileMenuOpen(false);
                navigation.push("/dashboard");
              }}
            >
              <LayoutDashboard className="w-4 h-4 mr-2" />
              Dashboard
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setMobileMenuOpen(false);
                navigation.push("/profile");
              }}
            >
              <User className="w-4 h-4 mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                setMobileMenuOpen(false);
                signOut();
              }}
              className="text-red-600"
            >
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}
