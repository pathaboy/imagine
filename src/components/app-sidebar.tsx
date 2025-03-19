"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import Logo from "./logo";
import {
  BadgeJapaneseYen,
  Calendar,
  Clapperboard,
  Home,
  Inbox,
  LogOut,
  Search,
  Settings,
  Video,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "My videos",
    url: "/my-videos",
    icon: Video,
  },
];

export function AppSidebar() {
  const { open } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Link href={"/"}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Clapperboard className="w-6 h-6 text-white" />
            </div>
            {open && <h1 className="text-2xl font-bold text-white">imagine</h1>}
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {items.map((item, index) => (
            <Link
              href={item.url}
              key={index}
              className="my-1 p-1 rounded-md hover:bg-gray-700"
            >
              <div className="flex items-center gap-2">
                <item.icon className="w-5 h-5 text-white" />
                {open && (
                  <span className="text-white text-sm">{item.title}</span>
                )}
              </div>
            </Link>
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center border hover:bg-secondary rounded-full p-1 gap-3">
          <div>
            <Image
              src={"/assets/images/jp-girl-8.jpg"}
              width={50}
              height={50}
              alt="user"
              className="rounded-full"
            />
          </div>

          {open && (
            <div className="flex flex-col">
              <span>Rajendra Patha</span>
              <div className="flex items-center gap-2">
                <BadgeJapaneseYen className="text-primary" />
                <span className="font-bold">20</span>
              </div>
            </div>
          )}
          {open && (
            <button>
              <LogOut className="w-5" />
            </button>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
