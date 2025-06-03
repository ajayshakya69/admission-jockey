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
    <div className="flex flex-col h-screen">

      <div className="flex-1 overflow-y-auto px-4 text-white text-center bg-black">
        <div className="flex flex-col items-center justify-start min-h-[90%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {courses.map((course, i) => (
              <Card
                key={i}
                className="bg-zinc-900 border border-zinc-800 text-white"
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  width={500}
                  height={350}
                  className="rounded-t-md mt-0"
                />
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold text-pink-300">
                    {course.title}
                  </h3>
                  <p className="text-sm text-zinc-300">{course.description}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-1 text-purple-400">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={`w-4 h-4 ${
                          index < course.rating
                            ? "fill-purple-500"
                            : "text-zinc-600"
                        }`}
                        fill={index < course.rating ? "#a78bfa" : "none"}
                      />
                    ))}
                  </div>
                  <div className="text-xs text-zinc-400">{course.learners}</div>
                  <Button
                    variant="outline"
                    className="border-purple-600 bg-pink-400  hover:bg-purple-600"
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
      <div className=" pb-20 shadow-md">
        <div className="w-full mx-auto">
          <InputBar />
        </div>
      </div>
    </div>
  );
}
