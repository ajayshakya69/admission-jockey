"use client";
import { Button } from "@/components/ui/button";
import { useSupabase } from "@/services/supabase/supabase.hook";
import Link from "next/link";
import React, { useEffect, useState } from "react";


const Navbar: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const { session } = useSupabase();

  useEffect(() => {
    if (session?.user) setUser(session.user);
  }, [session]);

  return (
    <nav className=" lg:py-8 py-4 text-white flex justify-between items-center">
      <div className="lg:text-lg text-sm lg:font-bold font-medium">
        <img
          src="/logo.jpg"
          className="md:w-[220px] w-[170px]"
          alt=""
        />
      </div>
      {user ? (
        <Link href="/dashboard">
          <Button
            className="lg:px-6 lg:py-2 px-6 py-1 lg:rounded-lg rounded-sm font-semibold text-white lg:text-base text-[16px] 
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
            className="lg:px-6 lg:py-2 px-6 py-1 lg:rounded-lg rounded-sm font-semibold text-white lg:text-base text-[16px] 
            bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] 
            border-t border-[#ffffff36] 
            shadow-[0_0_11px_0_rgba(160,125,241,0.3)] 
            hover:opacity-90 transition-all duration-300"
          >
            Login
          </Button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
