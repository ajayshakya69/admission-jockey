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
            "It uses a powerful foundation AI model trained on educational journeys, counsellor advice, and student data to give personalized recommendations in seconds",
    },
    {
        question: "Is it really free?",
        answer:
            "",
    },
    {
        question: "Who is it for?",
        answer:
            "",
    },
    {
        question: "How is this different from search engines or portals?",
        answer: "", // can be filled later
    },
];

const Faq: React.FC = () => {
    return (
        <div className="lg:min-h-screen text-white relative">
            <section className="relative z-10 lg:py-20 py-15">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="lg:text-[40px] text-[20px] font-medium">FAQs</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4 lg:mt-20 mt-10">
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                value={`item-${index}`}
                                key={index}
                                className="fancy-border mx-auto pb-2"
                            >
                                <AccordionTrigger className="text-left text-base lg:text-lg font-medium text-white hover:no-underline flex items-center justify-between">
                                    <span>{item.question}</span>
                                </AccordionTrigger>

                                <AccordionContent className="text-gray-400 mt-2">
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
