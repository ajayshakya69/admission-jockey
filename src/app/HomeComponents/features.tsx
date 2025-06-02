// components/KeyFeatures.tsx
"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export default function KeyFeatures() {
  return (
    <section className="bg-black text-white min-h-screen py-16 ">
      <h2 className="md:text-4xl text-2xl font-bold text-center lg:mb-20 mb-10">Key Features</h2>

      <Tabs defaultValue="application" className="max-w-6xl mx-auto">
        {/* Top Button Row */}
        <TabsList className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-4 lg:mb-8 bg-transparent">
          <TabsTrigger
            value="application"
            className="rounded-lg px-6 sm:px-8 py-5 sm:py-6 bg-gradient-to-b from-[#ffffff0d] to-[#ffffff04] border-t border-[#ffffff14] text-white w-full sm:w-auto text-center"
          >
            Application Builder
          </TabsTrigger>
          <TabsTrigger
            value="dates"
            className="rounded-lg px-6 sm:px-8 py-5 sm:py-6 bg-gradient-to-b from-[#ffffff0d] to-[#ffffff04] border-t border-[#ffffff14] text-white w-full sm:w-auto text-center"
          >
            Important Dates
          </TabsTrigger>
          <TabsTrigger
            value="alumni"
            className="rounded-lg px-6 sm:px-8 py-5 sm:py-6 bg-gradient-to-b from-[#ffffff0d] to-[#ffffff04] border-t border-[#ffffff14] text-white w-full sm:w-auto text-center"
          >
            Meet the Alumni
          </TabsTrigger>
        </TabsList>


        {/* Tab Content */}
        <div className="bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] border-transparent rounded-lg p-[1px] lg:mt-0 mt-30">
          <TabsContent value="application">
            <div className="bg-black rounded-lg lg:py-10 py-5 px-5 lg:px-15 flex lg:flex-row flex-col-reverse gap-6 ">
              <div className="flex-1">
                <h3 className="lg:text-3xl text-lg font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] mb-2">Application Builder</h3>
                <p className="text-white font-semibold my-4 lg:text-base text-sm">Nail Every Application With AI</p>
                <p className="text-gray-300 mb-4 text-sm lg:text-base">
                  From SOPs to resumes, Alumna.ai helps you write, polish, and submit standout
                  applications — fast and stress-free.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm lg:text-base">
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
                    <CardContent className="bg-black rounded-lg p-2 space-y-2">
                      <span className="text-sm text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">Build My Application Now</span>
                    </CardContent>
                  </div>
                </Card>
              </div>
              <div className="lg:w-100 w-full h-80 bg-[#ffffff1a] rounded-lg"></div>
            </div>
          </TabsContent>

          <TabsContent value="dates">
            <div className="bg-black  rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-2">Important Dates Calendar</h3>
              <p className="text-gray-400">Coming soon: Stay on track with application deadlines!</p>
            </div>
          </TabsContent>

          <TabsContent value="alumni">
            <div className="bg-black  rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-2">Meet the Alumni</h3>
              <p className="text-gray-400">Connect with successful alumni and learn from their journeys.</p>
            </div>
          </TabsContent>
        </div>

      </Tabs>
    </section>
  );
}
