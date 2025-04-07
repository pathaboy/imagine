import { auth } from "@/auth";
import VideoCard from "@/components/video-card";
import { redirect } from "next/navigation";

const VideoCardDetails = [
  {
    id: 1,
    style: "Stories",
    backgroundImageSource: "/assets/images/jp-girl-8.jpg",
    url: "/stories",
  },
];

const ExplorePage = async () => {
  const session = await auth();
  if (!session?.user?.email) {
    redirect("/");
  }

  return (
    <div className="w-full max-w-5xl mx-auto h-full flex justify-start items-start gap-6 md:gap-8 flex-wrap p-4">
      {VideoCardDetails.map((item, index) => {
        return <VideoCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default ExplorePage;
