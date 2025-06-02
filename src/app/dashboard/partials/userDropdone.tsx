/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WnsbaUM5X3e
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { BellRing, MessageCirclePlus, User } from "lucide-react";

export default function UserDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <div className="flex flex-col items-center gap-1">
            <div className="h-1 w-1 rounded-full bg-muted-foreground" />
            <div className="h-1 w-1 rounded-full bg-muted-foreground" />
            <div className="h-1 w-1 rounded-full bg-muted-foreground" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        sideOffset={8}
        className=" border-t border-[#ffffff36] text-white "
      >
        <DropdownMenuItem>
          {" "}
          <Button
            className="px-6 py-2 rounded-lg font-semibold text-white text-base 
             bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] 
             border-t border-[#ffffff36] 
             shadow-[0_0_11px_0_rgba(160,125,241,0.3)] 
             hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCirclePlus />
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          {" "}
          <button className="rounded-full h-10 w-10 bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] flex items-center justify-center  ">
            <User />
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          {" "}
          <button className="rounded-full flex items-center justify-center h-10 w-10 p-[1px] bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
            <div className="rounded-full h-full w-full bg-black flex justify-center items-center">
              <BellRing className="h-[18px] text-[#f2acc3] " />
            </div>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
