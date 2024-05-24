import React from "react";
import { Link } from "react-router-dom";

export default function PlaylistBox({ data }) {
  return (
    <Link to={`/content/playlist/${data?.id}`}>
      <div className="rounded-xl bg-neutral-800 h-full flex flex-col">
        <div className="">
          <img
            className="rounded-t-xl w-52 h-52 object-cover"
            src={
              data?.images[0].url ? data?.images[0]?.url : "/img/no-image.jpg"
            }
            alt=""
          />
        </div>

        <div className="p-3 flex items-center justify-between gap-x-4 w-full">
          <p className="text-white text-lg font-semibold">
            {data?.name?.length > 12
              ? `${data?.name?.substring(0, 12)}...`
              : data?.name}
          </p>
          <img className="" src="/icons/red-playlist.svg" alt="" />
        </div>
      </div>
    </Link>
  );
}
