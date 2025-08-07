import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const alumniList = [
  {
    name: "Shantanu Garg",
    college: "Graphic Era (Deemed to be University)",
    course: "B.Tech (C.S.E with AI)",
    passout: "2025",
    img: "/alumni/profilepic/shantanu.png",
  },
  {
    name: "Naman Khedwal",
    college: "Graphic Era (Deemed to be University)",
    course: "B.Tech (C.S.E with AI/ML)",
    passout: "2025",
    img: "/images/alumni/naman-khedwal.jpg",
  },
  {
    name: "Ayush Sharma",
    college: "Graphic Era (Deemed to be University)",
    course: "B.Tech (C.S.E)",
    passout: "2025",
    img: "/images/alumni/ayush-sharma.jpg",
  },
  {
    name: "Deepanshu Dangre",
    college: "Bharati Vidyapeeth college of engg.",
    course: "B.Tech (E.C.E with C.S.E)",
    passout: "2024",
    img: "/alumni/profilepic/deepanshu.png",
  },
  {
    name: "Farha Ansari",
    college: "2500+ successful counseling done",
    course: "Senior Career Counsellor",
    passout: "",
    img: "/alumni/profilepic/farhaansari.jpg",
  },
  {
    name: "Parnika Ingole",
    college: "Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded",
    course: "B.Tech (C.S.E)",
    passout: "2024",
    img: "/images/alumni/parnika-ingole.jpg",
  },
  {
    name: "Yash Ahuja",
    college: "Indian Institute of Technology, Roorkee",
    course: "B.Tech (E.P)",
    passout: "2023",
    img: "/images/alumni/yash-ahuja.jpg",
  },
  {
    name: "Ishika Jain",
    college: "Shri Guru Gobind Singh College of Commerce",
    course: "Bcom",
    passout: "2025",
    img: "/images/alumni/ishika-jain.jpg",
  },
  {
    name: "Ujjwal Jindal",
    college: "Maharaja Agrasen Institute of Technology, Delhi",
    course: "B.Tech (C.S.E)",
    passout: "2023",
    img: "/alumni/profilepic/ujjwal.png",
  },
  {
    name: "Vatsal Singh",
    college: "Delhi Technological University",
    course: "B.Des",
    passout: "2024",
    img: "/images/alumni/vatsal-singh.jpg",
  },
  {
    name: "Manvi Sharma",
    college: "Bhai Parmanand DSEU, Shakarpur Campus",
    course: "BBA BFSI",
    passout: "2025",
    img: "/images/alumni/manvi-sharma.jpg",
  },
  {
    name: "Sujan Kotiyan",
    college: "Christ University, Bangalore",
    course: "BBA (hons.)",
    passout: "2025",
    img: "/images/alumni/sujan-kotiyan.jpg",
  },
];

const AlumniCard = ({ alumni }: { alumni: typeof alumniList[0] }) => (
  <Card className="dark:bg-gradient-to-b from-[#111] to-[#000] dark:border border-zinc-800 text-white rounded-xl shadow-md min-h-[250px] flex flex-col justify-between">
    <CardContent className="px-5 py-4 flex flex-col items-center text-center gap-4 h-full">
      <div className="flex items-center justify-around w-full gap-5">
        <div className="w-20 h-20 flex-1">
          <img
            src={alumni.img}
            alt={alumni.name}
            className="w-20 h-20 object-cover rounded-full border text-[10px] border-zinc-400"
          />
        </div>
        <div className="text-left flex-2">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] leading-tight">
            {alumni.name}
          </h3>
          <p className="text-zinc-400 text-sm">{alumni.passout} Passout</p>
        </div>
      </div>

      {/* Description section with fixed height & scroll */}
      <div className="text-sm md:text-base text-left dark:text-white text-black overflow-y-auto w-full pr-1 hide-scroll h-[80px]">
        <p className="mb-1 font-medium">{alumni.course}</p>
        <p className="text-zinc-400 text-[16px]">{alumni.college}</p>
      </div>

      <div className="flex justify-end w-full">
        <button className="rounded-[5px] flex items-center justify-center w-20 h-10 text-sm p-[1px] bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
          <div className="rounded-[5px] h-full w-full dark:bg-black bg-white dark:text-white text-black flex justify-center items-center">
            View
          </div>
        </button>
      </div>
    </CardContent>
  </Card>
);

const AlumniCardGrid = () => {
  return (
    <div className="flex flex-col lg:max-h-screen relative dark:bg-gradient-b dark:from-[#000000b0] dark:via-[#000000b0] dark:to-[#000000b0] bg-gradient-to-b from-[#F6F6F6] via-[#fef4f7] to-[#efeafe] ">
      <div className="inset-0 z-20 flex flex-col items-center px-4 text-center overflow-y-scroll hide-scroll pb-10 pt-5 lg:py-10">
        <p className="text-md md:text-xl dark:text-white text-black font-semibold">
          Soon you'll be chatting with your future seniors
        </p>
        <h2 className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] my-2">
          — STAY CONNECTED!
        </h2>
        <div className="h-[1px] lg:w-1/2 w-full dark:bg-[radial-gradient(closest-side,#FFFFFF_10%,#FFFFFF_10%,transparent_100%)] bg-[radial-gradient(closest-side,#000000_10%,#000000_10%,transparent_100%)] lg:my-10 my-5" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto lg:mb-10">
          {alumniList.map((alumni, index) => (
            <AlumniCard key={index} alumni={alumni} />
          ))}
        </div>

        <p className="text-sm md:text-lg dark:text-zinc-300 text-black lg:mt-0 mt-5">
          <span className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] mb-5">
            Hey Alumnis
          </span>
          <br />
          Join our alumni network to stay connected and inspire the next generation.
        </p>

        <Link href="/dashboard/register" className="w-full">
          <button className="mt-6 px-6 py-2 rounded-md bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] text-white text-sm font-medium">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AlumniCardGrid;
