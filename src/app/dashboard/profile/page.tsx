"use client";

import Image from "next/image";

export default function Profile() {
  return (
    <div className="min-h-screen dark:bg-gradient-b dark:from-[#000000b0] dark:via-[#000000b0] dark:to-[#000000b0] bg-gradient-to-b from-[#F6F6F6] via-[#fef4f7] to-[#efeafe] flex items-start justify-center p-10">
      <div className="flex flex-col md:flex-row gap-6 bg-transparent max-w-6xl w-full lg:mt-10 ">
        {/* Left Card */}
        <div className="flex flex-col items-center justify-center p-10 bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] shadow-[0_0_10px_6px_rgba(142,142,142,0.15)] dark:shadow-none rounded-sm w-full md:w-[40%]">
          <div className="lg:w-48 lg:h-48 h-30 w-30 bg-[#1e1e1e] rounded-full mb-6" />
          <h2 className="lg:text-[40px] text-[24px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] ">
            Aarav Sharma
          </h2>
          <p className="mt-2 dark:text-white/50 text-black/50 lg:text-2xl text-base">Email ID</p>
        </div>

        {/* Right Card */}
        <div className="p-10 bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] shadow-[0_0_10px_6px_rgba(142,142,142,0.15)] dark:shadow-none rounded-sm  w-full md:w-[60%] space-y-7 dark:text-white text-black">
          <div>
            <p className="text-sm mb-2">Name</p>
            <p className="font-semibold">Aarav Sharma</p>
          </div>
          <div>
            <p className="text-sm mb-2">Email ID</p>
            <p className="font-semibold">Abc@gmail.com</p>
          </div>
          <div>
            <p className="text-sm mb-2">College Name</p>
            <p className="font-semibold">Any College Name</p>
          </div>
          <div>
            <p className="text-sm mb-2">Year</p>
            <p className="font-semibold">Any year</p>
          </div>
        </div>
      </div>
    </div>
  );
}
