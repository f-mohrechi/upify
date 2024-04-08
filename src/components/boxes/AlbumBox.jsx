import React from "react";
import { Link } from "react-router-dom";

export default function AlbumBox({ data }) {
  return (
    <Link to={data.link}>
      <div className="rounded-xl bg-dark-800">
        <div className="">
          <img className="rounded-xl w-52" src={data.img} alt="" />
        </div>

        <div className="p-3">
          <p className="text-white text-lg font-semibold">{data.name}</p>

          <div className="flex justify-between w-full">
            <p className="text-dark-200 text-sm">{data.artist}</p>

            <img src="/icons/album.svg" alt="" />
          </div>
        </div>
      </div>
    </Link>
  );
}
