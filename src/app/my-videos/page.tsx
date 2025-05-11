import React from "react";
import Header from "@/components/header";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ThumbnailCard } from "@/components/thumbnail-card";

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

  // console.log(videos);

  return (
    <section className="w-full p-4 my-8 max-w-4xl mx-auto">
      <div className="flex justify-start items-center">
        <Link href={"/"} className="text-xl text-white hover:text-primary">
          &larr; Home
        </Link>
      </div>
      <h2 className="text-4xl text-white font-medium text-center">My Videos</h2>
      <div className="mt-8 sm:mt-10 flex justify-center flex-wrap gap-8">
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
  );
};

export default MyVideos;
