import Link from "next/link";
import { Home, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/common/dashboard/app-sidebar"
import DashboardNav from "@/components/common/dashboard/DashboardNav";

export default function DashboardLayout({ children }) {
  return (
     <SidebarProvider>
      <AppSidebar />
      <div className="container mx-auto px-5">
        <DashboardNav/>
        <div className="py-10">
           {children}
        </div>
      </div>
    </SidebarProvider>
  );
}
