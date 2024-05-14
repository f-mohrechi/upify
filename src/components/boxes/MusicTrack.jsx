import React from "react";

export default function MusicTrack({ data }) {
  return (
    <div className="flex items-center gap-x-5 text-white">
      <div className="">
        <p className="text-3xl font-medium">#{data.id}</p>
      </div>

      <div className="bg-neutral-600 bg-opacity-30 rounded-xl grid grid-cols-12 w-full items-center">
        <div className="w-20 h-20 col-span-1">
          <img className="rounded-xl" src={data.img} alt="" />
        </div>

        <div className="col-span-3">
          <p className="text-lg font-semibold">{data.name}</p>
          <p className="text-sm text-neutral-400">{data.artist}</p>
        </div>

        <div className="col-span-2">
          <p>{data.releaseDate}</p>
        </div>

        <div className="col-span-5">
          <p className="text-center">{data.album}</p>
        </div>

        <div className="col-span-1 flex items-center justify-end pr-8 gap-x-5">
          <div>
            <img src="/icons/red-heart.svg" alt="" />
          </div>

          <div>
            <p>{data.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
