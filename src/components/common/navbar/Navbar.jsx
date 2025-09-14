"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

import NavigationMenuLinks from "./NavigationMenu";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="bg-white shadow py-4 px-4 md:px-8 fixed top-0 left-0 right-0 w-full mx-auto z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <Image
            className="w-[100px]"
            src="/images/logo.webp"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </Link>
        {/* Hamburger menu for mobile */}
        <button
          className="lg:hidden flex items-center px-3 py-2 border rounded text-blue-500 border-blue-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="fill-current h-6 w-6" viewBox="0 0 24 24">
            {menuOpen ? (
              // Close (X) icon
              <path
                fillRule="evenodd"
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              // Hamburger menu icon
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
        {/* Desktop menu */}
        <div className="hidden lg:block">
          <NavigationMenuLinks />
        </div>
        <Link href="/login" className="hidden lg:block">
          <Button
            className="text-lg rounded-full text-blue-500 bg-blue-100 hover:bg-blue-200 hover:text-blue-500"
            size="lg"
            variant={"outline"}
          >
            Login
          </Button>
        </Link>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 px-2">
          <NavigationMenuLinks />
          <Link href="/login">
            <Button
              className="w-full mt-2 text-lg rounded-full text-blue-500 bg-blue-100 hover:bg-blue-200 hover:text-blue-500"
              size="lg"
              variant={"outline"}
            >
              Login
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
