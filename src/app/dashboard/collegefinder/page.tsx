import { CollegeCard } from "./partials/college-card"
import { MoreInstitutions } from "./partials/more-institutions"

const colleges = [
  {
    id: 1,
    name: "DBS Global University",
    image: "/collegeimg/dbs.png",
    description:
      "DBS Global University in Dehradun stands as a beacon for creative dreamers, recognizing that those who dare to venture into uncharted territo...",
    referenceCode: "admission jockey",
    link: "https://www.dbuu.ac.in/admissions/",
  },
  {
    id: 2,
    name: "Shoolini University",
    image: "/collegeimg/shoolini.png",
    description:
      "A not-for-profit multi-disciplinary private university, Shoolini has a unique research and innovation-led model. We believe that a great un...",
    referenceCode: "admission jockey",
    link: "https://shooliniuniversity.com/admissions",
  },
  {
    id: 3,
    name: "UPES University",
    image: "/collegeimg/upes.png",
    description:
      "UPES offers graduate and postgraduate programs through its seven schools: School of Advanced Engineering, School of Computer Science, School...",
    referenceCode: "admission jockey",
    link: "https://www.upes.ac.in/apply",
  },
  {
    id: 4,
    name: "Global Institute of Business Studies",
    image: "/collegeimg/gi.png",
    description:
      "Global Institute of Business Studies (GIBS) is where talents are nurtured, ambitions cherished, and dreams transform...",
    referenceCode: "admission jockey",
    link: "https://www.gibs.edu.in/apply-online/",
  },
  {
    id: 5,
    name: "Woxsen University",
    image: "/collegeimg/woxsen.png",
    description:
      "Woxsen University's unique traits rest on the bedrock of innovative learning. Woxsen University has been designed to be a breeding ground for innova...",
    referenceCode: "admission jockey",
    link: "https://woxsen.edu.in/admissions/",
  },
]

export default function CollegesPage() {
  return (
    <div className="min-h-screen dark:text-white text-black dark:bg-gradient-b dark:from-[#000000b0] dark:via-[#000000b0] dark:to-[#000000b0] bg-gradient-to-b from-[#F6F6F6] via-[#fef4f7] to-[#efeafe]">
      <div className="container mx-auto p-4 lg:px-15">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[18px] md:text-[24px] lg:text-[32px] font-bold text-center text-black dark:text-white mb-4">
            Your Gateway to India's Best <br className="lg:hidden block" />Colleges
          </h1>
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {colleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}

          {/* More Institutions Card - positioned in the grid */}
          <div className="md:col-span-1 lg:col-span-1">
            <MoreInstitutions />
          </div>
        </div>
      </div>
    </div>
  )
}
