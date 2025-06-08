"use client";
import { Button } from "@/components/ui/button";
import DropMenu from "./dropmenu/page";
import { BellRing, User } from "lucide-react";
import UserDropDown from "./partials/userDropdone";
import { useSupabase } from "@/services/supabase/supabase.hook";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { DropdownMenuDemo } from "./partials/userDropDown";
import Loader from "@/components/ui/loader";

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
    <div className="flex flex-col h-screen bg-black text-white">
      {/* Header for mobile */}
      <header className=" text-white px-10 py-5">
        <div className="flex  place-items-center justify-between">
          <div className="flex items-center justify-center gap-10">
            <div className="mt-2">
              <DropMenu />
            </div>
            <div className="text-lg font-bold">Alumna.ai</div>
          </div>
          <div className=" hidden md:flex  items-center gap-6">
            <Button
              className="px-6 py-2 rounded-lg font-semibold text-white text-base 
             bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] 
             border-t border-[#ffffff36] 
             shadow-[0_0_11px_0_rgba(160,125,241,0.3)] 
             hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span className="hidden sm:block"> New Chat</span>
            </Button>

            <button className="rounded-full flex items-center justify-center h-10 w-10 p-[1px] bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
              <div className="rounded-full h-full w-full bg-black flex justify-center items-center">
                <BellRing className="h-[18px] text-[#f2acc3] " />
              </div>
            </button>
            <div className="rounded-full h-10 w-10 bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] flex items-center justify-center  ">
              <DropdownMenuDemo />
            </div>
          </div>

          <div className="md:hidden flex">
            <UserDropDown />
          </div>
        </div>
      </header>

      <div className="overflow-y-hidden container mx-auto">{children}</div>
    </div>
  );
}
