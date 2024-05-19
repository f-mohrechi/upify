import React from "react";
import { Link } from "react-router-dom";

export default function AlbumBox({ data }) {
  const releaseYear = data.release_date.substring(0, 4);

  return (
    <Link to={`/content/album/${data.id}`}>
      <div className="rounded-xl bg-neutral-800">
        <div className="">
          <img className="rounded-xl w-52" src={data.images[0].url} alt="" />
        </div>

        <div className="p-3">
          <p className="text-white text-lg font-semibold">
            {data.name.length > 12
              ? `${data.name.substring(0, 12)}...`
              : data.name}
          </p>

          <div className="flex items-center gap-x-2 justify-between">
            <div className="flex items-center gap-x-2">
              <p className="text-neutral-400 text-sm">{releaseYear}</p>
              <div className="flex items-center justify-center">
                <img src="/icons/dot.svg" className="w-2" alt="" />
              </div>
              <p className="text-neutral-400 text-sm">{data.album_type}</p>
            </div>

            <img src="/icons/album.svg" alt="" />
          </div>
        </div>
      </div>
    </Link>
  );
}
