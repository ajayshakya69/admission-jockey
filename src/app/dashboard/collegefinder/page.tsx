"use client";

import { CollegeCard } from "./partials/college-card";
import { MoreInstitutions } from "./partials/more-institutions";
import { colleges } from "./partials/data";
<<<<<<< HEAD
import { useCollegeContext } from "@/app/providers/colleges/college.context";
import Loader from "@/components/ui/loader";
=======
>>>>>>> dev

export default function CollegesPage() {
  const { colleges, isLoading } = useCollegeContext();

  if (isLoading) return <Loader />;
  return (
    <div className="max-h-screen dark:text-white text-black dark:bg-gradient-b dark:from-[#000000b0] dark:via-[#000000b0] dark:to-[#000000b0] bg-gradient-to-b from-[#F6F6F6] via-[#fef4f7] to-[#efeafe] overflow-y-scroll hide-scroll">
      <div className="container mx-auto p-4 lg:px-0 lg:py-10 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-[18px] md:text-[24px] lg:text-[32px] font-bold text-center text-black dark:text-white mb-4">
            Your Gateway to India's Best <br className="lg:hidden block" />
            Colleges
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {colleges.map((college) => (
<<<<<<< HEAD
            <CollegeCard key={college.uniqueId} college={college} />
=======
            <CollegeCard key={college.id} college={college} />
>>>>>>> dev
          ))}

          <div className="md:col-span-1 lg:col-span-1">
            <MoreInstitutions />
          </div>
        </div>
      </div>
    </div>
  );
}
