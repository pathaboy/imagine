import Link from "next/link";

interface VideoCardProps {
  style: string;
  url: string;
  backgroundImageSource: string;
}

const VideoCard = ({ backgroundImageSource, style, url }: VideoCardProps) => {
  return (
    <Link href={url}>
      <div
        className="relative cursor-pointer w-full sm:w-[400px] aspect-video rounded-md overflow-hidden shadow-md group"
        style={{
          backgroundImage: `url(${backgroundImageSource})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300" />

        <div className="absolute bottom-0 w-full bg-black/60 py-2 text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight px-4">
            {style}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
