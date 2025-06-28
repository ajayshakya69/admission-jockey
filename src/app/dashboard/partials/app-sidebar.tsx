"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";

import { navbarItems } from "../dashboard-constants";
import { NavMain } from "./nav-bar";
import Image from "next/image";
import Link from "next/link";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      variant={"sidebar"}
      {...props}
      className="bg-[var(--sidebar)] text-[var(--sidebar-foreground)]"

      // onCollapseChange={(isCollapsed) => setExpanded(!isCollapsed)}
    >
      <SidebarHeader className="w-full h-10 mt-6 flex items-center justify-center">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-gray-900 data-[state=open]:text-gray-400 hover:bg-transparent"
            >
              <Link
                href="/"
                className="flex aspect-square items-center justify-center rounded-lg  text-sidebar-primary-foreground"
              >
                {state === "expanded" ? (
                  <div className=" ml-2">
                    <Image src="/01logo.png" alt="Logo" width={225} height={100} className="dark:block hidden" />
                    <Image src="/lightlogo.png" alt="Logo" width={225} height={100} className="dark:hidden block" />
                  </div>
                ) : (
                  <div>
                    <Image
                    src="/miniLogo.png"
                    alt="Icon"
                    width={100}
                    height={100}
                  />
                  </div>
                  
                )}
              </Link>
              {/* <ChevronsUpDown className="ml-auto" /> */}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navbarItems} />
      </SidebarContent>
      {/* <SidebarFooter className=" h-20">
        <Link href="/store/settings">
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-gray-900 data-[state=open]:text-gray-400"
          >
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <Settings2 className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{"Settings"}</span>
            </div>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </Link>
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  );
}
