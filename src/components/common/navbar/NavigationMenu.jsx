import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const menus = [
  { title: "Home", path: "/" },
  { title: "Courses", path: "/courses" },
  { title: "Learn", path: "/learn" },
  { title: "Instructor", path: "/instructor" },
  { title: "SSC Result", path: "/ssc-result" },
  { title: "About Us", path: "/about-us" },
  { title: "Contact Us", path: "/contact-us" },
];

const NavigationMenuLinks = () => (
  <nav>
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="flex text-start flex-col w-full lg:flex-row gap-4 md:gap-6 bg-white md:bg-transparent p-4 md:p-0 rounded-md shadow md:shadow-none">
        {menus.map((m) => (
          <NavigationMenuItem key={m.title}>
            <NavigationMenuLink asChild>
              <Link
                className="text-lg md:text-base font-medium hover:text-blue-600 transition-colors py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent"
                href={m.path}
              >
                {m.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  </nav>
);

export default NavigationMenuLinks;
