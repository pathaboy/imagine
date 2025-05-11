import React from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { displayVideos } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThumbnailCard } from "@/components/thumbnail-card";

const Home = async () => {
  const session = await auth();
  // console.log(videos);

  return (
    <div>
      <Hero />
      <section className="w-full p-4 my-8">
        <h2 className="text-4xl text-white font-medium text-center">
          {session?.user?.email ? "My videos" : "User Generated Videos"}
        </h2>
        <div className="mt-8 flex justify-center flex-wrap gap-8">
          {session?.user?.email ? (
            <Link
              href={"/my-videos"}
              className="px-4 py-2 rounded-sm text-white bg-primary hover:bg-blue-600"
            >
              Go to my videos &rarr;
            </Link>
          ) : (
            displayVideos.map((item, index) => {
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
            })
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
