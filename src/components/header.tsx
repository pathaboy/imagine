import React from "react";
import Logo from "./logo";
import Signin from "./sign-in";
import Image from "next/image";
import { auth } from "@/auth";
import Logout from "./logout";
import { UserInfo } from "./user-info";
import { navitems } from "@/lib/nav-items";
import Link from "next/link";

const Header = async () => {
  const session = await auth();
  return (
    <header className="p-4 md:p-8 flex justify-between items-center">
      <Logo />
      <div className="flex justify-start items-center gap-8">
        <ul className="max-lg:hidden flex justify-center items-center gap-6">
          {navitems.map((item) => (
            <li key={item.id}>
              <Link href={item.href} className="text-lg hover:text-primary">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {session?.user?.email ? <UserInfo /> : <Signin>Sign in</Signin>}
      </div>
    </header>
  );
};

export default Header;
