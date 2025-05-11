"use client";
import { LogOut } from "lucide-react";
import React from "react";
import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <button
      onClick={() => {
        signOut({
          redirectTo: "/",
        });
      }}
      className="w-full p-2 bg-red-300/30 flex justify-center items-center gap-2 rounded-lg"
    >
      <p className="text-md font-medium">Logout</p>
      <LogOut className="w-4 text-red-500" />
    </button>
  );
};

export default Logout;
