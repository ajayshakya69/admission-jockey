"use client";

import { useSupabase } from "@/services/supabase/supabase.hook";
import { UserIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useTransition } from "react";

export default function Profile() {
  const [user, setUser] = useState<null | any>(null);
  const [userName, setUserName] = useState<null | string>(null);
  const [collegeName, setCollegeName] = useState("");
  const [year, setYear] = useState("");
  const [isLoading, startTransition] = useTransition();

  const { session, saveProfile, userProfile } = useSupabase();

  useEffect(() => {
    if (session && session.user) {
      setUser(session.user);

      const value =
        session.user && session.user.app_metadata.provider == "email"
          ? session.user?.user_metadata.display_name
          : session.user?.user_metadata.name;

      setUserName(value);
    }

    if (userProfile) {
      setYear(userProfile.year);
      setCollegeName(userProfile.college);
    }
  }, [session]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(async () => {
      saveProfile(
        collegeName,
        year,
        user?.user_metadata.email,
        user?.user_metadata?.avatar_url,
        userName ?? "",
      );
    });
  };

  return (
    <div className="min-h-screen dark:bg-gradient-b dark:from-[#000000b0] dark:via-[#000000b0] dark:to-[#000000b0] bg-gradient-to-b from-[#F6F6F6] via-[#fef4f7] to-[#efeafe] flex items-start justify-center p-10">
      <div className="flex flex-col md:flex-row gap-6 bg-transparent max-w-6xl w-full lg:mt-10 ">
        {/* Left Card */}
        <div className="flex flex-col items-center justify-center p-10 bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] shadow-[0_0_10px_6px_rgba(142,142,142,0.15)] dark:shadow-none rounded-sm w-full md:w-[40%]">
          <div className="lg:w-48 lg:h-48 w-30 h-30 bg-[#1e1e1e] rounded-full mb-6 overflow-hidden relative">
            {user?.user_metadata?.avatar_url ? (
              <Image
                src={user.user_metadata.avatar_url}
                alt="user"
                fill
                className="object-cover rounded-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center rounded-full dark:bg-white bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
                <UserIcon className="w-10 h-10 text-white" />
              </div>
            )}
          </div>

          <h2 className="lg:text-[40px] text-[24px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] ">
            {}
          </h2>
          <p className="mt-2 dark:text-white/50 text-black/50 lg:text-2xl text-base">
            {user?.user_metadata.email || "No email"}
          </p>
        </div>

        {/* Right Card */}
        <form
          onSubmit={handleSubmit}
          className="p-10 bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] shadow-[0_0_10px_6px_rgba(142,142,142,0.15)] dark:shadow-none rounded-sm  w-full md:w-[60%] space-y-7 dark:text-white text-black"
        >
          <div>
            <p className="text-sm mb-2">Name</p>
            <p className="font-semibold">{userName}</p>
          </div>
          <div>
            <p className="text-sm mb-2">Email ID</p>
            <p className="font-semibold">
              {user?.user_metadata.email || "No email"}
            </p>
          </div>

          <div>
            <p className="text-sm mb-2">College Name</p>
            <input
              type="text"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
              placeholder="Enter your college name"
              className="w-full px-4 py-2 rounded-md border dark:border-white/10 dark:bg-transparent bg-white dark:text-white text-black focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <p className="text-sm mb-2">Year</p>
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Enter year"
              className="w-full px-4 py-2 rounded-md border dark:border-white/10 dark:bg-transparent bg-white dark:text-white text-black focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2 rounded-md text-white bg-gradient-to-r from-purple-500 to-pink-400 hover:opacity-90 transition"
            disabled={isLoading}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
