export interface College {
  id: number;
  name: string;
  slug?: string;
  image: string;
  description: string;
  referenceCode: string;
  link: string;
  highlights?: { title: string; value: string; description?: string }[];
  location?: string;
  type?: string;
  approvals?: string;
  overview?: string;
}

export const colleges: College[] = [
  {
    id: 1,
    name: "DBS Global University",
    slug: "dbs-global-university",
    image: "/collegeimg/dbs.png",
    description:
      "A top university in Dehradun for management and tech programs.",
    referenceCode: "Admission Jockey",
    link: "https://bit.ly/3CArR6k",
    location: "Dehradun",
    type: "Private",
    highlights: [
      { title: "Programs", value: "MBA, BBA, B.Tech" },
      { title: "Affiliation", value: "UGC Approved" },
    ],
  },
  {
    id: 2,
    name: "Shoolini University",
    slug: "shoolini-university",
    image: "/collegeimg/shoolini.png",
    description:
      "Top private university in Himachal for research-based programs.",
    referenceCode: "Admission Jockey",
    link: "https://bit.ly/AJ-Campus",
    location: "Solan",
    type: "Private",
    highlights: [
      { title: "Ranking", value: "Top 100 NIRF" },
      { title: "Focus", value: "Research-based learning" },
    ],
  },
  {
    id: 3,
    name: "UPES University",
    slug: "upes-university",
    image: "/collegeimg/upes.png",
    description:
      "Well-known for law, design, and engineering programs in Dehradun.",
    referenceCode: "Admission Jockey",
    link: "https://bit.ly/34xGzGv",
    location: "Dehradun",
    type: "Private",
    highlights: [
      { title: "Specialization", value: "Law, Design, Energy" },
      { title: "Accreditation", value: "NAAC A" },
    ],
  },
  {
    id: 4,
    name: "Global Institute of Business Studies (GIBS)",
    slug: "global-institute-of-business-studies",
    image: "/collegeimg/gi.png",
    description: "Bangalore-based business school with high placement support.",
    referenceCode: "GIBSIMC072013",
    link: "http://surl.li/cngboq",
  },
  {
    id: 5,
    name: "Woxsen University",
    slug: "woxsen-university",
    image: "/collegeimg/woxsen.png",
    description: "Innovative private university with global focus.",
    referenceCode: "Admission Jockey",
    link: "https://tinyurl.com/5d2bj8a6",
  },
  {
    id: 6,
    name: "Maya University",
    slug: "maya-university",
    image: "/collegeimg/dbs.png",
    description:
      "Emerging university offering a variety of undergraduate and PG programs.",
    referenceCode: "Admission Jockey",
    link: "https://bit.ly/3GADrjf",
  },
  {
    id: 7,
    name: "Quantum University (UG/PG)",
    slug: "quantum-university",
    image: "/collegeimg/quantum.png",
    description:
      "Offers UG and PG programs in tech and management. Separate links for both.",
    referenceCode: "Admission Jockey",
    link: "https://bitly.cx/nrTLL",
  },
  {
    id: 8,
    name: "RV University",
    slug: "rv-university",
    image: "/collegeimg/rv.png",
    description:
      "Renowned Bangalore university for liberal arts, tech, and law.",
    referenceCode: "Admission Jockey",
    link: "https://t.ly/XKLQS",
  },
  // {
  //   id: 9,
  //   name: "UIT University",
  //   slug: "uit-university",
  //   image: "/collegeimg/uit.png",
  //   description:
  //     "Engineering and management university in Dehradun. Reference Code - UU5E6B53",
  //   referenceCode: "UU5E6B53",
  //   link: "https://bit.ly/4jdQqq8",
  // },
  // {
  //   id: 10,
  //   name: "GEHU (Graphic Era Hill University)",
  //   slug: "gehu",
  //   image: "/collegeimg/gehu.png",
  //   description: "Popular for engineering and science programs in Uttarakhand.",
  //   referenceCode: "Admission Jockey",
  //   link: "https://link.gehu.ac.in/q7q1i3",
  // },
  // {
  //   id: 11,
  //   name: "GEU Deemed University",
  //   slug: "geu-deemed-university",
  //   image: "/collegeimg/geu.png",
  //   description: "Recognized deemed university for tech and business studies.",
  //   referenceCode: "Admission Jockey",
  //   link: "https://link.geu.ac.in/60c550",
  // },
  // {
  //   id: 12,
  //   name: "Shivalik University",
  //   slug: "shivalik-university",
  //   image: "/collegeimg/shivalik.png",
  //   description: "Modern university in Dehradun offering UG & PG courses.",
  //   referenceCode: "Admission Jockey",
  //   link: "https://tinyurl.com/ShivalikApply2025",
  // },
  // {
  //   id: 13,
  //   name: "UBS Business School",
  //   slug: "ubs-business-school",
  //   image: "/collegeimg/ubs.png",
  //   description:
  //     "Business school with strong industry tie-ups and international collaborations.",
  //   referenceCode: "Admission Jockey",
  //   link: "https://bit.ly/43bJZxL",
  // },
  // {
  //   id: 14,
  //   name: "RR Institutions",
  //   slug: "rr-institutions",
  //   image: "/collegeimg/rr.png",
  //   description:
  //     "Group of colleges in Bangalore offering engineering, MBA, and pharmacy.",
  //   referenceCode: "Admission Jockey",
  //   link: "https://admission.rrinstitutions.com/?CampaignSource=CPC/AJ/202&CampaignName=CPC/AJ/202",
  // },
  // {
  //   id: 15,
  //   name: "ITM Business School Mumbai",
  //   slug: "itm-business-school-mumbai",
  //   image: "/collegeimg/itm.png",
  //   description: "Top MBA college in Mumbai with strong ROI and placements.",
  //   referenceCode: "Admission Jockey",
  //   link: "http://sh.itm.edu/5b",
  // },
  // {
  //   id: 16,
  //   name: "Mayra University",
  //   slug: "mayra-university",
  //   image: "/collegeimg/mayra.png",
  //   description:
  //     "Private university with new-age programs in business and media.",
  //   referenceCode: "Admission Jockey",
  //   link: "https://tinyurl.com/mayraapply2025",
  // },
  // {
  //   id: 17,
  //   name: "Sparsh Global Business School",
  //   slug: "sparsh-global-business-school",
  //   image: "/collegeimg/sparsh.png",
  //   description:
  //     "Business school with modern curriculum and discount of Rs.350. Coupon - SGBSQSX791",
  //   referenceCode: "SGBSQSX791",
  //   link: "https://admissions.sparshgbs.in/",
  // },
  // {
  //   id: 18,
  //   name: "RIIM Pune",
  //   slug: "riim-pune",
  //   image: "/collegeimg/riim.png",
  //   description: "MBA-focused institute in Pune with strong placement record.",
  //   referenceCode: "Admission Jockey",
  //   link: "https://tinyurl.com/RIIMAPPLY2025",
  // },
  // {
  //   id: 19,
  //   name: "SGT University",
  //   slug: "sgt-university",
  //   image: "/collegeimg/sgt.png",
  //   description:
  //     "Gurgaon-based private university offering diverse programs. Reference Code - Admission Jockey",
  //   referenceCode: "Admission Jockey",
  //   link: "https://bit.ly/3DNBOO3",
  // },
  // {
  //   id: 20,
  //   name: "NIMS University Jaipur",
  //   slug: "nims-university-jaipur",
  //   image: "/collegeimg/nims.png",
  //   description: "Popular multidisciplinary university in Rajasthan.",
  //   referenceCode: "Admission Jockey",
  //   link: "https://admission.nimsuniversity.org/",
  // },
  // {
  //   id: 21,
  //   name: "VGU (Vivekananda Global University)",
  //   slug: "vivekananda-global-university",
  //   image: "/collegeimg/vgu.png",
  //   description:
  //     "Private university in Jaipur known for innovation and entrepreneurship.",
  //   referenceCode: "Admission Jockey",
  //   link: "https://tinyurl.com/VGUAPPLY2025",
  // },
  // {
  //   id: 22,
  //   name: "Sandip University",
  //   slug: "sandip-university",
  //   image: "/collegeimg/sandip.png",
  //   description:
  //     "Located in Nashik, Sandip offers courses in engineering, law, and management.",
  //   referenceCode: "Admission Jockey",
  //   link: "https://tinyurl.com/SUAPPLY2025",
  // },
];
