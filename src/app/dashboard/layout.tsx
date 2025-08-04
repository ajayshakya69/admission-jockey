"use client";

import { useSupabase } from "@/services/supabase/supabase.hook";

import Loader from "@/components/ui/loader";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/app/dashboard/partials/app-sidebar";

import Imgae from "next/image";
import Link from "next/link";
import Navbar from "./partials/navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isLoading, authorised } = useSupabase({
    required: true,
    redirect: "/auth",
    role: ["authenticated"],
  });

  if (isLoading || !authorised) return <Loader />;

  return (
    <div className="relative bg-[#F6F6F6] dark:bg-black">
      <div className="absolute top-0 bg-[#F6F6F6] dark:bg-black">
        <Navbar />
      </div>

      {/* Page Content */}
      <main className="h-screen overflow-y-auto hide-scroll overflow-x-hidden pt-[70px] lg:pt-[72px]">
        {children}
      </main>
    </div>
  );
}
