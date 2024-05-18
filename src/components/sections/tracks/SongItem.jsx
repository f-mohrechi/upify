import React from "react";

export default function SongItem({ item, index }) {
  let song = item.track;

  const artistNames = song.artists.map((artist) => artist.name).join(", ");

  const msToTime = (duration) => {
    let seconds = Math.floor(duration / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    seconds = String(seconds).padStart(2, "0");

    return `${minutes}:${seconds}`;
  };

  let formattedTime = msToTime(song.duration_ms);

  return (
    <div className="grid grid-cols-12 items-center text-white font-medium px-3">
      {console.log(item, "item")}
      <div className="col-span-6 flex items-center gap-x-7">
        <p>{index + 1}</p>
        <div className="w-16 h-16">
          <img className="rounded-lg" src={song.album.images[0].url} alt="" />
        </div>

        <div className="flex flex-col items-start">
          <p className="text-lg">{song.name}</p>
          <p className="text-sm text-neutral-500">{artistNames}</p>
        </div>
      </div>
      <div className="col-span-4 ">
        <p className="text-base text-neutral-500">{song.album.name}</p>
      </div>

      <div className="col-span-2 flex justify-end">
        <p>{formattedTime}</p>
      </div>
    </div>
  );
}
