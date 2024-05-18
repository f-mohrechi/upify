import React from "react";
import SongItem from "./SongItem";

export default function SongsTable({ songs }) {
  return (
    <div>
      <div className="grid grid-cols-12 border-b border-b-neutral-700 text-neutral-400 pb-2 font-medium">
        <div className="col-span-4 ">
          <p># Title</p>
        </div>
        <div className="col-span-4 ">
          <p>Album</p>
        </div>
        <div className="col-span-2 ">
          <p>Date</p>
        </div>
        <div className="col-span-2 ">
          <p>name</p>
        </div>
      </div>

      <div className="pt-2">
        {songs.map((item) => {
          return (
            <div className="py-3">
              <SongItem item={item} key={item.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
