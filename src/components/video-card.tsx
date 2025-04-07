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
        className={`cursor-pointer w-full sm:w-[400px] aspect-video rounded-md`}
        style={{
          backgroundImage: `url(${backgroundImageSource})`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="bg-black/60 text-5xl text-center font-bold text-white rounded-t-md tracking-tighter">
          {style}
        </h1>
      </div>
    </Link>
  );
};

export default VideoCard;
