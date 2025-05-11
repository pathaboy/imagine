import React from "react";
import { Clapperboard } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
          <Clapperboard className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white leading-none tracking-tighter">
          Text to Video Generator
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
