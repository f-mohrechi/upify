import React from "react";
import SongItem from "./SongItem";

export default function SongsTable({ songs, type }) {
  return (
    <div>
      <div className="grid grid-cols-12 border-b border-b-neutral-700 text-neutral-400 pb-2 font-medium px-3">
        <div className="col-span-6 ">
          <p># Title</p>
        </div>
        <div className="col-span-4 ">
          {type === "album" ? "" : <p>Album</p>}
        </div>

        <div className="col-span-2 flex justify-end">
          <img src="/icons/clock.svg" alt="" />
        </div>
      </div>

      <div className="pt-2">
        {songs?.map((item, index) => {
          return (
            <div className="py-3">
              <SongItem item={item} key={item.id} index={index} type={type} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
