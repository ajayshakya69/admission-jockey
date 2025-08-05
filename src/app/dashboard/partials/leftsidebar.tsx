"use client";
import { useSupabase } from "@/services/supabase/supabase.hook";
import {
  Star,
  ExternalLink,
  UserIcon,
  Users,
  Search,
  GraduationCap,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function LeftSidebar() {
  const { session, logout } = useSupabase();
  const [user, setUser] = useState<null | any>(null);

  useEffect(() => {
    if (session && session.user && session.user.user_metadata) {
      setUser(session.user.user_metadata);
    }
  }, [session]);
  return (
    <aside className="flex flex-col gap-4 p-4 w-full h-full lg:max-h-[calc(100vh-74px)] overflow-hidden">
      {/* Chat History Section - Takes most space */}
      <div className="bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] rounded-[8px] shadow-[0_0_10px_6px_rgba(142,142,142,0.05)] dark:shadow-none p-4 flex-1 overflow-y-auto lg:mt-0 mt-15">
        <h3 className="text-lg font-bold bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] bg-clip-text text-transparent mb-6 text-center">
          Chat History
        </h3>
        <ul className="text-xs dark:text-gray-400 text-gray-600 space-y-3">
          <li className="cursor-pointer hover:text-purple-500 transition-colors">
            Chat History
          </li>
          <li className="cursor-pointer hover:text-purple-500 transition-colors">
            Chat History
          </li>
          <li className="cursor-pointer hover:text-purple-500 transition-colors">
            Chat History
          </li>
        </ul>
      </div>

      {/* Navigation Buttons */}
      <div className="flex rounded-lg overflow-hidden flex-shrink-0 bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
        {/* Alumni Button */}
        <Link
          href="/dashboard/alumini"
          className="flex-1 py-3 px-2 flex flex-col items-center justify-center text-white text-[8px] font-medium"
        >
          <Users className="w-[28px] h-[34px] mb-[3px]" />
          Alumni
        </Link>

        {/* College Finder Button */}
        <Link
          href="/dashboard/collegefinder"
          className="flex-1 py-3 px-2 flex flex-col items-center justify-center text-white text-[8px] font-medium "
        >
          <Search className="w-[28px] h-[34px] mb-[3px]" />
          College Finder
        </Link>

        {/* Online College Button */}
        <Link
          href="/dashboard/onlineCollege"
          className="flex-1 py-3 px-2 flex flex-col items-center justify-center text-white text-[8px] font-medium "
        >
          <GraduationCap className="w-[28px] h-[34px] mb-[3px]" />
          Online College
        </Link>
      </div>

      {/* Testimonial Card - Fixed height */}
      <div className="bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] rounded-[8px] shadow-[0_0_10px_6px_rgba(142,142,142,0.05)] dark:shadow-none p-4 flex-shrink-0">
        <div className="flex items-center mb-4 gap-3">
          {false ? (
            <Image
              src={""}
              alt="user"
              width={40}
              height={40}
              className="rounded-full object-cover dark:bg-white bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]"
            />
          ) : (
            <div className="w-10 h-10 flex items-center justify-center rounded-full dark:bg-white bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
              <UserIcon className="w-5 h-5 text-white" />
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
              Rohan Mehta
            </h3>
            <p className="text-xs text-gray-400">2023 Passout</p>
          </div>
        </div>
        <p className="text-xs italic dark:text-gray-300 text-gray-600 mb-3">
          "Curriculum is industry-relevant and helped me land my first job."
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-between gap-1">
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-3 h-3 ${star <= 4 ? "fill-[#946DF0] text-[#946DF0]" : "text-gray-600"}`}
                />
              ))}
            </div>

            <span className="text-gray-400 text-[10px]">
              48 connected right now
            </span>
          </div>
          <button className="bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] text-white px-4 py-2 rounded text-xs">
            View
          </button>
        </div>
      </div>

      {/* User Profile Section - Fixed at bottom */}
      <div className="bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] rounded-[8px] shadow-[0_0_10px_6px_rgba(142,142,142,0.05)] dark:shadow-none p-4 flex-shrink-0">
        <div className="grid grid-cols-12 gap-3 items-center">
          {/* Avatar or Fallback */}
          <div className="col-span-2">
            {user?.avatar_url ? (
              <Image
                src={user.avatar_url}
                alt="user"
                width={40}
                height={40}
                className="rounded-full object-cover dark:bg-white bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]"
              />
            ) : (
              <div className="w-10 h-10 flex items-center justify-center rounded-full dark:bg-white bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
                <UserIcon className="w-5 h-5 text-white" />
              </div>
            )}
          </div>

          {/* User Info */}
          <div className="col-span-8 ml-3">
            <h4 className="text-sm font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] mb-1">
              {user?.name || "Unknown"}
            </h4>
            <p className="text-[10px] text-gray-400">{user?.email || "No email"}</p>
          </div>

          {/* Logout Icon */}
          <div className="col-span-2 flex justify-end">
            <LogOut
              size={20}
              className="dark:text-white text-black cursor-pointer"
              onClick={logout}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
