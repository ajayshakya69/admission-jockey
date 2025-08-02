"use client";
import Link from "next/link";

export default function RightSidebar() {

  const articles = [
    {
      author: "By Name of the article writer",
      date: "20-11-2025",
      title:
        "The Future Of K12-STEM Education: Trends To Watch In 2024 | Bright Classroom Ideas",
    },
    // Duplicate or add more entries if needed
    {
      author: "By Name of the article writer",
      date: "20-11-2025",
      title:
        "The Future Of K12-STEM Education: Trends To Watch In 2024 | Bright Classroom Ideas",
    },
    {
      author: "By Name of the article writer",
      date: "20-11-2025",
      title:
        "The Future Of K12-STEM Education: Trends To Watch In 2024 | Bright Classroom Ideas",
    },
  ];

  return (
    <div className="bg-[linear-gradient(0deg,rgba(160,125,241,0.2),rgba(246,157,186,0.2))] pl-[1px] lg:block hidden">
      <aside className="hidden lg:flex flex-col justify-between gap-4 p-2 dark:bg-black bg-[#F6F6F6] h-full dark:text-white text-black overflow-hidden">
        
        <div className=" rounded-xl p-4">
          <h4 className="text-lg font-bold bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] bg-clip-text text-transparent mb-6 text-center">Colleges</h4>
          <div className="dark:bg-gradient-to-t dark:from-[#ffffff06] dark:via-[#ffffff02] dark:to-[#ffffff06] bg-gradient-to-l from-white via-white to-white rounded-[8px] overflow-hidden  shadow-[0_0_10px_6px_rgba(142,142,142,0.15)] dark:shadow-none flex flex-col">
            <img src="/collegeimg/dbs.png" className="w-full h-30 object-cover rounded-t" />
            <div className="p-5 px-4">
              <h1 className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] font-semibold text-sm">DBS Global University</h1>
              <p className="text-[10px] mt-1 text-gray-300">DBS Global University in Dehradun stands as a beacon for creative dreamers, recognizing that...</p>
            </div>
          </div>
          <div className="mt-2 ml-2">
              <Link
                href="/dashboard/collegefinder"
                className="text-xs text-[#d396f7] underline hover:underline"
              >
                Show more
              </Link>
            </div>
        </div>
        
        <div className="p-4">
          {/* Gradient Heading */}
          <h4 className="text-lg font-bold bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] bg-clip-text text-transparent mb-6 text-center">
            Education trends
          </h4>

          {/* Articles List */}
          <ul className="space-y-6 text-sm">
            {articles.map((article, index) => (
              <li key={index}>
                <div className="flex items-center justify-between text-[10px] space-y-2 dark:text-white/50 text-black mb-1">
                  <span>{article.author}</span>
                  <span>{article.date}</span>
                </div>
                <div className="text-[12px] dark:text-white text-black leading-snug">
                  {article.title}
                </div>
              </li>
            ))}
          </ul>

          {/* Link */}
          <div className="mt-4">
            <Link
              href="#"
              className="text-xs text-[#d396f7] underline hover:underline"
            >
              See Full List
            </Link>
          </div>
        </div>

        
      </aside>
    </div>

  );
}
