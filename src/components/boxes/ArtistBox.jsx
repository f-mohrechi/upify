import React from "react";
import { Link } from "react-router-dom";

export default function ArtistBox({ data }) {
  return (
    <Link to={data.link} className="flex flex-col justify-center items-center">
      <div className="">
        <img
          className="rounded-full w-36 h-36 "
          src={data.images[0].url}
          alt=""
        />
      </div>

      <div className="flex justify-center mt-5">
        <p className="text-center text-white text-lg font-medium">
          {data.name}
        </p>
      </div>
    </Link>
  );
}
