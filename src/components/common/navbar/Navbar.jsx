"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const menus = [
  { title: "Home", path: "/" },
  { title: "Courses", path: "/courses" },
  { title: "Learn", path: "/learn" },
  { title: "Instructor", path: "/instructor" },
  { title: "SSC Result", path: "/ssc-result" },
  { title: "About Us", path: "/about-us" },
  { title: "Contact Us", path: "/contact-us" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false); // dummy login state

  return (
    <div className="bg-white shadow py-4 px-4 md:px-8 fixed top-0 left-0 right-0 w-full mx-auto z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            className="w-[100px]"
            src="/images/logo.webp"
            alt="Logo"
            width={180}
            height={38}
            priority
          />
        </Link>
        {/* desktop menu */}
         <div className="hidden lg:flex justify-center items-center gap-6">
          {menus.map((m) => (
            <Link
              key={m.title}
              href={m.path}
              className="text-base font-medium hover:text-blue-600 transition-colors py-2 px-3 rounded hover:bg-gray-100"
            >
              {m.title}
            </Link>
          ))}
      </div>

        {/* Hamburger menu (mobile only) */}
        <button
          className="lg:hidden flex items-center px-3 py-2 border rounded text-blue-500 border-blue-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="fill-current h-6 w-6" viewBox="0 0 24 24">
            {menuOpen ? (
              <path
                fillRule="evenodd"
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-center items-center gap-6">
    
          {/* Conditional Login/Profile */}
          {!isLoggedIn ? (
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
                <Button
                  variant="outline"
                  className="rounded-full w-10 h-10 p-0 bg-blue-100 hover:bg-blue-200 text-blue-500"
                >
                  👤
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => setIsLoggedIn(false)}
                  className="text-red-500"
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
     
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 px-2 space-y-2">
          {menus.map((m) => (
            <Link
              key={m.title}
              href={m.path}
              className="block text-base font-medium hover:text-blue-600 transition-colors py-2 px-3 rounded hover:bg-gray-100"
              onClick={() => setMenuOpen(false)} // close after click
            >
              {m.title}
            </Link>
          ))}

          {/* Conditional Login/Profile for Mobile */}
          {!isLoggedIn ? (
            <Link href="/login" onClick={() => setMenuOpen(false)}>
              <Button
                className="w-full mt-2 text-lg rounded-full text-blue-500 bg-blue-100 hover:bg-blue-200"
                size="lg"
                variant="outline"
              >
                Login
              </Button>
            </Link>
          ) : (
            <div className="mt-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full rounded-full bg-blue-100 hover:bg-blue-200 text-blue-500"
                  >
                    👤 My Account
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile" onClick={() => setMenuOpen(false)}>
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" onClick={() => setMenuOpen(false)}>
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      setIsLoggedIn(false);
                      setMenuOpen(false);
                    }}
                    className="text-red-500"
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;