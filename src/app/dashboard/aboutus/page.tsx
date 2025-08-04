"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Globe2, Users } from "lucide-react";
import AboutUsFooter from "../partials/aboutUsFooter";

const focusItems = [
    {
        title: "Foundational Model for Education",
        description:
            "Building a phase-wise architecture tailored to academic ecosystems.",
    },
    {
        title: "Student Empowerment",
        description:
            "Delivering intelligent guidance, career planning, and emotional insight through contextual AI.",
    },
    {
        title: "Institutional Transformation",
        description:
            "Equipping universities and colleges with actionable analytics and branding support.",
    },
    {
        title: "Cultural Integration",
        description:
            "Infusing identity into digital learning through language models that speak in context—literally and figuratively.",
    },
    {
        title: "Other Digital Transformation initiatives backed by AI",
        description: "",
    },
];

const relevanceItems = [
    {
        title: "AI-powered student engagement",
        description:
            "Sentiment and affective computing to personalize learning paths.",
    },
    {
        title: "Institutional dashboards",
        description:
            "Real-time analytics for decision-makers in higher education.",
    },
    {
        title: "Culturally contextual LLMs",
        description:
            "Language models that reflect regional identity and linguistic nuance.",
    },
    {
        title: "Secure data ecosystems",
        description:
            "Protecting student and institutional data with ethical AI frameworks.",
    },
];

export default function AboutUs() {
    return (
        <div className="flex flex-col min-h-screen dark:bg-gradient-b dark:from-[#000000b0] dark:via-[#000000b0] dark:to-[#000000b0] bg-gradient-to-b from-[#F6F6F6] via-[#fef4f7] to-[#efeafe] dark:text-white text-black lg:space-y-30 space-y-20">
            <section className="lg:mt-20 mt-5 lg:px-30 px-5">
                <h1 className="text-[24px] lg:text-[32px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] mb-6 sm:mb-10">
                    About Us
                </h1>
                <span className="space-y-5 sm:space-y-8 text-sm sm:text-base leading-relaxed">
                    <p>
                        Decacorn Edutech Pvt Limited is a pioneering education technology startup on a mission to transform higher education through culturally aligned, ethically grounded AI solutions. Co-founded by visionaries committed to redefining student engagement and institutional advancement, Decacorn Edutech blends cutting-edge large language models with affective computing and sentiment engines to deliver personalized, data-rich experiences across the academic lifecycle.
                    </p>
                    <p>
                        We are building our ability to harness AI technologies to drive end-to-end digital reinvention across processes, products, and experiences. This capability goes beyond automation—it enables intelligent decision-making, hyper-personalization, and adaptive systems that evolve with user needs.
                    </p>
                </span>
            </section>

            <section className="lg:mt-20 lg:px-30 px-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-y-4 gap-y-10">
                    <div>
                        <h2 className="text-[24px] sm:text-[32px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] lg:mb-6 mb-2">
                            Our Focus
                        </h2>
                    </div>

                    {focusItems.map((item, index) => (
                        <Card
                            key={index}
                            className="bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] shadow-[0_0_10px_6px_rgba(142,142,142,0.05)] dark:shadow-none flex text-black dark:text-white rounded-sm"
                        >
                            <CardContent className="p-5 sm:p-6 sm:px-10 space-y-5 sm:space-y-10">
                                <h3 className="font-semibold text-lg sm:text-[20px] mb-1 sm:mb-2">{item.title}</h3>
                                {item.description && (
                                    <p className="text-sm sm:text-base dark:text-gray-300 leading-relaxed">{item.description}</p>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="lg:mt-20 lg:px-30 px-5">
                <h2 className="text-[24px] sm:text-[32px] font-semibold mb-10 sm:mb-25 text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
                    Why Alumna.ai?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-30 md:gap-40 mx-auto">
                    <div className="flex flex-col items-center text-center px-2 sm:px-4">
                        <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 mb-4 sm:mb-8 text-[#b77df1]" />
                        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-5">Ethical First</h3>
                        <p className="text-sm sm:text-base">
                            Privacy, data security, and transparent AI practices are non-negotiable.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center px-2 sm:px-4">
                        <Globe2 className="w-8 h-8 sm:w-10 sm:h-10 mb-4 sm:mb-8 text-[#b77df1]" />
                        <h3 className="text-base sm:text-[20px] font-semibold mb-3 sm:mb-5">
                            Designed for India,<br />Built for the World
                        </h3>
                        <p className="text-sm sm:text-base">
                            Localization meets scalability as Alumna.ai expands globally while honoring its roots.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center px-2 sm:px-4">
                        <Users className="w-8 h-8 sm:w-10 sm:h-10 mb-4 sm:mb-8 text-[#b77df1]" />
                        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-5">Team-Centric Culture</h3>
                        <p className="text-sm sm:text-base">
                            Workspace alignment, thematic design, and collaborative dynamics make innovation sustainable.
                        </p>
                    </div>
                </div>
            </section>

            <section className="lg:mt-20 lg:pb-10 lg:px-30 px-5">
                <h2 className="text-[24px] sm:text-[32px] font-semibold mb-10 sm:mb-12 text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
                    Relevance to Alumna.ai
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-15 gap-y-6 sm:gap-y-10">
                    {relevanceItems.map((item, index) => (
                        <Card
                            key={index}
                            className="bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] shadow-[0_0_10px_6px_rgba(142,142,142,0.05)] dark:shadow-none rounded-sm dark:text-white text-black"
                        >
                            <CardContent className="px-6 py-4 sm:px-8 sm:py-6">
                                <h3 className="font-semibold text-lg sm:text-[20px] mb-2 sm:mb-3">{item.title}</h3>
                                <p className="text-sm sm:text-base">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <AboutUsFooter />
        </div>
    )
}