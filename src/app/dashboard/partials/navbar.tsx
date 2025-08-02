"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/app/(components)/themetoggle";
import NotificationDropdown from "./notification.dropdown";
import { UserDropDown } from "./userDropDown";
import { ChevronDown, Menu, MoreVertical, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Animate in/out
  useEffect(() => {
    if (menuOpen) {
      setShowMenu(true);
    } else {
      const timeout = setTimeout(() => setShowMenu(false), 400); // match duration
      return () => clearTimeout(timeout);
    }
  }, [menuOpen]);

  const isActive = (path: string, exact = true) => {
    return exact
      ? pathname === path
        ? "font-semibold bg-clip-text text-transparent bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]"
        : "hover:text-[#00000095] dark:hover:text-[#ffffffa6] transition-all"
      : pathname.startsWith(path)
        ? "font-semibold bg-clip-text text-transparent bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]"
        : "hover:text-[#00000095] dark:hover:text-[#ffffffa6] transition-all";
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="lg:bg-[linear-gradient(90deg,rgba(160,125,241,0.2),rgba(246,157,186,0.2))] bg-transparent lg:pb-[1px]">
        <div className="bg-white dark:bg-black flex justify-between place-items-center px-4 py-3 md:px-8 md:py-4 lg:h-[72px] h-[70px]">

          {/* Left: Hamburger on mobile */}
          <button className="md:hidden dark:text-white text-black" onClick={() => setMenuOpen(true)}>
            <Menu className="w-7 h-7" />
          </button>

          {/* Center Logo */}
          <div className="flex-grow text-center md:text-left">
            <div className="inline-block mt-1">
              <Link href="/">
                <Image
                  src="/01logo.png"
                  alt="Logo"
                  width={150}
                  height={50}
                  className="dark:block hidden mx-auto"
                />
                <Image
                  src="/lightlogo.png"
                  alt="Logo"
                  width={150}
                  height={50}
                  className="dark:hidden block mx-auto"
                />
              </Link>
            </div>
          </div>

          {/* Right: Dots on mobile */}
          <div className="md:hidden relative">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreVertical className="dark:text-white text-black w-6 h-6" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="right"
                align="start"
                className="dark:bg-black bg-white dark:text-white text-black border dark:border-white/20 border-black/10 mt-10 rounded-xl shadow-lg animate-slideInRight transition-all duration-300 ease-in-out p-1"
              >
                <DropdownMenuItem className="w-full flex items-center gap-3 py-2 px-4">
                  <ThemeToggle />
                  <span className="text-sm">Theme</span>
                </DropdownMenuItem>

                <DropdownMenuItem className="w-full flex items-center gap-3 py-2 px-4">
                  <NotificationDropdown />
                  <span className="text-sm">Notifications</span>
                </DropdownMenuItem>

                <DropdownMenuItem className="w-full flex items-center gap-3 py-2 px-4">
                  <div className="rounded-full h-8 w-8 bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] flex items-center justify-center">
                    <UserDropDown />
                  </div>
                  <span className="text-sm">User</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>


          {/* Desktop Nav */}
          <nav className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex gap-8 text-black dark:text-white font-medium text-sm items-center">
              <Link href="/dashboard" className={isActive("/dashboard")}>
                Home
              </Link>
              <Link href="/dashboard/aboutus" className={isActive("/dashboard/aboutus")}>
                About Us
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`flex items-center gap-1 outline-none ${isActive("/dashboard/calender", false)} ${isActive("/dashboard/introForm", false)}`}
                >
                  Features <ChevronDown className="w-4 h-4 dark:text-white text-black" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-black">
                  <Link href="/dashboard/alumini">
                    <DropdownMenuItem className="dark:hover:bg-black">
                      Alumini
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/dashboard/calender">
                    <DropdownMenuItem className="dark:hover:bg-black">
                      Calender
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/dashboard/introForm">
                    <DropdownMenuItem className="dark:hover:bg-black">
                      Application Builder
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`flex items-center gap-1 outline-none ${isActive("/dashboard/onlineCollege", false)} ${isActive("/dashboard/collegefinder", false)}`}
                >
                  College <ChevronDown className="w-4 h-4 dark:text-white text-black" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-black">
                  <Link href="/dashboard/onlineCollege">
                    <DropdownMenuItem className="dark:hover:bg-black">
                      Online College
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/dashboard/collegefinder">
                    <DropdownMenuItem className="dark:hover:bg-black">
                      College Finder
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/dashboard/courses" className={isActive("/dashboard/courses")}>
                E-learning
              </Link>

              <Link href="/dashboard/addresume" className={isActive("/dashboard/addresume")}>
                Jobs
              </Link>
            </div>
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden md:flex gap-5">
            <ThemeToggle />
            <NotificationDropdown />
            <div className="rounded-full h-10 w-10 bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] flex items-center justify-center">
              <UserDropDown />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {showMenu && (
        <div
          className={`
      fixed inset-0 z-50 transition-all duration-500 ease-in-out
      ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}
      backdrop-blur-sm backdrop-saturate-150 dark:bg-black/90 bg-white/80
    `}
        >
          <div className="p-6">
            <button
              className="mb-10 dark:text-white/80 text-black/80"
              onClick={() => setMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col mt-10 gap-8 text-xl text-center font-semibold tracking-widest dark:text-white/80 text-black/80">
              <Link href="/dashboard" onClick={() => setMenuOpen(false)}>HOME</Link>
              <Link href="/dashboard/aboutus" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
              <Link href="/dashboard/alumini" onClick={() => setMenuOpen(false)}>ALUMINI</Link>
              <Link href="/dashboard/calender" onClick={() => setMenuOpen(false)}>CALENDER</Link>
              <Link href="/dashboard/introForm" onClick={() => setMenuOpen(false)}>APPLICATION BUILDER</Link>
              <Link href="/dashboard/onlineCollege" onClick={() => setMenuOpen(false)}>ONLINE COLLEGE</Link>
              <Link href="/dashboard/collegefinder" onClick={() => setMenuOpen(false)}>COLLEGE FINDER</Link>
              <Link href="/dashboard/courses" onClick={() => setMenuOpen(false)}>E-LEARNING</Link>
              <Link href="/dashboard/addresume" onClick={() => setMenuOpen(false)}>JOBS</Link>
            </div>
          </div>
        </div>
      )}


    </header>
  );
}
