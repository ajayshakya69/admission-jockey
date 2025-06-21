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
    <Card className=" dark:bg-gradient-to-l dark:from-[#ffffff06] dark:via-[#ffffff02] dark:to-[#ffffff06] bg-gradient-to-l from-white via-white to-white rounded-[8px] overflow-hidden lg:h-[435px] h-[350px] py-0 shadow-[0_0_10px_6px_rgba(142,142,142,0.15)] dark:shadow-none ">
      <CardContent className="p-0">
        {/* College Image */}
        <div className="relative lg:h-[208px] h-[165px] w-full overflow-hidden rounded-t-[8px]">
          <Image src={college.image || "/placeholder.svg"} alt={college.name} fill className="object-cover" />
        </div>

        {/* College Info */}
        <div className="p-4">
          {/* College Name */}
          <h3 className="lg:text-xl text-lg font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] lg:mb-4 mb-2">{college.name}</h3>

          {/* Description */}
          <p className="dark:text-gray-300 text-black lg:text-sm text-xs lg:leading-relaxed lg:mb-6 mb-2 line-clamp-4">{college.description}</p>

          {/* Reference Code Section */}
          <div className="space-y-3 flex justify-between place-items-center mb-4">
            <div>
              <p className="dark:text-gray-400 text-[#00000087] text-xs font-medium">Use Reference Code</p>
              <p className="dark:text-gray-300  text-[#00000064] text-sm italic">{college.referenceCode}</p>
            </div>

            {/* Apply Button */}
            <a
              href={college.link}
              target="_blank"
              rel="noopener noreferrer"
            >
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
