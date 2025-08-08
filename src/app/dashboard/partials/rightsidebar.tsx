"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { colleges } from "../collegefinder/partials/data"; // Adjust the import path as necessary
import { ArrowUpRight } from "lucide-react";

const AUTO_SLIDE_INTERVAL = 2000; // 2 seconds

function CollegeCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % colleges.length);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  if (!colleges.length) return null;

  const college = colleges[current];

  return (
    <div className="dark:bg-gradient-to-t dark:from-[#ffffff06] dark:via-[#ffffff02] dark:to-[#ffffff06] bg-gradient-to-l from-white via-white to-white rounded-[8px] overflow-hidden shadow-[0_0_10px_6px_rgba(142,142,142,0.05)] dark:shadow-none flex flex-col transition-all duration-500">
      <img src={college.image} alt={college.name} className="w-full h-30 object-cover rounded-t" />
      <div className="p-5 px-4">
        <h1
          className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] font-semibold text-sm truncate"
          title={college.name}
        >
          {college.name}
        </h1>
        <p className="text-[10px] mt-1 text-gray-300 truncate">{college.description}</p>
      </div>
    </div>
  );
}

export default function RightSidebar() {

  const articles = [
    {
      author: "hortoninternational",
      date: "2025-11-20",
      title:
        "Workforce Upskilling Programs & Case Studies",
      description: "Real-world case studies and actionable strategies for companies adopting upskilling, such as Amazon’s Career Choice and Siemens’ learning ecosystem",
      link: "https://hortoninternational.com/upskilling-in-2025/",
    },
    {
      author: "helpdesk",
      date: "2025-11-20",
      title:
        "Practical Certification, Experience & Networking Tips",
      description: "Detailed advice on IT career launches: certifications, hands-on experience, networking, and career paths from help desk technician to cloud architect.",
      link: "https://www.helpdesk.com/blog/it-career-path/",
    },
    {
      author: "cloudthat",
      date: "2025-11-20",
      title:
        "Effective Training Program Structures",
      description: "Analysis of digital onboarding, leadership development, role-specific technical training, and AI-driven skill modules for employee growth",
      link: "https://www.cloudthat.com/resources/blog/top-10-effective-employee-training-programs-for-2025-to-future-proof-your-workforce/",
    },
    {
      author: "dev",
      date: "2025-11-20",
      title:
        "Guides to Mastering In-Demand Tech Skills",
      description: "Hands-on approaches with bootcamps, project-based learning, open-source, tech communities, and portfolio-building",
      link: "https://dev.to/dareyio/15-in-demand-tech-skills-to-learn-in-2025-1od0",
    },
    {
      author: "pluralsight",
      date: "2025-11-20",
      title:
        "Cloud Skills with Interactive Labs and Tests",
      description: "In-depth advice for developing AWS and Azure proficiency via hands-on labs, certification routes, and multi-cloud training",
      link: "https://www.pluralsight.com/resources/blog/upskilling/top-tech-skills-2025-with-tests",
    },
    {
      author: "pluralsight",
      date: "2025-11-20",
      title:
        "IT Career Advancement Strategies",
      description: "Five actionable ways to grow your tech career: earning certifications, joining communities, building projects, and targeting leadership roles",
      link: "https://www.pluralsight.com/resources/blog/business-and-leadership/5-ways-advance-tech-career",
    },
    {
      author: "sap",
      date: "2025-11-20",
      title:
        "Custom Approaches to Skill Building",
      description: "How programs use cross-skilling, mentorship, peer learning, e-learning, and workshops—demonstrating varied approaches, not just future skills",
      link: "https://www.sap.com/lithuania/resources/upskilling-and-reskilling-the-workforce",
    },
    {
      author: "staragile",
      date: "2025-11-20",
      title:
        "Skill-Specific IT Course Recommendations",
      description: "List and details of top IT courses for 2025 in cyber security, AI, blockchain, DevOps, data science, automation, and more",
      link: "https://staragile.com/blog/top-10-it-courses-for-tech-professional-in-2025",
    },
    {
      author: "coursera",
      date: "2025-11-20",
      title:
        "High-Income Skills Focus (Non-trend-centric)",
      description: "Seven high-income skills to add to your CV today—practical skills for immediate career impact, not just future projections",
      link: "https://www.coursera.org/in/articles/high-income-skills",
    },
    {
      author: "agilemania",
      date: "2025-11-20",
      title:
        "Technical Skills Demand and Learning Paths",
      description: "Overview of the IT skills most in demand (DevOps, software development, data analytics) and how to learn them for 2025 job opportunities",
      link: "https://agilemania.com/top-it-skills-in-demand",
    },
    // {
    //   author: "mckinsey",
    //   date: "2025-11-20",
    //   title:
    //     "We Are All Techies Now — Digital skill building for the future",
    //   link: "https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/we-are-all-techies-now-digital-skill-building-for-the-future",
    // },
    // {
    //   author: "weforum",
    //   date: "2025-11-20",
    //   title:
    //     "Future of Jobs Report 2025",
    //   link: "https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf",
    // },
    // {
    //   author: "hiringbranch",
    //   date: "2025-11-20",
    //   title:
    //     "Upskilling and Reskilling — Strategies and case examples",
    //   link: "https://www.hiringbranch.com/blog/upskilling-and-reskilling",
    // },
    // {
    //   author: "techademy",
    //   date: "2025-11-20",
    //   title:
    //     "The Top 10 Must-Know Technologies for Your Workforce in 2025",
    //   link: "https://enterprise.techademy.com/resources/blogs/the-top-10-must-know-technologies-for-your-workforce-in-2025/",
    // },
    // {
    //   author: "sganalytics",
    //   date: "2025-11-20",
    //   title:
    //     "10 Most High-Demand Skills for the Future",
    //   link: "https://www.sganalytics.com/blog/10-most-high-demand-skills-for-the-future/",
    // },
    // {
    //   author: "toggl",
    //   date: "2025-11-20",
    //   title:
    //     "Most In-Demand Skills — Career growth focus",
    //   link: "https://toggl.com/blog/most-in-demand-skills",
    // },
    // {
    //   author: "huroorkee",
    //   date: "2025-11-20",
    //   title:
    //     "High-Demand Skills for the Next 10 Years",
    //   link: "https://huroorkee.ac.in/blog/high-demand-skills-for-the-next-10-years/",
    // },
    // {
    //   author: "linkedin learning",
    //   date: "2025-11-20",
    //   title:
    //     "Upskilling and Reskilling — Professional learning resources",
    //   link: "https://learning.linkedin.com/resources/upskilling-and-reskilling/upskilling",
    // },
    // {
    //   author: "promptpersonnel",
    //   date: "2025-11-20",
    //   title:
    //     "Upskilling & Reskilling in 2025 — In-demand learning and development courses",
    //   link: "https://www.promptpersonnel.com/upskilling-reskilling-in-2025-in-demand-learning-and-development-courses/",
    // },
    // {
    //   author: "coursera",
    //   date: "2025-11-20",
    //   title:
    //     "Key IT Skills for Your Career",
    //   link: "https://www.coursera.org/in/articles/key-it-skills-for-your-career",
    // },
  ];



  return (
    <div className="bg-[linear-gradient(0deg,rgba(160,125,241,0.2),rgba(246,157,186,0.2))] pl-[1px] lg:block flex h-full lg:max-h-[calc(100vh-74px)]">
      <aside
        className="
      flex lg:flex flex-col justify-between gap-4 p-2
      dark:bg-black bg-[#F6F6F6] h-full dark:text-white text-black
      lg:overflow-hidden overflow-y-auto   /* <-- mobile scroll */
    "
      >
        {/* Colleges section */}
        <div className="rounded-xl p-4 lg:py-2 lg:h-2/5">
          <h4 className="text-lg font-bold bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] bg-clip-text text-transparent mb-6 text-center">Colleges</h4>
          <CollegeCarousel />
          <div className="mt-2 ml-2">
            <Link
              href="/dashboard/collegefinder"
              className="text-xs text-[#d396f7] underline hover:underline"
            >
              Show more
            </Link>
          </div>
        </div>

        {/* Articles section */}
        <div className="p-4 lg:h-3/5">
          <h4 className="text-lg font-bold bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] bg-clip-text text-transparent mb-6 text-center">
            Education trends
          </h4>
          <ul className="space-y-6 text-sm lg:overflow-y-auto max-h-70 pr-2 hide-scroll">
            {articles.map((article, index) => (
              <li key={index}>
                <div className="flex items-center justify-between text-[10px] space-y-2 dark:text-white/50 text-black mb-1">
                  <Link href={article.link} target="_blank" rel="noopener noreferrer" className="underline flex hover:text-purple-400">{article.author}<ArrowUpRight className="w-3 h-3" /></Link>
                  <span>{article.date}</span>
                </div>
                <div className=" dark:text-white text-black leading-snug">
                  <span className="text-[12px]">{article.title}</span>
                  <br />
                  <span className="text-[10px] italic dark:text-white/80 text-black/80">{article.description}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Link href="#" className="text-xs text-[#d396f7] underline hover:underline">
              See Full List
            </Link>
          </div>
        </div>
      </aside>
    </div>


  );
}
