"use client";

import { useSupabase } from "@/services/supabase/supabase.hook";

import Loader from "@/components/ui/loader";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/dashboard/partials/app-sidebar";
import NotificationDropdown from "./partials/notification.dropdown";
import { UserDropDown } from "./partials/userDropDown";

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
      <div className="flex  bg-black text-white w-full">
        {/* Left Sidebar */}

        {/* Main content area */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Header */}
          <header className="w-full bg-[#00000000] px-6 py-4">
            {/* <SidebarTrigger /> */}
            <div className="flex items-center justify-end relative">
              {/* Left logo area */}
              <div className=" flex items-center absolute top-2 left-0">
                <SidebarTrigger className=" w-10 h-10 rounded-full bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] text-white flex items-center justify-center shadow-md" />
              </div>
              {/* Desktop header controls */}
              <div className=" mr-5 flex items-center gap-4">
                {/* <Button
                  className="px-6 py-2 rounded-lg font-semibold text-white text-base
               bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]
               border-t border-[#ffffff36]
               shadow-[0_0_11px_0_rgba(160,125,241,0.3)]
               hover:opacity-90 transition-all duration-300 flex items-center gap-2"
                >
                  <span className="hidden sm:block">New Chat</span>
                </Button> */}

                <NotificationDropdown />
                <div className="rounded-full h-10 w-10 bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] flex items-center justify-center">
                  <UserDropDown />
                </div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 px-6 py-2 ">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
