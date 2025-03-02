import Dashboard from "@/components/dashboard";
import Sidebar from "@/components/sidebar";
import { MyComposition } from "@/remotion/Composition";
import { Player } from "@remotion/player";
import React from "react";

const Home = () => {
  return (
    <main className="h-screen max-h-screen flex">
      <Sidebar />
      <Dashboard />
    </main>
  );
};

export default Home;
