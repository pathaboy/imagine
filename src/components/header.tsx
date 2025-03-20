import React from "react";
import Logo from "./logo";
import Signin from "./sign-in";

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center">
      <Logo />
      <Signin>Generate &rarr;</Signin>
    </header>
  );
};

export default Header;
