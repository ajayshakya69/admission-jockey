'use client';

import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
    question: string;
    answer: string;
}

const faqItems: FaqItem[] = [
    {
        question: "How does Alumna.ai work?",
        answer:
            "It’s an AI counselor that chats with you, understands your profile and emotions, and gives personalized college suggestions, application help, and alumni connections.",
    },
    {
        question: "Is it really free?",
        answer:
            "Yes, it’s completely free for students — no hidden charges.",
    },
    {
        question: "Who is it for?",
        answer:
            "Students in Classes 11–12, recent pass-outs, and anyone exploring colleges, courses, internships, or job opportunities.",
    },
    {
        question: "How is this different from search engines or portals?",
        answer:
            "Alumna.ai gives personalized, emotionally-aware guidance — not just lists. It feels like talking to a smart, helpful friend who understands your journey.",
    },
];

const Faq: React.FC = () => {
    return (
        <div className="lg:min-h-screen dark:text-white text-black relative">
            <section className="relative z-10 lg:py-20 py-15">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="lg:text-[40px] text-[20px] font-bold">FAQs</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4 lg:mt-20 mt-10">
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                value={`item-${index}`}
                                key={index}
                                className="fancy-border mx-auto pb-2"
                            >
                                <AccordionTrigger className="text-left text-sm lg:text-lg font-medium dark:text-white text-black hover:no-underline flex items-center justify-between">
                                    <span>{item.question}</span>
                                </AccordionTrigger>

                                <AccordionContent className="dark:text-[#ffffffc7] text-black lg:text-base text-sm lg:mt-2">
                                    {item.answer || "Answer coming soon..."}
                                </AccordionContent>

                                {/* <div className="h-[2px] w-6xl mt-4 bg-[radial-gradient(closest-side,#A07DF1_0%,#F69DBA_50%,transparent_100%)]" /> */}
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </div>
    );
};

export default Faq;
