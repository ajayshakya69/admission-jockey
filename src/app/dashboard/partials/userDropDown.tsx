"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSupabase } from "@/services/supabase/supabase.hook";
import { LogOut, User } from "lucide-react";
import { useRouter } from "next/navigation";

export function DropdownMenuDemo() {
  const { logout } = useSupabase();
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <User />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
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
