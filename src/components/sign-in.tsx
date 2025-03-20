"use client";
import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

const Signin = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button
      onClick={() => {
        signIn("google", {
          redirectTo: "/dashboard",
        });
      }}
      variant={"default"}
    >
      {children}
    </Button>
  );
};

export default Signin;
