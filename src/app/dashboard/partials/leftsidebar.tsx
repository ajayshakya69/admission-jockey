"use client";

import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function LeftSidebar() {
  return (
    <aside className="flex lg:flex flex-col gap-[25px] p-4 py-4 lg:mt-0 mt-15 dark:text-white text-black lg:overflow-hidden overflow-scroll">
      <div className="bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] rounded-[8px] p-4 shadow-[0_0_10px_6px_rgba(142,142,142,0.15)] dark:shadow-none">
        <div className="flex items-center mb-[20px] justify-between">
          <img src="/profile.jpg" className="w-[75px] h-[75px] rounded-full dark:bg-white bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]" />
          <div className="">
            <h3 className="text-[20px] font-bold mb-[8px] text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">Aanya Verma</h3>
            <p className="text-[10px] text-gray-400">aanyaverma@gmail.com</p>
          </div>
        </div>
        <p className="text-xs mt-2 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
      </div>

      <div className="bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04]  rounded-[8px]  p-4 shadow-[0_0_10px_6px_rgba(142,142,142,0.15)] dark:shadow-none">
        <h4 className="text-lg font-bold bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] bg-clip-text text-transparent mb-6 text-center">Chat History</h4>
        <ul className="text-xs dark:text-gray-400 text-gray-600 space-y-3">
          <li>Chat History 1</li>
          <li>Chat History 2</li>
          <li>Chat History 3</li>
        </ul>
      </div>

      <div className=" flex justify-between bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] py-3 px-4  rounded-[8px] text-base text-left shadow-[0_0_10px_6px_rgba(142,142,142,0.15)] dark:shadow-none ">
        <button>Psychometric Test </button>
        <Link href="/"><SquareArrowOutUpRight /></Link>
      </div>


      <div className="bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04]  rounded-[8px] shadow-[0_0_10px_6px_rgba(142,142,142,0.15)] dark:shadow-none  p-4">
        <div className="flex items-center mb-[20px] justify-between">
          <img src="/profile.jpg" className="w-[70px] h-[70px] rounded-full dark:bg-white bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]" />
          <div className="">
            <h3 className="text-[20px] font-bold mb-[8px] text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">Rohan Mehta</h3>
            <p className="text-[10px] text-gray-400">2023 Passout</p>
          </div>
        </div>
        <p className="text-xs mt-2 italic">“Curriculum is industry-relevant and helped me land my first job.”</p>
        <div className="flex justify-between place-items-center">
          <div className="flex flex-col "></div>
          <button className="bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] text-white mt-2 px-4 py-2 rounded text-xs">View</button>
        </div>

      </div>
    </aside>
  );
}
