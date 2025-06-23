"use client";

import { useSupabase } from "@/services/supabase/supabase.hook";

import Loader from "@/components/ui/loader";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/dashboard/partials/app-sidebar";
import NotificationDropdown from "./partials/notification.dropdown";
import { UserDropDown } from "./partials/userDropDown";
import ThemeToggle from "../(components)/themetoggle";

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
    <SidebarProvider>
      <AppSidebar />
      <div className="flex h-screen overflow-hidden dark:bg-black bg-[#F6F6F6] dark:text-white text-black w-full">
        {/* Left Sidebar */}

        {/* Main content area */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Header */}
          <header className="w-full bg-[#00000000] px-6 py-4">
            {/* <SidebarTrigger /> */}
            <div className="flex items-center justify-end relative">
              {/* Left logo area */}
              <div className=" flex items-center absolute top-[1px] left-[-25px]">
                <SidebarTrigger className=" w-10 h-10 rounded-full bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] text-white flex items-center justify-center shadow-md" />
              </div>
              {/* Desktop header controls */}
              <div className=" lg:mr-5 mr-0 flex items-center gap-4">
                {/* <Button
                  className="px-6 py-2 rounded-lg font-semibold text-white text-base
               bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]
               border-t border-[#ffffff36]
               shadow-[0_0_11px_0_rgba(160,125,241,0.3)]
               hover:opacity-90 transition-all duration-300 flex items-center gap-2"
                >
                  <span className="hidden sm:block">New Chat</span>
                </Button> */}
                <ThemeToggle />
                <NotificationDropdown />
                <div className="rounded-full h-10 w-10 bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] flex items-center justify-center">
                  <UserDropDown />
                </div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto hide-scroll overflow-x-hidden">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
