import React from "react";

export default function MusicTrack({ data }) {
  const artistNames = data.artists.map((artist) => artist.name).join(", ");

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
      <div className="bg-neutral-600 bg-opacity-30 rounded-md grid grid-cols-10 w-full items-center">
        <div className="w-12 h-12 col-span-1">
          <img
            className="rounded-md"
            src={data?.album?.images[0]?.url}
            alt=""
          />
        </div>

        <div className="col-span-3">
          <p className="font-semibold">
            {" "}
            {data.name.length > 12
              ? `${data.name.substring(0, 12)}...`
              : data.name}
          </p>
          <p className="text-xs text-neutral-400">
            {artistNames.length > 12
              ? `${artistNames.substring(0, 12)}...`
              : artistNames}
          </p>
        </div>

        <div className="col-span-5">
          <p className="text-center text-xs text-neutral-300">
            {data.album.name}
          </p>
        </div>

        <div className="col-span-1 flex items-center justify-end pr-8 gap-x-5">
          <div>
            <img src="/icons/red-heart.svg" alt="" />
          </div>

          <div>
            <p className="text-sm">{formattedTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
