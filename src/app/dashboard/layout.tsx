"use client";

import { Button } from "@/components/ui/button";
import { BellRing } from "lucide-react";
import UserDropDown from "./partials/userDropdone";
import { useSupabase } from "@/services/supabase/supabase.hook";
import { DropdownMenuDemo } from "./partials/userDropDown";
import Loader from "@/components/ui/loader";
import Sidebar from "./dropmenu/page";

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
    <div className="flex h-screen overflow-hidden bg-black text-white">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="w-full bg-[#00000000] px-6 py-4">
          <div className="flex items-center justify-end relative">
            {/* Left logo area */}
<div className="lg:hidden flex items-center absolute top-2 left-22"><img src="/logo.jpg" alt="logo" className="h-10 w-auto" /></div>
            {/* Desktop header controls */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                className="px-6 py-2 rounded-lg font-semibold text-white text-base 
               bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] 
               border-t border-[#ffffff36] 
               shadow-[0_0_11px_0_rgba(160,125,241,0.3)] 
               hover:opacity-90 transition-all duration-300 flex items-center gap-2"
              >
                <span className="hidden sm:block">New Chat</span>
              </Button>

              <button className="rounded-full flex items-center justify-center h-10 w-10 p-[1px] bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
                <div className="rounded-full h-full w-full bg-black flex justify-center items-center">
                  <BellRing className="h-[18px] text-[#f2acc3]" />
                </div>
              </button>

              <div className="rounded-full h-10 w-10 bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] flex items-center justify-center">
                <DropdownMenuDemo />
              </div>
            </div>

            {/* Mobile dropdown */}
            <div className="md:hidden">
              <UserDropDown />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto px-6 py-4">
          {children}
        </main>
      </div>
    </div>
  );
}
