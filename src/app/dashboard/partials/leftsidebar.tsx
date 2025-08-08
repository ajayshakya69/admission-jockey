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
import Link from "next/link";
import { useChatbotContext } from "@/app/providers/chatbot/chatbot.context";
import { useEffect, useRef, useState } from "react";
import { alumniList } from "../alumini/alumni-data";
import NewChat from "./newChat";

{
  /* Testimonial Card - Fixed height */
}
function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % alumniList.length);
    }, 1500);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const alumni = alumniList[current];

  return (
    <div className="bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] rounded-[8px] shadow-[0_0_10px_6px_rgba(142,142,142,0.05)] dark:shadow-none p-4 flex-shrink-0 transition-all duration-500">
      <div className="flex items-center mb-4 gap-3 overflow-hidden">
        <div className="w-10 h-10 flex items-center justify-center rounded-full dark:bg-white bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] overflow-hidden">
          {alumni.img ? (
            <Image
              src={alumni.img}
              alt={alumni.name}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <UserIcon className="w-5 h-5 text-white" />
          )}
        </div>
        <div className="flex-1 ">
          <h3 className="text-lg font-bold  text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] ">
            {alumni.name}
          </h3>
        </div>
      </div>
      <p className="text-xs italic dark:text-gray-300 text-gray-600 mb-3 truncate">
        "{alumni.college}"
      </p>
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-between italic">
          <div className="flex gap-3 text-[10px]">Skills</div>
          <span className="text-gray-400 text-[9px]">
            {Array.isArray(alumni.tags) ? alumni.tags.join(" , ") : alumni.tags}
          </span>
        </div>
        <Link href="https://calendly.com/focs-outreach/30min" target="_blank" rel="noopener noreferrer">
        <button className="bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] text-white px-4 py-2 rounded text-xs">
          Connect
        </button>
        </Link>
      </div>
    </div>
  );
}

export default function LeftSidebar() {
  const { session, logout } = useSupabase();
  const [user, setUser] = useState<null | any>(null);
  const { chatHistory, handlePreviousMessages } = useChatbotContext();

  useEffect(() => {
    if (session && session.user) {
      setUser(session.user);
    }
  }, [session]);

  useEffect(() => {
    console.log("this is chat history");
  }, [chatHistory]);

  console.log("this is left sideBar");
  return (
    <aside className="flex flex-col gap-4 p-4 w-full h-full lg:max-h-[calc(100vh-74px)] overflow-hidden">
      {/* Chat History Section - Takes most space */}
      <div className="bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] rounded-[8px] shadow-[0_0_10px_6px_rgba(142,142,142,0.05)] dark:shadow-none p-4 flex-1 overflow-y-auto lg:mt-0 mt-15">
        <div className="flex justify-between place-items-center">
          <h3 className="text-lg font-bold bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] bg-clip-text text-transparent mb-2 text-center">
          Chat History
        </h3>
        <div className="text-center mb-4">
          <NewChat />
        </div>
        </div>
        
        <ul className="text-xs dark:text-gray-400 text-gray-600 space-y-3">
          {chatHistory.length > 0 ? (
            chatHistory.map((value: any) => {
              return (
                <li
                  key={value.sessionId}
                  onClick={() => handlePreviousMessages(value.sessionId)}
                  className="cursor-pointer hover:text-purple-500 transition-colors"
                >
                  {value.messages[0].content.slice(0, 15)}
                </li>
              );
            })
          ) : (
            <li className="cursor-pointer hover:text-purple-500 transition-colors">
              Start Your First Chat
            </li>
          )}
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

      <TestimonialCarousel />

      {/* User Profile Section - Fixed at bottom */}
      <div className="bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] rounded-[8px] shadow-[0_0_10px_6px_rgba(142,142,142,0.05)] dark:shadow-none p-4 flex-shrink-0">
        <div className="grid grid-cols-12 gap-3 items-center">
          {/* Avatar or Fallback */}
          <div className="col-span-2">
            {user?.user_metadata?.avatar_url ? (
              <Image
                src={user?.user_metadata?.avatar_url}
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
          <div className="col-span-8">
            <h4 className="text-sm font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
              {user && user.app_metadata.provider == "email"
                ? user?.user_metadata.display_name
                : user?.user_metadata.name}
            </h4>
            <p className="text-xs text-gray-400">
              {user?.user_metadata.email || "No email"}
            </p>
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
