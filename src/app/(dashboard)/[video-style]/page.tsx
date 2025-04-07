import { redirect } from "next/navigation";

import VideoGenForm from "@/components/video-gen-form";
import { auth } from "@/auth";

const Dashboard = async () => {
  const session = await auth();
  if (!session?.user?.email) {
    redirect("/");
  }

  return (
    <div className="w-full max-w-5xl mx-auto h-full flex justify-center items-center">
      <VideoGenForm />
    </div>
  );
};

export default Dashboard;
