"use client";

import { BellRing } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function NotificationDropdown() {
  const notifications: string[] = []; // Example: fetch or use state

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full flex items-center justify-center h-10 w-10 p-[1px] bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
          <div className="rounded-full h-full w-full dark:bg-black bg-white flex justify-center items-center">
            <BellRing className="h-[18px] text-[#f2acc3]" />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60 dark:bg-black bg-white text-white border border-neutral-800 mr-3">
        <DropdownMenuLabel className="dark:text-white text-black">
          Notifications
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-neutral-700" />
        {notifications.length === 0 ? (
          <DropdownMenuItem className="text-gray-400 cursor-default">
            No notifications
          </DropdownMenuItem>
        ) : (
          notifications.map((note, idx) => (
            <DropdownMenuItem
              key={idx}
              className="hover:bg-neutral-800 cursor-pointer"
            >
              {note}
            </DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
