import React from "react";

export default function SongItem({ item }) {
  return (
    <div className="grid grid-cols-12 items-center text-white font-medium">
      {console.log(item, "item")}
      <div className="col-span-4 flex items-center gap-x-7">
        <p>{item.track.track_number}</p>
        <div className="w-16 h-16">
          <img
            className="rounded-lg"
            src={item.track.album.images[0].url}
            alt=""
          />
        </div>
        <p>{item.track.name}</p>
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
  );
}
