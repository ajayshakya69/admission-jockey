"use client";
import { Button } from "@/components/ui/button";
import { useSupabase } from "@/services/supabase/supabase.hook";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ThemeToggle from "../(components)/themetoggle";
import { EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const { session } = useSupabase();

  useEffect(() => {
    if (session?.user) setUser(session.user);
  }, [session]);

  return (
    <nav className="lg:py-8 py-4 dark:text-white text-black flex justify-between items-center">
        <img
          src="/01logo.png"
          className="dark:block hidden md:w-[250px] w-[170px] mt-[1px]"
          alt="logo"
        />
        <img
          src="/lightlogo.png"
          className="dark:hidden block md:w-[250px] w-[170px]"
          alt="logo"
        />

      {/* Desktop Buttons */}
      <div className="hidden lg:flex items-center gap-4">
        <ThemeToggle />
        {user ? (
          <Link href="/dashboard">
            <Button
              className="lg:px-6 lg:py-2 px-4 py-[2px] lg:rounded-lg rounded-sm font-semibold text-white lg:text-base text-[12px] 
              bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] 
              border-t border-[#ffffff36] 
              shadow-[0_0_11px_0_rgba(160,125,241,0.3)] 
              hover:opacity-90 transition-all duration-300"
            >
              Dashboard
            </Button>
          </Link>
        ) : (
          <Link href="/auth">
            <Button
              className="lg:px-6 lg:py-2 px-4 py-[2px] lg:rounded-lg rounded-sm font-semibold text-white lg:text-base text-[12px] 
              bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] 
              border-t border-[#ffffff36] 
              shadow-[0_0_11px_0_rgba(160,125,241,0.3)] 
              hover:opacity-90 transition-all duration-300"
            >
              Login
            </Button>
          </Link>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <EllipsisVertical className="w-7 h-7" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40 mr-5 dark:bg-[#000000b0] bg-[#fffcfc33] backdrop-blur-[2px] border-[1px] border-[#00000097] dark:border-[#ffffff55] ">
            <DropdownMenuItem asChild>
              <div className="flex items-center justify-between w-full">
                <span className="text-sm ">Theme</span>
                <ThemeToggle />
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              {user ? (
                <Link href="/dashboard" className="w-full">
                  <Button
                    className="w-full mt-2 lg:px-6 lg:py-2 px-4 py-[2px] lg:rounded-lg rounded-sm font-semibold text-white lg:text-base text-[12px] 
                    bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] 
                    border-t border-[#ffffff36] 
                    shadow-[0_0_11px_0_rgba(160,125,241,0.3)] 
                    hover:opacity-90 transition-all duration-300"
                  >
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <Link href="/auth" className="w-full">
                  <Button
                    className="w-full mt-2 lg:px-6 lg:py-2 px-4 py-[2px] lg:rounded-lg rounded-sm font-semibold text-white lg:text-base text-[12px] 
                    bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] 
                    border-t border-[#ffffff36] 
                    shadow-[0_0_11px_0_rgba(160,125,241,0.3)] 
                    hover:opacity-90 transition-all duration-300"
                  >
                    Login
                  </Button>
                </Link>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
