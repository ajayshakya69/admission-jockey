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

export function UserDropDown() {
  const { logout } = useSupabase();
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <User />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" mt-3 bg-black border border-gray-700">
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span className="text-white">Profile</span>
        </DropdownMenuItem>

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
