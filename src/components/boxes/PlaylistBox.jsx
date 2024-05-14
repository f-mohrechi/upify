import React from "react";
import { Link } from "react-router-dom";

export default function PlaylistBox({ data }) {
  return (
    <Link to={data.href}>
      <div className="rounded-xl bg-neutral-800">
        <div className="">
          <img className="rounded-xl w-52" src={data.images[0].url} alt="" />
        </div>

        <div className="p-3 flex items-center justify-between gap-x-4 w-full">
          <p className="text-white text-lg font-semibold">
            {data.name.length > 14
              ? `${data.name.substring(0, 14)}...`
              : data.name}
          </p>
          <img className="" src="/icons/red-playlist.svg" alt="" />
        </div>
      </div>
    </Link>
  );
}
