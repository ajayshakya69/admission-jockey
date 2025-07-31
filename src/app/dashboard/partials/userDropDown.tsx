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
      <DropdownMenuTrigger>
        <User className="text-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" mt-3 dark:bg-black bg-white border border-gray-700 outline-none">
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
