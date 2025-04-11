import { auth } from "@/auth";
import VideoCard from "@/components/video-card";
import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

const VideoCardDetails = [
  {
    id: 1,
    style: "Stories",
    backgroundImageSource: "/assets/images/jp-girl-8.jpg",
    url: "/stories",
  },
];

const MyVideos = async () => {
  const session = await auth();
  if (!session?.user?.email) {
    redirect("/");
  }
  const videos = await prisma.video.findMany({
    where: {
      user: {
        id: session.user.id,
      },
    },
  });

  return (
    <div className="w-full max-w-5xl mx-auto h-full flex justify-start items-start gap-6 md:gap-8 flex-wrap p-4">
      {videos &&
        videos.map((item, index) => {
          return (
            <Link href={`/videos?videoid=${item.id}`} key={index}>
              <ThumbnailCard
                backgroundImage={"/assets/images/jp-girl-8.jpg"}
                createdAt={"20/07/2002"}
                title={item.title || "Temporary title"}
              />
            </Link>
          );
        })}
    </div>
  );
};

export default MyVideos;

interface ThumbnailCardProps {
  backgroundImage: string;
  title: string;
  createdAt: string;
}
interface ThumbnailCardProps {
  backgroundImage: string;
  title: string;
  createdAt: string;
}

const ThumbnailCard = ({
  backgroundImage,
  title,
  createdAt,
}: ThumbnailCardProps) => {
  return (
    <div
      className="relative cursor-pointer w-full sm:w-[400px] aspect-video rounded-md overflow-hidden shadow-md"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="absolute bottom-0 p-4 text-white z-10">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-300">{createdAt}</p>
      </div>
    </div>
  );
};
