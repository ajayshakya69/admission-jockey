"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSupabase } from "@/services/supabase/supabase.hook";
import { LogOut, User } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";


export function UserDropDown() {
  const { logout } = useSupabase();
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none w-full">
        <div className="flex justify-between place-items-center w-full">
          <span className="lg:hidden">User</span>
          <div className="rounded-full flex items-center justify-center lg:h-10 lg:w-10 w-[32px] h-[32px] p-[1px] bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
            <div className="rounded-full h-full w-full flex justify-center items-center outline-none">
              <User className="h-[22px] text-white" />
            </div>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" lg:mt-2 lg:mr-3 mr-10 dark:bg-black bg-white border border-gray-700 outline-none">
        <Link href="/dashboard/profile">
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span className="dark:text-white text-black">Profile</span>
          </DropdownMenuItem>
        </Link>

        <DropdownMenuItem
          onClick={async () => {
            logout();
            router.push("/login");
          }}
          className="text-red-600"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
