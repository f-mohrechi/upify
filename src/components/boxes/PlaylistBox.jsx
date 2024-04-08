import React from "react";
import { Link } from "react-router-dom";

export default function PlaylistBox({ data }) {
  return (
    <Link to={data.link}>
      <div className="rounded-xl bg-dark-800">
        <div className="">
          <img className="rounded-xl w-52" src={data.img} alt="" />
        </div>

        <div className="p-3 flex items-center justify-between w-full">
          <p className="text-white text-lg font-semibold">{data.name}</p>
          <img className="" src="/icons/red-playlist.svg" alt="" />
        </div>
      </div>
    </Link>
  );
}
