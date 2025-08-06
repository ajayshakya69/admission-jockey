// components/KeyFeatures.tsx
"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export default function KeyFeatures() {
  return (
    <section className="dark:bg-black bg-transparent text-white min-h-screen py-16 ">
      <h2 className="md:text-4xl text-2xl font-bold text-center lg:mb-20 mb-10 dark:text-white text-black">Key Features</h2>

      <Tabs defaultValue="application" className="max-w-6xl mx-auto">
        {/* Top Button Row */}
        <TabsList className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-4 lg:mb-15 bg-transparent">
          <TabsTrigger
            value="application"
            className="rounded-lg data-[state=active]:bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] data-[state=active]:text-white lg:w-[198px] px-6 sm:px-8 py-5 sm:py-6 bg-gradient-to-b from-[#f0f0f003] to-[#eaeaea0a] border-t border-[#0000003f] dark:from-[#ffffff0d] dark:to-[#ffffff04] dark:border-t dark:border-[#ffffff14] text-black dark:text-white w-full sm:w-auto text-center shadow-[0_0_24px_8px_rgba(199,211,234,0.25)] dark:shadow-none "
          >
            Application Builder
          </TabsTrigger>
          <TabsTrigger
            value="dates"
            className="rounded-lg data-[state=active]:bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] data-[state=active]:text-white lg:w-[198px] px-6 sm:px-8 py-5 sm:py-6 bg-gradient-to-b from-[#f0f0f003] to-[#eaeaea0a] border-t border-[#0000003f] dark:from-[#ffffff0d] dark:to-[#ffffff04] dark:border-t dark:border-[#ffffff14] text-black dark:text-white w-full sm:w-auto text-center shadow-[0_0_24px_8px_rgba(199,211,234,0.25)] dark:shadow-none "
          >
            Important Dates
          </TabsTrigger>
          <TabsTrigger
            value="alumni"
            className="rounded-lg data-[state=active]:bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] data-[state=active]:text-white lg:w-[198px] px-6 sm:px-8 py-5 sm:py-6 bg-gradient-to-b from-[#f0f0f003] to-[#eaeaea0a] border-t border-[#0000003f] dark:from-[#ffffff0d] dark:to-[#ffffff04] dark:border-t dark:border-[#ffffff14] text-black dark:text-white w-full sm:w-auto text-center shadow-[0_0_24px_8px_rgba(199,211,234,0.25)] dark:shadow-none "
          >
            Search Jobs
          </TabsTrigger>
        </TabsList>


        {/* Tab Content */}
       <div className="bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] border-transparent rounded-lg p-[1px] lg:mt-0 mt-30 shadow-[0_0_20px_6px_rgba(199,211,234,0.15)] dark:shadow-[0_0_20px_6px_rgba(255,255,255,0.1)]">


          <TabsContent value="application">
            <div className="dark:bg-black bg-[#FEFEFE] rounded-lg lg:py-8 py-5 px-5 lg:px-5 flex lg:flex-row flex-col-reverse">
              <div className="lg:w-1/2 w-full flex flex-col justify-center lg:pl-10">
          <h3 className="lg:text-[32px] text-[16px] font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] mb-2">Application Builder</h3>
          <p className="dark:text-white text-black font-semibold my-4 lg:text-base text-sm">Nail Every Application With AI</p>
          <p className="dark:text-white text-black mb-4 text-sm lg:text-base">
            From SOPs to resumes, Alumna.ai helps you write, polish, and submit standout
            applications — fast and stress-free.
          </p>
          <ul className="list-disc list-inside dark:text-white text-black space-y-2 text-sm lg:text-base">
            <li>
              <strong>SOP & LOR Drafts</strong> — AI-generated, reviewed, and optimized for impact.
            </li>
            <li>
              <strong>Resume Assistant</strong> — Tailored resumes for college, internships, or job roles.
            </li>
            <li>
              <strong>Auto-Fill Applications</strong> — Save time and reduce errors with smart autofill for forms.
            </li>
          </ul>
          <Card className=" lg:w-60 text-center shadow-none bg-transparent rounded-lg">
            <div className="p-[1px]  bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] rounded-lg">
              <CardContent className="dark:bg-black bg-[#FEFEFE] rounded-lg p-2 space-y-2">
                <span className="text-sm text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">Build My Application Now</span>
              </CardContent>
            </div>
          </Card>
              </div>
              <div className="lg:w-1/2 w-full lg:h-auto h-[270px] relative flex justify-center place-items-center">
              <div className="absolute w-[100%] h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl dark:opacity-20 opacity-40 rounded-full bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] z-0" />
          <img  src="/feature/Group1.png" alt="applicaton" className="w-full lg:scale-90  z-10 rounded-lg  " />

              </div>
            </div>
          </TabsContent>

          <TabsContent value="dates">
           <div className="dark:bg-black bg-[#FEFEFE] rounded-lg lg:py-8 py-5 px-5 lg:px-5 flex lg:flex-row flex-col-reverse">
              <div className="lg:w-1/2 w-full flex flex-col justify-center lg:pl-10">
          <h3 className="lg:text-[32px] text-base font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] mb-2">Important Dates</h3>
          <p className="dark:text-white text-black font-semibold my-4 lg:text-base text-sm">Stay on Track Without Stress</p>
          <p className="dark:text-white text-black  mb-4 text-sm lg:text-base">
            Never miss a deadline — Alumna.ai keeps you organized with smart reminders and a personalized calendar.
          </p>
          <ul className="list-disc list-inside dark:text-white text-black space-y-2 text-sm lg:text-base">
              <li>
              <strong>Deadline Alerts</strong> — Get notified for application dates, exams, and alumni meets.
              </li>
              <li>
              <strong>One-Click Sync</strong> — Add important events to your phone or Google Calendar instantly.
              </li>
              <li>
              <strong>Personalized Planner</strong> — Auto-schedule key tasks based on your application journey.
              </li>
          </ul>
          <Card className=" lg:w-[140px] text-center shadow-none bg-transparent rounded-lg">
            <div className="p-[1px]  bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] rounded-lg">
              <CardContent className="dark:bg-black bg-[#FEFEFE] rounded-lg p-2 space-y-2">
                <span className="text-sm text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">Add Dates</span>
              </CardContent>
            </div>
          </Card>
              </div>
              <div className="lg:w-1/2 w-full lg:h-auto h-[270px] relative flex justify-center place-items-center">
          <div className="absolute w-[100%] h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl dark:opacity-20 opacity-40 rounded-full bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] z-0" />
          <img  src="/feature/Group2.png" alt="applicaton" className="w-full lg:scale-90  z-10 rounded-lg " />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="alumni">
            <div className="dark:bg-black bg-[#FEFEFE] rounded-lg lg:py-8 py-5 px-5 lg:px-5 flex lg:flex-row flex-col-reverse">
              <div className="lg:w-1/2 w-full flex flex-col justify-center lg:pl-10">
          <h3 className="lg:text-[32px] text-base font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] mb-2">Job & Internship Finder</h3>
          <p className="dark:text-white text-black font-semibold my-4 lg:text-base text-sm">Opportunities, Tailored for You</p>
          <p className="dark:text-white text-black mb-4 text-sm lg:text-base">
            Discover the right roles with AI-matched internships and jobs based on your skills, interests, and goals.
          </p>
          <ul className="list-disc list-inside dark:text-white text-black space-y-2 text-sm lg:text-base">
              <li>
              <strong>Smart Matching</strong> — Get curated roles that align with your profile and aspirations.
              </li>
              <li>
              <strong>Auto-Apply Ready</strong> — One-click application support with pre-filled info and resume help.
              </li>
              <li>
              <strong>Skill-Fit Filters</strong> — Find what suits you from beginner-friendly internships to entry-level jobs.
              </li>
          </ul>
          <Card className="  lg:w-[140px] text-center shadow-none bg-transparent rounded-lg">
            <div className="p-[1px]  bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] rounded-lg">
              <CardContent className="dark:bg-black bg-[#FEFEFE] rounded-lg p-2 space-y-2">
                <span className="text-sm text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">Search Jobs</span>
              </CardContent>
            </div>
          </Card>
              </div>
              <div className="lg:w-1/2 w-full lg:h-auto h-[270px] relative flex justify-center place-items-center">
          <div className="absolute w-[100%] h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl dark:opacity-20 opacity-40 rounded-full bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] z-0" />
          <img  src="/feature/Group3.png" alt="applicaton" className="w-full lg:scale-90  z-10 rounded-lg" />
              </div>
            </div>
          </TabsContent>
        </div>

      </Tabs>
    </section>
  );
}
// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"

// interface FeatureData {
//   id: string
//   title: string
//   subtitle: string
//   description: string
//   features: string[]
//   buttonText: string
// }

// const featuresData: FeatureData[] = [
//   {
//     id: "application-builder",
//     title: "Application Builder",
//     subtitle: "Nail Every Application With AI",
//     description:
//       "From SOPs to resumes, Alumnoi helps you write, polish, and submit standout applications — fast and stress-free.",
//     features: [
//       "SOP & LOR Drafts — AI-generated, reviewed, and optimized for impact.",
//       "Resume Assistant — Tailored resumes for college, internships, or job roles.",
//       "Auto-Fill Applications — Save time and reduce errors with smart autofill for forms.",
//     ],
//     buttonText: "Build My Application Now",
//   },
//   {
//     id: "important-dates",
//     title: "Important Dates",
//     subtitle: "Stay on Track Without Stress",
//     description:
//       "Never miss a deadline — Alumnoi keeps you organized with smart reminders and a personalized calendar system.",
//     features: [
//       "Deadline Alerts — Get notified for application dates, exams, and interview rounds.",
//       "Calendar Integration — Sync important events to your phone or Google Calendar instantly.",
//       "Personalized Reminders — Auto-schedule key tasks based on your application journey.",
//     ],
//     buttonText: "Add Dates",
//   },
//   {
//     id: "Meet the Alumni",
//     title: "Meet the Alumni",
//     subtitle: "Opportunities, Tailored for You",
//     description:
//       "Discover the right roles with AI-matched internships and job based on your skills, interests, and career goals.",
//     features: [
//       "Smart Matching — Get curated roles that align with your profile and aspirations.",
//       "Skill-Fit Filters — Find positions that match your experience level, from beginner-friendly openings to dream roles.",
//     ],
//     buttonText: "Search Jobs",
//   },
// ]

// export default function KeyFeatures() {
//   const [activeFeature, setActiveFeature] = useState("application-builder")

//   const activeData = featuresData.find((f) => f.id === activeFeature) || featuresData[0]
//   const inactiveFeatures = featuresData.filter((f) => f.id !== activeFeature)

//   return (
//     <div className="w-full bg-black text-white min-h-screen p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">Key Features</h1>

//         {/* Navigation Buttons */}
//         <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center mb-8 md:mb-12">
//           {featuresData.map((feature) => (
//             <Button
//               key={feature.id}
//               onClick={() => setActiveFeature(feature.id)}
//               variant={activeFeature === feature.id ? "default" : "outline"}
//               className={`
//                 px-4 py-2 rounded-full text-sm md:text-base
//                 ${activeFeature === feature.id
//                   ? "bg-purple-600 hover:bg-purple-700 text-white"
//                   : "bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
//                 }
//               `}
//             >
//               {feature.title}
//             </Button>
//           ))}
//         </div>

//         {/* Cards Container */}
//         <div className="relative flex justify-center items-center min-h-[420px] md:min-h-[420px]">
//           {/* Mobile Layout */}
//           <div className="md:hidden w-full max-w-md">
//             <Card className="bg-gray-900 border-gray-700 text-white">
//               <CardContent className="p-6">
//                 <div className="space-y-6">
//                   <div>
//                     <h2 className="text-xl font-bold text-purple-400 mb-2">{activeData.title}</h2>
//                     <h3 className="text-lg font-semibold mb-4">{activeData.subtitle}</h3>
//                     <p className="text-gray-300 mb-6">{activeData.description}</p>
//                   </div>

//                   <ul className="space-y-3">
//                     {activeData.features.map((feature, index) => (
//                       <li key={index} className="text-sm text-gray-300">
//                         • {feature}
//                       </li>
//                     ))}
//                   </ul>

//                   <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
//                     {activeData.buttonText}
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Desktop Layout */}
//           <div className="hidden md:flex relative w-full justify-center items-center gap-8">
//             {/* Left side - Content */}
//             <div className="flex-1 max-w-2xl">
//               <div className="relative flex justify-center items-center min-h-[500px]">
//                 {/* Background Cards */}
//                 {featuresData.map((feature, index) => {
//                   if (feature.id === activeFeature) return null

//                   const activeIndex = featuresData.findIndex((f) => f.id === activeFeature)
//                   const currentIndex = index

//                   const isLeft = currentIndex < activeIndex
//                   const isRight = currentIndex > activeIndex

//                   let positionStyle = {}

//                   if (isLeft) {
//                     const leftCards = featuresData.filter((_, i) => i < activeIndex)
//                     const positionInLeft = leftCards.findIndex((card) => card.id === feature.id)

//                     positionStyle = {
//                       left: `${-200 - positionInLeft * 60}px`,
//                       zIndex: 1 + positionInLeft,
//                     }
//                   } else if (isRight) {
//                     const rightCards = featuresData.filter((_, i) => i > activeIndex)
//                     const positionInRight = rightCards.findIndex((card) => card.id === feature.id)

//                     positionStyle = {
//                       right: `${-200 - positionInRight * 60}px`,
//                       zIndex: 1 + positionInRight,
//                     }
//                   }

//                   return (
//                     <div
//                       key={feature.id}
//                       className="absolute transition-all duration-500 ease-in-out"
//                       style={positionStyle}
//                     >
//                       <Card className="w-72 h-[480px] bg-gray-800/50 border-gray-600 relative overflow-hidden">
//                         <CardContent className="p-0 h-full flex items-center justify-center">
//                           <div className="absolute inset-0 flex items-center justify-center">
//                             <h3
//                               className="text-base font-bold text-gray-400 text-center px-4"
//                               style={{
//                                 writingMode: "vertical-rl",
//                                 textOrientation: "mixed",
//                                 transform: "rotate(180deg)",
//                               }}
//                             >
//                               {feature.title}
//                             </h3>
//                           </div>
//                         </CardContent>
//                       </Card>
//                     </div>
//                   )
//                 })}

//                 {/* Active Card */}
//                 <Card className=" grid grid-cols-2 max-w-[1078px] h-[523px] bg-gray-900 border-gray-700 text-white relative z-10 transition-all duration-500 ease-in-out">
//                   <CardContent className="p-8 h-full flex flex-col justify-between">
//                     <div className="space-y-6">
//                       <div>
//                         <h2 className="text-2xl font-bold text-purple-400 mb-3">{activeData.title}</h2>
//                         <h3 className="text-xl font-semibold mb-4 text-white">{activeData.subtitle}</h3>
//                         <p className="text-gray-300 mb-6 leading-relaxed text-sm">{activeData.description}</p>
//                       </div>

//                       <ul className="space-y-4">
//                         {activeData.features.map((feature, index) => (
//                           <li key={index} className="text-sm text-gray-300 leading-relaxed">
//                             • {feature}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-6 py-3">
//                       {activeData.buttonText}
//                     </Button>
//                   </CardContent>
//                   <CardContent>
//                     <div className="flex-1 max-w-md">
//                       <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8 h-[400px] flex items-center justify-center">
//                         <div className="text-center text-gray-500">
//                           <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
//                             <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
//                               <path
//                                 fillRule="evenodd"
//                                 d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
//                                 clipRule="evenodd"
//                               />
//                             </svg>
//                           </div>
//                           <p className="text-sm">Interface Mockup</p>
//                           <p className="text-xs text-gray-600 mt-1">({activeData.title})</p>
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"

// const cardData = [
//   {
//     id: "card1",
//     title: "Application Builder",
//     content: "Helps with SOPs, Resumes, and Autofill.",
//   },
//   {
//     id: "card2",
//     title: "Important Dates",
//     content: "Stay on track with reminders and deadlines.",
//   },
//   {
//     id: "card3",
//     title: "Job Finder",
//     content: "Get matched to internships and jobs.",
//   },
// ]

// export default function KeyFeatures() {
//   const [activeId, setActiveId] = useState("card1")

//   const getZIndex = (id: string) => {
//     if (id === activeId) return "z-30"
//     return "z-10 scale-95"
//   }

//   return (
//     <div className="min-h-screen bg-black text-white p-6">
//       {/* Buttons */}
//       <div className="flex justify-center gap-4 mb-8">
//         {cardData.map((card) => (
//           <Button
//             key={card.id}
//             onClick={() => setActiveId(card.id)}
//             className={`${
//               activeId === card.id ? "bg-purple-600" : "bg-gray-700"
//             } text-white`}
//           >
//             {card.title}
//           </Button>
//         ))}
//       </div>

//       {/* Cards side by side */}
//       <div className="flex justify-center gap-6 relative">
//         {cardData.map((card) => (
//           <div
//             key={card.id}
//             className={`relative transition-all duration-500 ease-in-out transform ${getZIndex(
//               card.id
//             )}`}
//           >
//             <Card className="w-100 h-64 bg-gray-900 border-gray-700">
//               <CardContent className="p-6 flex flex-col justify-between h-full">
//                 <h2 className="text-xl font-bold text-purple-400">{card.title}</h2>
//                 <p className="text-sm text-gray-300">{card.content}</p>
//               </CardContent>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
