import React from "react";
import { Link } from "react-router-dom";

export default function MusicVideoBox({ data }) {
  return (
    <Link to={data.link} className="flex flex-col bg-dark-800 rounded-lg">
      <div>
        <img className="rounded-t-lg w-full" src={data.img} alt="" />
      </div>

      <div className="p-4">
        <p className="text-white text-lg font-semibold">{data.name}</p>

        <div className="flex justify-between text-dark-200 text-sm">
          <p>{data.artist}</p>
          <p>{data.view}</p>
        </div>
      </div>
    </Link>
  );
}
