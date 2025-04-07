import React from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Home = async () => {
  const session = await auth();
  if (session?.user?.email) {
    redirect("/explore");
  }
  return (
    <main className="max-w-7xl mx-auto">
      <Header />
      <Hero />
    </main>
  );
};

export default Home;
