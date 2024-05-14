import React from "react";

export default function AddPlayListButton() {
  return (
    <div className="p-2">
      <button className="flex items-center gap-x-3 outline-none focus:outline-none">
        <img src="/icons/add.svg" alt="" />
        <p className="text-cyan-400 text-xl font-semibold">Add Playlist</p>
      </button>
    </div>
  );
}
