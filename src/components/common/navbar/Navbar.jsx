import Link from "next/link";
import React from "react";
import Image from "next/image";

import NavigationMenuLinks from "./NavigationMenu";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="bg-white shadow py-4 px-8 fixed top-0 left-0 right-0 w-full mx-auto z-50">
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
        <NavigationMenuLinks />
        <Link href="/login">
          <Button
            className="text-lg rounded-full text-blue-500 bg-blue-100 hover:bg-blue-200 hover:text-blue-500"
            size="lg"
            variant={"outline"}
          >
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
