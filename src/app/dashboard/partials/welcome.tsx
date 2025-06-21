"use client";
import { useSupabase } from "@/services/supabase/supabase.hook";
import React, { useEffect, useState } from "react";

export default function Welcome() {
  const { session } = useSupabase();
  const [name, setName] = useState("user");

  useEffect(() => {
    if (!session) return;
    if (session.user.app_metadata.provider === "google")
      setName(session.user.user_metadata.name.split(" ")[0].toLowerCase());
    else setName(session.user.user_metadata.display_name);
  }, [session]);
  return (
    <div className="text-center flex flex-col gap-4  mx-auto lg:mb-10 lg:mt-5">
      <h1 className="lg:text-5xl text-[24px] font-bold font-poppins lg:mb-5">
        Hey there{" "}
        <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#F69DBA,#A07DF1)] capitalize">
          {name}
        </span>
        !{" "}
      </h1>
      <span className="text-center dark:text-[#ffffff88] text-black lg:text-[24px] text-sm ">
        I’m here to make things easier for you. <br />
        How can I help you?
      </span>
    </div>
  );
}
