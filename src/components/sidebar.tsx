import React from "react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="w-[15%] border border-black p-4">
      <Image
        src={"/assets/images/frame-flow.webp"}
        width={40}
        height={40}
        alt="frame-flow"
      />
    </div>
  );
};

export default Sidebar;
