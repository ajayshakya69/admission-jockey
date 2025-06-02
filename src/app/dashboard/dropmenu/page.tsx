import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AlignJustify, Users, ClipboardList, Calendar1, BookMarked, BriefcaseBusiness } from "lucide-react";
import { MdDashboard } from "react-icons/md";

export default function DropMenu() {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger><AlignJustify/></DropdownMenuTrigger>
                <DropdownMenuContent className="mt-4 bg-gradient-to-b text-white from-[#000000] via-[#2f2f2f3e] to-[#292929af] border-t border-[#ffffff28]">  
                <DropdownMenuItem>
                        <a href="/dashboard" className="flex items-center">
                            <MdDashboard className="text-xl" />
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <a href="/dashboard/alumini" className="flex items-center">
                            <Users className="text-xl" />
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <a href="/dashboard/introForm" className="flex items-center">
                            <ClipboardList className="text-xl" />
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <a href="/dashboard/calender" className="flex items-center">
                            <Calendar1 className="text-xl" />
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <a href="/dashboard/courses" className="flex items-center">
                            <BookMarked className="text-xl" />
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <a href="/dashboard/addresume" className="flex items-center">
                            <BriefcaseBusiness className="text-xl" />
                        </a>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}