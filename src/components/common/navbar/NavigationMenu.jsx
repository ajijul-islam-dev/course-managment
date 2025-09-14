"use client";

import * as React from "react";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const menus = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Courses",
    path: "/courses",
  },
  {
    title: "Learn",
    path: "/learn",
  },
  {
    title: "Instructor",
    path: "/instructor",
  },
  {
    title: "SSC Result",
    path: "/ssc-result",
  },
  {
    title: "About Us",
    path: "/about-us",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
];

const NavigationMenuLinks = () => {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {menus.map((m) => {
          return (
            <NavigationMenuItem key={m.title}>
              <NavigationMenuLink asChild>
                <Link className="text-2xl" href={m.path}>{m.title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
export default NavigationMenuLinks;
