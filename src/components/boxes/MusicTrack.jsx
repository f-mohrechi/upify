import React from "react";

export default function MusicTrack({ data }) {
  const artistNames = data.artists.map((artist) => artist.name).join(", ");

  // const releaseYear = data.release_date.substring(0, 4);

  const msToTime = (duration) => {
    let seconds = Math.floor(duration / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    seconds = String(seconds).padStart(2, "0");

    return `${minutes}:${seconds}`;
  };

  let formattedTime = msToTime(data.duration_ms);

  return (
    <div className="flex items-center gap-x-5 text-white">
      <div className="bg-neutral-600 bg-opacity-30 rounded-xl grid grid-cols-12 w-full items-center">
        <div className="w-20 h-20 col-span-1">
          <img
            className="rounded-xl"
            src={data?.album?.images[0]?.url}
            alt=""
          />
        </div>

        <div className="col-span-3">
          <p className="text-lg font-semibold">{data.name}</p>
          <p className="text-sm text-neutral-400">{artistNames}</p>
        </div>

        <div className="col-span-2">
          <p>{data.release_date}</p>
        </div>

        <div className="col-span-5">
          <p className="text-center">{data.album.name}</p>
        </div>

        <div className="col-span-1 flex items-center justify-end pr-8 gap-x-5">
          <div>
            <img src="/icons/red-heart.svg" alt="" />
          </div>

          <div>
            <p>{formattedTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
