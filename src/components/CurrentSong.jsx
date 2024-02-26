import { printArtists } from "@/functions/printArtists";

export const CurrentSong = ({ image, title, artists }) => {
  return (
    <div className="flex items-center gap-x-3 overflow-hidden p-3 hover:bg-[#242424] rounded-md">
      <picture className="size-20 shadow-lg rounded-md overflow-hidden">
        <img src={image} alt={title} />
      </picture>
      <div className="flex flex-col gap-y-3">
        <h3 className="font-semibold block ">{title}</h3>
        {artists && (
          <span className="text-xs">{printArtists(artists)}</span>
        )}
      </div>
    </div>
  );
};
