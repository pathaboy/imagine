import React from "react";
import { Clapperboard } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
        <Clapperboard className="w-6 h-6 text-white" />
      </div>
      <h1 className="text-2xl font-bold text-white">imagine</h1>
    </div>
  );
};

export default Logo;
