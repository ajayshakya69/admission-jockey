"use client"

import { CollegeCard } from "./partials/college-card"
import { MoreInstitutions } from "./partials/more-institutions"

const colleges = [
  {
    id: 1,
    name: "DBS Global University",
    image: "/collegeimg/dbs.png",
    description:
      "A top university in Dehradun for management and tech programs.",
    referenceCode: "Admission Jockey",
    link: "https://bit.ly/3CArR6k",
  },
  {
    id: 2,
    name: "Shoolini University",
    image: "/collegeimg/shoolini.png",
    description:
      "Top private university in Himachal for research-based programs.",
    referenceCode: "Admission Jockey",
    link: "https://bit.ly/AJ-Campus",
  },
  {
    id: 3,
    name: "UPES University",
    image: "/collegeimg/upes.png",
    description:
      "Well-known for law, design, and engineering programs in Dehradun.",
    referenceCode: "Admission Jockey",
    link: "https://bit.ly/34xGzGv",
  },
  {
    id: 4,
    name: "Global Institute of Business Studies (GIBS)",
    image: "/collegeimg/gi.png",
    description:
      "Bangalore-based business school with high placement support.",
    referenceCode: "GIBSIMC072013",
    link: "http://surl.li/cngboq",
  },
  {
    id: 5,
    name: "Woxsen University",
    image: "/collegeimg/woxsen.png",
    description:
      "Innovative private university with global focus.",
    referenceCode: "Admission Jockey",
    link: "https://tinyurl.com/5d2bj8a6",
  },
  {
    id: 6,
    name: "Maya University",
    image: "/collegeimg/maya.png",
    description:
      "Emerging university offering a variety of undergraduate and PG programs.",
    referenceCode: "Admission Jockey",
    link: "https://bit.ly/3GADrjf",
  },
  {
    id: 7,
    name: "Quantum University (UG/PG)",
    image: "/collegeimg/quantum.png",
    description:
      "Offers UG and PG programs in tech and management. Separate links for both.",
    referenceCode: "Admission Jockey",
    link: "https://bitly.cx/nrTLL", // UG link shown
  },
  {
    id: 8,
    name: "RV University",
    image: "/collegeimg/rv.png",
    description:
      "Renowned Bangalore university for liberal arts, tech, and law.",
    referenceCode: "Admission Jockey",
    link: "https://t.ly/XKLQS",
  },
  {
    id: 9,
    name: "UIT University",
    image: "/collegeimg/uit.png",
    description:
      "Engineering and management university in Dehradun. Reference Code - UU5E6B53",
    referenceCode: "UU5E6B53",
    link: "https://bit.ly/4jdQqq8",
  },
  {
    id: 10,
    name: "GEHU (Graphic Era Hill University)",
    image: "/collegeimg/gehu.png",
    description:
      "Popular for engineering and science programs in Uttarakhand.",
    referenceCode: "Admission Jockey",
    link: "https://link.gehu.ac.in/q7q1i3",
  },
  {
    id: 11,
    name: "GEU Deemed University",
    image: "/collegeimg/geu.png",
    description:
      "Recognized deemed university for tech and business studies.",
    referenceCode: "Admission Jockey",
    link: "https://link.geu.ac.in/60c550",
  },
  {
    id: 12,
    name: "Shivalik University",
    image: "/collegeimg/shivalik.png",
    description:
      "Modern university in Dehradun offering UG & PG courses.",
    referenceCode: "Admission Jockey",
    link: "https://tinyurl.com/ShivalikApply2025",
  },
  {
    id: 13,
    name: "UBS Business School",
    image: "/collegeimg/ubs.png",
    description:
      "Business school with strong industry tie-ups and international collaborations.",
    referenceCode: "Admission Jockey",
    link: "https://bit.ly/43bJZxL",
  },
  {
    id: 14,
    name: "RR Institutions",
    image: "/collegeimg/rr.png",
    description:
      "Group of colleges in Bangalore offering engineering, MBA, and pharmacy.",
    referenceCode: "Admission Jockey",
    link: "https://admission.rrinstitutions.com/?CampaignSource=CPC/AJ/202&CampaignName=CPC/AJ/202",
  },
  {
    id: 15,
    name: "ITM Business School Mumbai",
    image: "/collegeimg/itm.png",
    description:
      "Top MBA college in Mumbai with strong ROI and placements.",
    referenceCode: "Admission Jockey",
    link: "http://sh.itm.edu/5b",
  },
  {
    id: 16,
    name: "Mayra University",
    image: "/collegeimg/mayra.png",
    description:
      "Private university with new-age programs in business and media.",
    referenceCode: "Admission Jockey",
    link: "https://tinyurl.com/mayraapply2025",
  },
  {
    id: 17,
    name: "Sparsh Global Business School",
    image: "/collegeimg/sparsh.png",
    description:
      "Business school with modern curriculum and discount of Rs.350. Coupon - SGBSQSX791",
    referenceCode: "SGBSQSX791",
    link: "https://admissions.sparshgbs.in/",
  },
  {
    id: 18,
    name: "RIIM Pune",
    image: "/collegeimg/riim.png",
    description:
      "MBA-focused institute in Pune with strong placement record.",
    referenceCode: "Admission Jockey",
    link: "https://tinyurl.com/RIIMAPPLY2025",
  },
  {
    id: 19,
    name: "SGT University",
    image: "/collegeimg/sgt.png",
    description:
      "Gurgaon-based private university offering diverse programs. Reference Code - Admission Jockey",
    referenceCode: "Admission Jockey",
    link: "https://bit.ly/3DNBOO3",
  },
  {
    id: 20,
    name: "NIMS University Jaipur",
    image: "/collegeimg/nims.png",
    description:
      "Popular multidisciplinary university in Rajasthan.",
    referenceCode: "Admission Jockey",
    link: "https://admission.nimsuniversity.org/",
  },
  {
    id: 21,
    name: "VGU (Vivekananda Global University)",
    image: "/collegeimg/vgu.png",
    description:
      "Private university in Jaipur known for innovation and entrepreneurship.",
    referenceCode: "Admission Jockey",
    link: "https://tinyurl.com/VGUAPPLY2025",
  },
  {
    id: 22,
    name: "Sandip University",
    image: "/collegeimg/sandip.png",
    description:
      "Located in Nashik, Sandip offers courses in engineering, law, and management.",
    referenceCode: "Admission Jockey",
    link: "https://tinyurl.com/SUAPPLY2025",
  },
]

export default function CollegesPage() {
  return (
    <div className="max-h-screen dark:text-white text-black dark:bg-gradient-b dark:from-[#000000b0] dark:via-[#000000b0] dark:to-[#000000b0] bg-gradient-to-b from-[#F6F6F6] via-[#fef4f7] to-[#efeafe] overflow-y-scroll hide-scroll">
      <div className="container mx-auto p-4 lg:px-0 lg:py-10 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-[18px] md:text-[24px] lg:text-[32px] font-bold text-center text-black dark:text-white mb-4">
        Your Gateway to India's Best <br className="lg:hidden block" />Colleges
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {colleges.map((college) => (
        <CollegeCard key={college.id} college={college} />
        ))}

        <div className="md:col-span-1 lg:col-span-1">
        <MoreInstitutions />
        </div>
      </div>
      </div>
    </div>
  )
}
