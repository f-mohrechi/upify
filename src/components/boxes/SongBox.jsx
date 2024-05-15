import React from "react";

export default function SongBox({ data }) {
  const artistNames = data.artists.map((artist) => artist.name).join(", ");

  return (
    <div className="bg-neutral-600 bg-opacity-30 p-4 rounded-xl flex flex-col">
      <div className="flex justify-center w-full">
        <img
          className="w-44 rounded-lg"
          src={data.album.images[0].url}
          alt=""
        />
      </div>

      <div className="pt-3">
        <p className="text-white font-semibold">
          {data.name.length > 18
            ? `${data.name.substring(0, 18)}...`
            : data.name}
        </p>
        <div className="flex justify-between w-full gap-x-3">
          <p className="text-neutral-400 text-xs">
            {artistNames.length > 23
              ? `${artistNames.substring(0, 23)}...`
              : artistNames}
          </p>
          <img src="/icons/music.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
