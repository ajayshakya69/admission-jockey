import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";
import InputBar from "@/app/dashboard/partials/inputBar";

const AlumniCard = () => (
  <Card className="bg-gradient-to-b from-[#111] to-[#000] border border-zinc-800 text-white rounded-xl shadow-md">
    <CardContent className="px-5 py-5 flex flex-col items-center text-center gap-4">
      <div className="flex items-center justify-around w-full gap-5">
        <div className="w-20 h-20 flex-1">
          {" "}
          <div className="w-20 h-20 bg-zinc-300 rounded-full "></div>{" "}
        </div>
        <div className="text-left flex-2">
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
            Aarav Sharma
          </h3>
          <p className=" text-zinc-400">2023 Passout</p>
        </div>
      </div>

      <p className="md:text-xl text-[16px] text-left text-white">
        “Curriculum is industry-relevant and helped me land my first job. Labs
        and coding culture were top-notch.”
      </p>
      <div className="flex items-center justify-between w-full mt-2">
        <div className=" flex flex-col gap-2">
          <div className="flex items-center gap-1 text-[#D0A3F8]">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 text-zinc-600" />
            <Star className="w-4 h-4 text-zinc-600" />
            <Star className="w-4 h-4 text-zinc-600" />
          </div>
          <p className="text-[15px] text-zinc-500">30 connected uptil now</p>
        </div>
        <button className="rounded-[5px] flex items-center justify-center w-20 h-10 text-sm p-[1px] bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
          <div className="rounded-[5px] h-full w-full bg-black flex justify-center items-center">
            View
          </div>
        </button>
      </div>
    </CardContent>
  </Card>
);

const AlumniCardGrid = () => {
  return (
    <div className="flex flex-col max-h-screen relative " >
      {/* Scrollable main content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center bg-black/60 backdrop-blur-sm">
    <p className="text-md md:text-xl font-semibold">Soon you'll be chatting with your future seniors</p>
    <h2 className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] my-2">
      — STAY CONNECTED!
    </h2>
    <div className="lg:w-100 w-60 h-[1px] my-10 bg-[#fffcfc94]"></div>
    <p className="text-sm md:text-lg text-zinc-300">
      <span className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
        Hey Alumnis
      </span>
      <br />
      Join our alumni network to stay connected<br className="hidden md:block" />
      and inspire the next generation.
    </p>
    <Link href="/dashboard/register" className="w-full">
    <button className="mt-6 px-6 py-2 rounded-md bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] text-white text-sm font-medium">
      Register
    </button>
    </Link>
  </div>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10"></div>

      <div className="flex-1 overflow-y-auto px-4 text-white text-center bg-black">
        <div className="flex flex-col items-center justify-center min-h-[90%]">
          <h1 className="text-xl md:text-3xl font-bold mb-2">
            Graphic Era, Dehradun Alumnis
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
            800
          </h2>
          <p className="text-zinc-400 text-lg mb-10">Results</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <AlumniCard />
            <AlumniCard />
            <AlumniCard />
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
};

export default AlumniCardGrid;
