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
    <div className="text-center flex flex-col gap-4 max-w-md mx-auto ">
      <h1 className="text-5xl font-bold">
        Hey there{" "}
        <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#F69DBA,#A07DF1)] capitalize">
          {name}
        </span>
        !{" "}
      </h1>
      <span className="text-center text-[#ffffffba] text-[24px]">
        I’m here to make things easier for you. <br />
        How can I help you?
      </span>
    </div>
  );
}
