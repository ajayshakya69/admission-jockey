"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import InputBar from "../partials/inputBar";

const courses = [
  {
    title: "The Data Science Course",
    description:
      "Complete Data Science Training: Math, Statistics, Python, Advanced...",
    learners: "126, 125 Learners",
    image: "/Image/dataengineer.png", // Replace with actual static files
    rating: 3,
  },
  {
    title: "The Data Science Course",
    description:
      "Complete Data Science Training: Math, Statistics, Python, Advanced...",
    learners: "126, 125 Learners",
    image: "/Image/dataanalytic.png",
    rating: 4,
  },
  {
    title: "The Data Science Course",
    description:
      "Complete Data Science Training: Math, Statistics, Python, Advanced...",
    learners: "126, 125 Learners",
    image: "/Image/datascience.png",
    rating: 4,
  },
];

export default function CourseCardsPage() {
  return (
    <div className="flex flex-col lg:px-15  h-[100%] overflow-hidden relative dark:bg-gradient-b dark:from-[#000000b0] dark:via-[#000000b0] dark:to-[#000000b0] bg-gradient-to-b from-[#F6F6F6] via-[#fef4f7] to-[#efeafe]">
      <div className="flex-1 overflow-y-auto custom-scroll px-4 text-white text-center">
        <div className="flex flex-col items-center justify-center min-h-[90%] gap-5">
          <h2 className="lg:text-[32px] text-base dark:text-white text-black font-bold text-center" >Pick a Course, Level Up Your Career</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {courses.map((course, i) => (
              <Card
                key={i}
                className="dark:bg-zinc-900 bg-[#ffffff] border dark:border-zinc-800 text-white p-0 shadow-[0_0_10px_6px_rgba(142,142,142,0.15)] dark:shadow-none"
              >
                <div className="w-full h-48 relative">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="rounded-t-md object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={i === 0}
                  />
                </div>
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold text-pink-300">
                    {course.title}
                  </h3>
                  <p className="text-sm dark:text-zinc-300 text-black">{course.description}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between p-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1 text-purple-400">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className={`w-4 h-4 ${index < course.rating
                              ? "fill-purple-500"
                              : "text-zinc-600"
                            }`}
                          fill={index < course.rating ? "#a78bfa" : "none"}
                        />
                      ))}
                    </div>
                    <div className="text-xs text-zinc-400">{course.learners}</div>
                  </div>
                  <Button
                    variant="outline"
                    className="bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] hover:brightness-80 hover:text-white"
                  >
                    View
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed bottom input */}
      <div className="bottom-5 flex lg:pb-10 lg:px-0 px-4">
        <div className="w-full mx-auto ">
          <InputBar />
        </div>
      </div>
    </div>
  );
}
