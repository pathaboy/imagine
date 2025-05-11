"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Logout from "./logout";
import Link from "next/link";
import { useState } from "react";
import { navitems } from "@/lib/nav-items";

export const UserInfo = () => {
  const session = useSession();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex flex-col gap-1 relative">
      <button
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        {session.data?.user?.image ? (
          <Image
            src={session.data?.user?.image}
            alt="user avatar"
            width={40}
            height={40}
            className="border cursor-pointer border-white/20 rounded-lg aspect-square md:w-14 md:h-14"
            priority={false}
          />
        ) : (
          <div className="w-[40px] h-[40px] md:w-14 md:h-14 rounded-lg bg-gray-800" />
        )}
      </button>
      {showMenu && (
        <div className="w-36 sm:text-xl sm:w-40 flex flex-col z-10 absolute right-0 max-lg:bg-gray-800 top-11 sm:top-14 max-sm p-2 xl:p-0 rounded-lg">
          <ul className="lg:hidden flex flex-col gap-1">
            {navitems.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="w-full cursor-pointer hover:bg-secondary p-2"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-2">
            <Logout />
          </div>
        </div>
      )}
    </div>
  );
};
