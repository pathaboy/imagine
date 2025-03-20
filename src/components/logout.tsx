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
    >
      <LogOut className="w-5" />
    </button>
  );
};

export default Logout;
