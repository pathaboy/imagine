"use client";
import React from "react";
import Logo from "./logo";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center">
      <Logo />
      <Button>Get Started</Button>
    </header>
  );
};

export default Header;
