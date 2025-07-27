"use client"

import { CollegeCard } from "../collegefinder/partials/college-card"



const colleges = [
    {
        id: 1,
        name: "Graphic Era University",
        image: "/collegeimg/dbs.png",
        description:
            "Graphic Era University, we prepare you by providing a supportive, creative, and professional environment from which you can learn practical skills, build a network of industry contacts, and gain real-world experience. You’ll have the opportunity to generate innovative design and business solutions.More than 30 years of triumph and learnings, today Graphic Era Group of Institutions stand tall as a canopy of excellence.We take pride in grooming the students into building blocks of a well- groomed & educated society.We offer them a plethora of opportunities that enables them to find their niche and make a mark in the professional world.",
        referenceCode: "Admission Jockey",
        link: "https://link.geu.ac.in/cu8eit",
    },
    {
        id: 2,
        name: "Shoolini University",
        image: "/collegeimg/shoolini.png",
        description:
            "Shoolini University is a leader in outcome based higher education. Our online degree programs are designed to secure your future, first, and give your career a winning edge, be it through a great placement or selection in a leading international university. You only pay once your desired outcome is achieved.",
        referenceCode: "Admission Jockey",
        link: "https://tinyurl.com/ONLINESHOOLINIAPPLY2025",
    },
    {
        id: 3,
        name: "Amity University Online",
        image: "/collegeimg/dbs.png",
        description:
            "Amity University Online is India's first UGC-approved online university offering globally recognized online undergraduate, postgraduate, and certificate programs. Designed for working professionals and students, the platform provides the flexibility to advance education and careers without compromising existing commitments.",
        referenceCode: "Admission Jockey",
        link: "https://tinyurl.com/AMITYONLINEAPPLY2025",
    },
    {
        id: 4,
        name: "Manav Rachna Online",
        image: "/collegeimg/dbs.png",
        description:
            "With a network of prime recruiters worldwide, Manav Rachna Online offers expansive career opportunities to all its students. Our placement assistance team imparts constructive training to prepare the students to work with global organisations.",
        referenceCode: "Admission Jockey",
        link: "https://bit.ly/4gIJnEN",
    },
]

export default function CollegesPage() {
    return (
        <div className="max-h-screen overflow-y-scroll hide-scroll dark:text-white text-black dark:bg-gradient-b dark:from-[#000000b0] dark:via-[#000000b0] dark:to-[#000000b0] bg-gradient-to-b from-[#F6F6F6] via-[#fef4f7] to-[#efeafe]">
            <div className="container mx-auto p-4 lg:px-0 max-w-6xl lg:py-10">
                <div className="text-center mb-12">
                    <h1 className="text-[18px] md:text-[24px] lg:text-[32px] font-bold text-center text-black dark:text-white mb-4">
                        Your Gateway to India's Best <br className="lg:hidden block" /> Online Colleges
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {colleges.map((college) => (
                        <CollegeCard key={college.id} college={college} />
                    ))}
                </div>
            </div>
        </div>
    )
}
