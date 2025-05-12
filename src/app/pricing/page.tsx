import Pricing from "@/components/pricing";
import Link from "next/link";
import React from "react";

const PricingPage = () => {
  return (
    <div className="w-full p-4 my-8 max-w-4xl mx-auto">
      <div className="flex justify-start items-center">
        <Link href={"/"} className="text-xl text-white hover:text-primary">
          &larr; Home
        </Link>
      </div>
      <Pricing />
    </div>
  );
};

export default PricingPage;
