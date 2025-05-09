import React from "react";
import Logo from "./logo";
import Signin from "./sign-in";
import Image from "next/image";
import { UserIcon } from "lucide-react";
import { auth } from "@/auth";

const Header = async () => {
  const session = await auth();
  return (
    <header className="p-4 md:p-8 flex justify-between items-center">
      <Logo />
      {session?.user?.email ? (
        <Image
          src={session.user.image || ""}
          alt="user avatar"
          width={40}
          height={40}
          className="border border-white/20 rounded-full md:w-14 md:h-14"
        />
      ) : (
        <Signin>Sign in</Signin>
      )}
    </header>
  );
};

export default Header;
