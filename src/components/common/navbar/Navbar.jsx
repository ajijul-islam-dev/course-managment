"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, User, LogOut, LayoutDashboard } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "../Logo";

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
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const navigation = useRouter();

  const session = useSession();

  const pathname = usePathname();

  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard ? (
        <div className="bg-white shadow py- px-4 md:px-8 fixed top-0 left-0 right-0 w-full mx-auto z-50">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <Logo/>
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
                    <button className="flex items-center gap-2 rounded-full px-3 py-2 w-full hover:bg-gray-100 transition mt-2">
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
                        <span className="font-semibold">
                          {session.data.user.name}
                        </span>
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
              {!session.data?.user ? (
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
                      <button className="flex items-center gap-2 rounded-full px-3 py-2 w-full hover:bg-gray-100 transition mt-2">
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
                          <span className="font-semibold">
                            {session.data.user.name}
                          </span>
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
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Navbar;
