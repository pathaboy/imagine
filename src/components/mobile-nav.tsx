import React from "react";
import Logo from "./logo";
import Signin from "./sign-in";
import { SidebarTrigger } from "./ui/sidebar";

const MobileNav = () => {
  return (
    <header className="sm:hidden p-4 flex justify-between items-center">
      <Logo />
      <SidebarTrigger />
    </header>
  );
};

export default MobileNav;
