interface ThumbnailCardProps {
  backgroundImage: string;
  title: string;
  createdAt: string;
}

export const ThumbnailCard = ({
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
