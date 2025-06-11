// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { AlignJustify, Users, ClipboardList, Calendar1, BookMarked, BriefcaseBusiness } from "lucide-react";
// import { MdDashboard } from "react-icons/md";

// export default function DropMenu() {
//     return (
//         <div>
//             <DropdownMenu>
//                 <DropdownMenuTrigger><AlignJustify/></DropdownMenuTrigger>
//                 <DropdownMenuContent className="mt-4 bg-gradient-to-b text-white from-[#000000] via-[#2f2f2f3e] to-[#292929af] border-t border-[#ffffff28]">  
//                 <DropdownMenuItem>
//                         <a href="/dashboard" className="flex items-center">
//                             <MdDashboard className="text-xl" />
//                         </a>
//                     </DropdownMenuItem>
//                     <DropdownMenuItem>
//                         <a href="/dashboard/alumini" className="flex items-center">
//                             <Users className="text-xl" />
//                         </a>
//                     </DropdownMenuItem>
//                     <DropdownMenuItem>
//                         <a href="/dashboard/introForm" className="flex items-center">
//                             <ClipboardList className="text-xl" />
//                         </a>
//                     </DropdownMenuItem>
//                     <DropdownMenuItem>
//                         <a href="/dashboard/calender" className="flex items-center">
//                             <Calendar1 className="text-xl" />
//                         </a>
//                     </DropdownMenuItem>
//                     <DropdownMenuItem>
//                         <a href="/dashboard/courses" className="flex items-center">
//                             <BookMarked className="text-xl" />
//                         </a>
//                     </DropdownMenuItem>
//                     <DropdownMenuItem>
//                         <a href="/dashboard/addresume" className="flex items-center">
//                             <BriefcaseBusiness className="text-xl" />
//                         </a>
//                     </DropdownMenuItem>
//                 </DropdownMenuContent>
//             </DropdownMenu>
//         </div>
//     )
// }"use client";
"use client";

import { useState } from "react";
import {
    Users,
    ClipboardList,
    Calendar,
    BookMarked,
    Briefcase,
    MessageSquare,
    ChevronRight,
    ChevronLeft,
    Menu,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
    const [expanded, setExpanded] = useState(false);

    const navItems = [
        { icon: <Users size={20} />, label: "Alumni", href: "/dashboard/alumini" },
        { icon: <ClipboardList size={20} />, label: "Application Builder", href: "/dashboard/introForm" },
        { icon: <Calendar size={20} />, label: "Calendar", href: "/dashboard/calender" },
        { icon: <BookMarked size={20} />, label: "Courses", href: "/dashboard/courses" },
        { icon: <Briefcase size={20} />, label: "Jobs", href: "/dashboard/addresume" },
        { icon: <MessageSquare size={20} />, label: "Chat History", href: "#" },
    ];

    return (
        <>
            {/* Mobile menu button (no functionality yet) */}
            <button
                className="md:hidden fixed top-5 left-4 z-50 bg-[#ffffff0d]  text-white p-2 rounded-sm shadow-md"
                onClick={() => console.log("Menu clicked")}
            >
                <Menu size={26} />
            </button>

            {/* Sidebar only visible on md and above */}
            <div
                className={`hidden md:block relative h-screen text-white transition-all duration-300 ease-in-out 
                ${expanded ? "w-[268px]" : "w-[111px]"} bg-gradient-to-r
                from-[#fffdfd06] via-black to-[#fffdfd06]`}
            >
                {/* Logo */}
                <div className="flex items-center justify-center h-16 mt-3">
                    <Link href="/dashboard">
                        {expanded ? (
                            <Image src="/logo.jpg" alt="Logo" width={200} height={100} />
                        ) : (
                            <Image src="/miniLogo.png" alt="Icon" width={45} height={45} />
                        )}
                    </Link>
                </div>

                {/* Nav Items */}
                <nav
                    className={`flex flex-col mt-4 px-2 transition-all duration-300 ${expanded ? "items-start space-y-8" : "items-center space-y-6"
                        }`}
                >
                    {navItems.map((item, i) => (
                        <Link
                            key={i}
                            href={item.href}
                            className={`flex flex-col items-center text-sm hover:text-purple-300 transition-all duration-200 px-5 ${expanded ? "flex-row justify-start gap-4 items-center" : "gap-1"
                                }`}
                        >
                            <span className="min-w-[20px] ml-2">{item.icon}</span>
                            {expanded ? (
                                <span className="whitespace-nowrap">{item.label}</span>
                            ) : (
                                <span className="text-[10px] text-center">{item.label}</span>
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Divider */}
                {expanded && <hr className="fancy-border-new my-4 mx-4" />}

                {/* Floating Toggle Button */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="absolute -right-5 top-6 z-20 w-10 h-10 rounded-full bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] text-white flex items-center justify-center shadow-md"
                >
                    {expanded ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                </button>
            </div>
        </>
    );
}
