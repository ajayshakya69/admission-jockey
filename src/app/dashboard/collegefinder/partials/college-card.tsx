import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface College {
  id: number
  name: string
  image: string
  description: string
  referenceCode: string
  link: string
}

interface CollegeCardProps {
  college: College
}

export function CollegeCard({ college }: CollegeCardProps) {
  return (
    <Card className="dark:bg-gradient-to-l dark:from-[#ffffff06] dark:via-[#ffffff02] dark:to-[#ffffff06] bg-gradient-to-l from-white via-white to-white rounded-[8px] overflow-hidden lg:h-[400px] h-[300px] py-0 shadow-[0_0_10px_6px_rgba(142,142,142,0.15)] dark:shadow-none">
      <CardContent className="p-0 h-full flex flex-col">
        {/* College Image */}
        <div className="relative h-[165px] lg:h-[208px] w-full overflow-hidden rounded-t-[8px]">
          <Image src={college.image || "/placeholder.svg"} alt={college.name} fill className="object-cover" />
        </div>

        {/* College Info */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          {/* College Name */}
          <h3 className="text-lg lg:text-xl font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] mb-2 lg:mb-4">
            {college.name}
          </h3>

          {/* Scrollable Description */}
          <div className="text-black dark:text-gray-300 text-xs lg:text-sm leading-relaxed mb-3 overflow-y-auto max-h-[72px] pr-1 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent custom-scrollbar">
            {college.description}
          </div>

          {/* Reference + Button */}
          <div className="flex justify-between items-center">
            <div>
              <p className="dark:text-gray-400 text-[#00000087] text-xs font-medium">Use Reference Code</p>
              <p className="dark:text-gray-300 text-[#00000064] text-sm italic">{college.referenceCode}</p>
            </div>

            <a href={college.link} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] hover:brightness-75 text-white font-medium rounded-[8px] py-[12px] px-[29px]">
                Apply
              </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
