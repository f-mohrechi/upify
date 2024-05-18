import React from "react";

export default function PlaylistInfo({ playlist }) {
  return (
    <div
      className={` h-96 w-full p-10 rounded-md`}
      style={{ backgroundColor: playlist.primary_color }}
    >
      <div className="grid grid-cols-7 gap-28 items-center">
        <div className="col-span-2">
          <img src={playlist?.images[0]?.url} alt="" />
        </div>

        <div className="col-span-5">
          {playlist.public && (
            <p className="text-neutral-700 font-medium">public playlist</p>
          )}
          <div>
            <p className="text-neutral-900 font-extrabold text-8xl">
              {playlist.name}
            </p>

            <p className="text-neutral-700 mt-9">{playlist.description}</p>
            <div className="flex items-center gap-x-2">
              {playlist.owner && (
                <p className="mt-7 text-neutral-700 font-medium">
                  Made by {playlist.owner.display_name},{" "}
                </p>
              )}

              {playlist.followers && (
                <p className="mt-7 text-neutral-700 font-medium">
                  {playlist.followers.total} followers
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
