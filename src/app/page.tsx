import React from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { displayVideos } from "@/lib/data";
import Link from "next/link";

const Home = async () => {
  const session = await auth();
  const videos = session?.user?.email
    ? await prisma.video.findMany({
        where: {
          user: {
            id: session.user.id,
          },
        },
      })
    : displayVideos;

  // console.log(videos);

  return (
    <main className="max-w-6xl mx-auto">
      <Header />
      <Hero />
      <section className="w-full p-4 my-8">
        <h2 className="text-4xl text-white font-medium text-center">
          My Videos
        </h2>
        <div className="mt-8 flex justify-center flex-wrap gap-8">
          {videos.map((item, index) => {
            return (
              <Link key={index} href={`/videos?videoid=${item.id}`}>
                <ThumbnailCard
                  title={item.title || ""}
                  createdAt={item.createdAt.toLocaleString()}
                  backgroundImage={
                    "https://image.pollinations.ai/prompt/sijjin,hyper%20realistic?width=576&height=1024&nologo=true"
                  }
                />
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Home;

const MyVideos = () => {
  return (
    <section className="w-full py-4">
      <h2 className="text-3xl text-white font-medium text-center">My Videos</h2>
    </section>
  );
};

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
      className="relative cursor-pointer w-[80vw] sm:w-[400px] border-2 border-gray-500 rounded-xl aspect-video overflow-hidden shadow-md"
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
